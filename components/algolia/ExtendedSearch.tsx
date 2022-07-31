// @ts-nocheck

import { createQuerySuggestionsPlugin } from "@algolia/autocomplete-plugin-query-suggestions";
import { createLocalStorageRecentSearchesPlugin } from "@algolia/autocomplete-plugin-recent-searches";
import algoliasearch from "algoliasearch/lite";
import qs from "qs";
import React, {
  useCallback,
  useEffect,
  useMemo,
  useRef,
  useState,
} from "react";
import {
  Configure,
  connectSearchBox,
  HierarchicalMenu,
  Hits,
  InstantSearch,
  Pagination,
  Panel,
  RefinementList,
  Snippet,
} from "react-instantsearch-dom";
import { getAlgoliaResults } from "@algolia/autocomplete-js";

import { Autocomplete } from "./Autocomplete";
import { CategoryHit } from "./CategoryHit";

import "@algolia/autocomplete-theme-classic/dist/theme.css";
import { CustomStateResults } from "./CustomStateResults";
import { useRouter } from "next/router";

export const INSTANT_SEARCH_INDEX_NAME = "Business";
export const INSTANT_SEARCH_QUERY_SUGGESTIONS =
  "instant_search_demo_query_suggestions";
export const INSTANT_SEARCH_HIERARCHICAL_ATTRIBUTES = [
  "hierarchicalCategories.lvl0",
  "hierarchicalCategories.lvl1",
];

const searchClient = algoliasearch(
  process.env.NEXT_PUBLIC_ALGOLIA_ID!,
  process.env.NEXT_PUBLIC_ALGOLIA_SEARCH_API!
);

function createURL(searchState) {
  return qs.stringify(searchState, { addQueryPrefix: true });
}

function searchStateToUrl({ location }, searchState) {
  if (Object.keys(searchState).length === 0) {
    return "";
  }

  // Remove configure search state from query parameters
  const { configure, ...rest } = searchState;
  return `${location.pathname}${createURL(rest)}`;
}

function urlToSearchState({ search }) {
  return qs.parse(search.slice(1));
}

const VirtualSearchBox = connectSearchBox(() => null);

const ExtendedSearch = () => {
  const router = useRouter();
  const [searchState, setSearchState] = useState(() => {
    if (typeof window !== "undefined") {
      return urlToSearchState(window.location);
    } else return null;
  });
  const timerRef = useRef(null);

  useEffect(() => {
    clearTimeout(timerRef.current);

    timerRef.current = setTimeout(() => {
      window.history.pushState(
        searchState,
        null,
        searchStateToUrl({ location: window.location }, searchState)
      );
    }, 400);
  }, [searchState, router]);

  const currentCategory = useMemo(
    () =>
      searchState?.hierarchicalMenu?.[
        INSTANT_SEARCH_HIERARCHICAL_ATTRIBUTES[0]
      ] || "",
    [searchState]
  );

  const onSubmit = useCallback(({ state }) => {
    setSearchState((searchState) => ({
      ...searchState,
      query: state.query,
    }));
  }, []);
  const onReset = useCallback(() => {
    setSearchState((searchState) => ({
      ...searchState,
      query: "",
      hierarchicalMenu: {
        [INSTANT_SEARCH_HIERARCHICAL_ATTRIBUTES[0]]: "",
      },
    }));
  }, []);

  const plugins = useMemo(() => {
    const recentSearchesPlugin = createLocalStorageRecentSearchesPlugin({
      key: "search",
      limit: 3,
      transformSource({ source }) {
        return {
          ...source,
          onSelect({ item }) {
            setSearchState((searchState) => ({
              ...searchState,
              query: item.label,
              hierarchicalMenu: {
                [INSTANT_SEARCH_HIERARCHICAL_ATTRIBUTES[0]]:
                  item.category || "",
              },
            }));
          },
        };
      },
    });

    return [recentSearchesPlugin];
  }, []);

  return (
    <div>
      <InstantSearch
        searchClient={searchClient}
        indexName={INSTANT_SEARCH_INDEX_NAME}
        searchState={searchState}
        onSearchStateChange={setSearchState}
        createURL={createURL}
      >
        <header className="header">
          <div className="header-wrapper wrapper mx-auto max-w-2xl">
            {/* A virtual search box is required for InstantSearch to understand the `query` search state property */}
            <VirtualSearchBox />
            <Autocomplete
              placeholder="Search products"
              detachedMediaQuery="none"
              initialState={{
                query: searchState?.query || "",
              }}
              openOnFocus={true}
              onSubmit={onSubmit}
              onReset={onReset}
              plugins={plugins}
              getSources={({ query }: any) => [
                {
                  sourceId: "categories",
                  getItems() {
                    return getAlgoliaResults({
                      searchClient,
                      queries: [
                        {
                          indexName: "Category",
                          query,
                          params: {
                            hitsPerPage: 4,
                          },
                        },
                      ],
                    });
                  },
                  templates: {
                    item({ item, components }: any) {
                      return <CategoryHit hit={item} components={components} />;
                    },
                  },
                },
              ]}
            />
          </div>
        </header>

        <Configure hitsPerPage={12} />

        <CustomStateResults />
        <RefinementList operator="or" attribute={"category"} />
        {/* <div className="wrapper container">
          <div>
            <Hits hitComponent={Hit} />
            <Pagination />
          </div>
        </div> */}
      </InstantSearch>
    </div>
  );
};

export default ExtendedSearch;
