// @ts-nocheck

import { useRouter } from "next/router";
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
  ClearRefinements,
  Configure,
  connectRefinementList,
  connectSearchBox,
  InstantSearch,
  Pagination,
} from "react-instantsearch-dom";
import { getAlgoliaResults } from "@algolia/autocomplete-js";

import { Autocomplete } from "./Autocomplete";
import { CategoryHit } from "./CategoryHit";
import { CustomStateResults } from "./CustomStateResults";

import "@algolia/autocomplete-theme-classic/dist/theme.css";

const INSTANT_SEARCH_INDEX_NAME = "Business";

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

const VirtualRefinementList = connectRefinementList(() => null);

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

  useEffect(() => {
    setSearchState(urlToSearchState(window.location));
  }, [router]);

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
    }));
  }, []);

  const plugins = useMemo(() => {
    const recentSearchesPlugin = createLocalStorageRecentSearchesPlugin({
      key: "search",
      limit: 1,
      transformSource({ source }) {
        return {
          ...source,
          onSelect({ item }) {
            setSearchState((searchState) => ({
              ...searchState,
              query: item.label,
            }));
          },
        };
      },
    });

    return [recentSearchesPlugin];
  }, []);

  const filteredCategory = searchState?.refinementList?.category?.[0] || null;
  const filteredLocation =
    searchState?.refinementList?.business_location?.[0] || null;

  return (
    <div>
      <h1 className="mb-8 text-center text-3xl font-bold lg:text-5xl">
        <span className="text-primary">{filteredCategory || "All"}</span>{" "}
        businesses
      </h1>
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
              classNames={{}}
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

        <ClearRefinements />
        <CustomStateResults />
        <VirtualRefinementList attribute={"category"} />
        <Pagination />
      </InstantSearch>
    </div>
  );
};

export default ExtendedSearch;
