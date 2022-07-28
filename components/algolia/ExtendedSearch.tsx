import { useRouter } from "next/router";
import qs from "qs";
import algoliasearch from "algoliasearch/lite";
import { FC, useCallback, useEffect, useMemo, useRef, useState } from "react";
import {
  InstantSearch,
  Configure,
  Pagination,
  connectSearchBox,
  Snippet,
  Hits,
} from "react-instantsearch-dom";
import { createQuerySuggestionsPlugin } from "@algolia/autocomplete-plugin-query-suggestions";
import { createLocalStorageRecentSearchesPlugin } from "@algolia/autocomplete-plugin-recent-searches";
import { Autocomplete } from "./Autocomplete";
import Searchbar from "./Searchbar";
import { CustomStateResults } from "./CustomStateResults";

const DEBOUNCE_TIME = 400;

const searchClient = algoliasearch(
  process.env.NEXT_PUBLIC_ALGOLIA_ID!,
  process.env.NEXT_PUBLIC_ALGOLIA_SEARCH_API!
);

const createURL = (state: any) => `?${qs.stringify(state)}`;

const searchStateToUrl = (searchState: any) => {
  return searchState ? createURL(searchState) : "";
};

export const urlToSearchState = (search: any) => {
  return qs.parse(search.slice(1));
};

const VirtualSearchBox = connectSearchBox(() => null);

const ExtendedSearch: FC = () => {
  const router = useRouter();
  const searchQuery = router.asPath.replace(router.pathname, "");
  const [searchState, setSearchState] = useState<any>(
    urlToSearchState(searchQuery)
  );
  const debouncedSetStateRef = useRef<any>(null);

  function onSearchStateChange(updatedSearchState: any) {
    clearTimeout(debouncedSetStateRef.current);

    debouncedSetStateRef.current = setTimeout(() => {
      router.push(searchStateToUrl(updatedSearchState));
    }, DEBOUNCE_TIME);

    setSearchState(updatedSearchState);
  }

  useEffect(() => {
    setSearchState(urlToSearchState(searchQuery));
  }, [searchQuery]);

  const onSubmit = useCallback(({ state }) => {
    setSearchState((searchState: any) => ({
      ...searchState,
      query: state.query,
    }));
  }, []);

  const onReset = useCallback(() => {
    setSearchState((searchState: any) => ({
      ...searchState,
      query: "",
    }));
  }, []);

  const plugins = useMemo(() => {
    const recentSearchesPlugin = createLocalStorageRecentSearchesPlugin({
      key: "search",
      limit: 3,
      transformSource({ source }: any) {
        return {
          ...source,
          onSelect({ item }) {
            setSearchState((searchState: any) => ({
              ...searchState,
              query: item.label,
            }));
          },
        };
      },
    });

    const querySuggestionsPlugin = createQuerySuggestionsPlugin({
      searchClient,
      indexName: "Business",
      getSearchParams() {
        // This creates a shared `hitsPerPage` value once the duplicates
        // between recent searches and Query Suggestions are removed.
        return recentSearchesPlugin!.data!.getAlgoliaSearchParams({
          hitsPerPage: 6,
        });
      },
      transformSource({ source }) {
        return {
          ...source,
          onSelect({ item }) {
            setSearchState((searchState: any) => ({
              ...searchState,
              query: item.query,
            }));
          },
        };
      },
    });

    return [recentSearchesPlugin, querySuggestionsPlugin];
  }, []);

  return (
    <div className="ais-InstantSearch">
      <InstantSearch
        indexName="Business"
        searchClient={searchClient}
        searchState={searchState}
        onSearchStateChange={onSearchStateChange}
        createURL={createURL}
      >
        <VirtualSearchBox />

        {/* <Autocomplete
          placeholder="Search products"
          detachedMediaQuery="none"
          initialState={{
            query: searchState.query,
          }}
          openOnFocus={true}
          onSubmit={onSubmit}
          onReset={onReset}
          // plugins={plugins}
        /> */}
        <Searchbar />

        <Configure hitsPerPage={12} />

        <CustomStateResults />
        <Pagination />

        {/* <div className="mt-10">
          <Hits hitComponent={Hit} />
          <Pagination />
        </div> */}
      </InstantSearch>
    </div>
  );
};

export default ExtendedSearch;

function Hit({ hit }: any) {
  return (
    <article className="hit">
      <div className="hit-image">
        <img src={hit.image} alt={hit.name} />
      </div>
      <div>
        <h1>
          <Snippet hit={hit} attribute="business_name" />
        </h1>
        <div>
          <strong>{hit.business_name}</strong>
        </div>
      </div>
    </article>
  );
}
