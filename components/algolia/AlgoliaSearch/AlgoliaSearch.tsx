import { useAlgoliaSearch } from "@/context/algoliaSearchContext";
import algoliasearch from "algoliasearch/lite";
import { useEffect, useState } from "react";
import {
  InstantSearch,
  Hits,
  SearchBox,
  Stats,
  ClearRefinements,
  PoweredBy,
  Configure,
  Pagination,
} from "react-instantsearch-dom";
import { useWindowSize } from "@reach/window-size";

import { AlgoliaHit } from "../AlgoliaHit";
import { CustomRefinementList } from "../CustomRefinementList/CustomRefinementList";
import { CustomRefinements } from "../CustomRefinements";

import styles from "./AlgoliaSearch.module.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCaretDown, faCaretUp } from "@fortawesome/free-solid-svg-icons";
import { CustomStateResults } from "../CustomStateResults";

const searchClient = algoliasearch(
  process.env.NEXT_PUBLIC_ALGOLIA_ID || "",
  process.env.NEXT_PUBLIC_ALGOLIA_SEARCH_API || ""
);

const filters = [
  { label: "CATEGORY", attribute: "category" },
  { label: "LOCATION", attribute: "business_location" },
];

const AlgoliaSearch = () => {
  const [currentDropDown, setCurrentDropDown] = useState(0); //0, for no dropdowns
  const { category, location } = useAlgoliaSearch();
  const { width } = useWindowSize();

  return (
    <div className="ais-InstantSearch">
      <InstantSearch indexName="Business" searchClient={searchClient}>
        <div className={styles.searchDiv}>
          <PoweredBy />
          <SearchBox />
        </div>

        <div className={styles.searchFilters}>
          {filters.map((item, index) => {
            const isActive = currentDropDown === index + 1;
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
                <FontAwesomeIcon icon={isActive ? faCaretUp : faCaretDown} />
              </button>
            );
          })}
        </div>

        <Configure hitsPerPage={12} />
        <CustomRefinementList
          operator="or"
          attribute={"category"}
          defaultRefinement={category ? [category] : undefined}
          hide={currentDropDown !== 1}
        />
        <CustomRefinementList
          operator="or"
          attribute={"business_location"}
          defaultRefinement={location ? [location] : undefined}
          hide={currentDropDown !== 2}
        />
        <ClearRefinements />
        {width >= 768 && <CustomRefinements clearsQuery />}

        <div className="cover"></div>
        {/* <Stats /> */}
        {/* <Hits hitComponent={AlgoliaHit} /> */}
        <CustomStateResults />
        <Pagination />
      </InstantSearch>
    </div>
  );
};

export default AlgoliaSearch;
