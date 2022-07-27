import { useRouter } from "next/router";
import qs from "qs";
import algoliasearch from "algoliasearch/lite";
import { FC, useEffect, useRef, useState } from "react";
import {
  InstantSearch,
  SearchBox,
  ClearRefinements,
  PoweredBy,
  Configure,
  Pagination,
} from "react-instantsearch-dom";
import { useWindowSize } from "@reach/window-size";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCaretDown, faCaretUp } from "@fortawesome/free-solid-svg-icons";

import { CustomRefinementList } from "../CustomRefinementList/CustomRefinementList";
import { CustomRefinements } from "../CustomRefinements";
import { CustomStateResults } from "../CustomStateResults";

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

const urlToSearchState = (search: any) => {
  return qs.parse(search.slice(1));
};

const filters = [
  { label: "CATEGORY", attribute: "category" },
  { label: "LOCATION", attribute: "business_location" },
];

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

  return (
    <div className="ais-InstantSearch">
      <InstantSearch
        indexName="Business"
        searchClient={searchClient}
        searchState={searchState}
        onSearchStateChange={onSearchStateChange}
        createURL={createURL}
      >
        <div className={styles.searchDiv}>
          {/* <PoweredBy /> */}
          <SearchBox />
        </div>

        <div className={styles.searchFilters}>
          {filters.map((item, index) => {
            const isActive = currentDropDown === index + 1;

            let isFiltered = false;

            if (searchState?.refinementList) {
              isFiltered =
                searchState.refinementList[item.attribute]?.length > 0;
            }

            return (
              <button
                key={item.label}
                onClick={() =>
                  isActive
                    ? setCurrentDropDown(0)
                    : setCurrentDropDown(index + 1)
                }
                className={`button withIcon ${isActive && styles.activeFilter}`}
              >
                {item.label}
                {isFiltered && <span className={styles.active} />}
                <FontAwesomeIcon icon={isActive ? faCaretUp : faCaretDown} />
              </button>
            );
          })}
        </div>

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
