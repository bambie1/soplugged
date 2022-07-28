import { useRouter } from "next/router";
import qs from "qs";
import algoliasearch from "algoliasearch/lite";
import { FC, useCallback, useEffect, useMemo, useRef, useState } from "react";
import {
  InstantSearch,
  SearchBox,
  ClearRefinements,
  PoweredBy,
  Configure,
  Pagination,
  connectSearchBox,
} from "react-instantsearch-dom";
import { useWindowSize } from "@reach/window-size";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCaretDown, faCaretUp } from "@fortawesome/free-solid-svg-icons";
import { createQuerySuggestionsPlugin } from "@algolia/autocomplete-plugin-query-suggestions";
import { createLocalStorageRecentSearchesPlugin } from "@algolia/autocomplete-plugin-recent-searches";

import { CustomRefinementList } from "../CustomRefinementList/CustomRefinementList";
import { CustomRefinements } from "../CustomRefinements";
import { CustomStateResults } from "../CustomStateResults";

import { Autocomplete } from "../Autocomplete";

import styles from "./AlgoliaSearch.module.scss";

const DEBOUNCE_TIME = 400;

const searchClient = algoliasearch(
  process.env.NEXT_PUBLIC_ALGOLIA_ID || "",
  process.env.NEXT_PUBLIC_ALGOLIA_SEARCH_API || ""
);

export const createURL = (state: any) => `?${qs.stringify(state)}`;

const searchStateToUrl = (searchState: any) => {
  return searchState ? createURL(searchState) : "";
};

export const urlToSearchState = (search: any) => {
  return qs.parse(search.slice(1));
};

const filters = [
  { label: "CATEGORY", attribute: "category" },
  { label: "LOCATION", attribute: "business_location" },
];

const VirtualSearchBox = connectSearchBox(() => null);

const AlgoliaSearch: FC = () => {
  const router = useRouter();
  const searchQuery = router.asPath.replace(router.pathname, "");
  const [currentDropDown, setCurrentDropDown] = useState(0); //0, for no dropdowns
  const { width } = useWindowSize();
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
        <Autocomplete
          placeholder="Search"
          detachedMediaQuery="none"
          initialState={{
            query: searchState.query,
          }}
          openOnFocus={true}
          onSubmit={onSubmit}
          onReset={onReset}
          plugins={plugins}
        />

        <Configure hitsPerPage={12} />
        <CustomRefinementList
          operator="or"
          attribute={"category"}
          hide={currentDropDown !== 1}
        />
        <CustomRefinementList
          operator="or"
          attribute={"business_location"}
          hide={currentDropDown !== 2}
        />
        <ClearRefinements />
        {width >= 768 && <CustomRefinements clearsQuery />}

        <div className="cover"></div>
        <CustomStateResults />
        <Pagination />
      </InstantSearch>
    </div>
  );
};

export default AlgoliaSearch;
