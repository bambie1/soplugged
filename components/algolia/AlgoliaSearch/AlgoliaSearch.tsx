import algoliasearch from "algoliasearch/lite";
import {
  InstantSearch,
  Hits,
  SearchBox,
  Stats,
  ClearRefinements,
  PoweredBy,
  Configure,
  Pagination,
  RefinementList,
} from "react-instantsearch-dom";

import { AlgoliaHit } from "../AlgoliaHit";
import { CustomRefinementList } from "../CustomRefinementList/CustomRefinementList";

import styles from "./AlgoliaSearch.module.scss";

const searchClient = algoliasearch(
  process.env.NEXT_PUBLIC_ALGOLIA_ID || "",
  process.env.NEXT_PUBLIC_ALGOLIA_SEARCH_API || ""
);

const AlgoliaSearch = () => {
  return (
    <div className="ais-InstantSearch">
      <InstantSearch indexName="Business" searchClient={searchClient}>
        <div className={styles.searchDiv}>
          <PoweredBy />
          <SearchBox />
        </div>

        <Configure hitsPerPage={12} />
        <CustomRefinementList attribute={"category"} />
        <CustomRefinementList attribute={"business_location"} />
        <ClearRefinements />

        <div className="cover"></div>
        <Stats />
        <Hits hitComponent={AlgoliaHit} />
        <Pagination />
      </InstantSearch>
    </div>
  );
};

export default AlgoliaSearch;
