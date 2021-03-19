import React, { useState } from "react";
import {
  InstantSearch,
  Hits,
  SearchBox,
  Pagination,
  Stats,
  ClearRefinements,
  Configure,
  PoweredBy,
} from "react-instantsearch-dom";
import algoliasearch from "algoliasearch/lite";
import AlgoliaHit from "./AlgoliaHit";
import { CustomRefinementList } from "./CustomRefinementList";
import { CustomCurrentRefinements } from "./CustomRefinements";
import { Button, useMediaQuery } from "../mui-components";
import { ExpandLessIcon, ExpandMoreIcon } from "../mui-icons";
import { useSearch } from "../../contexts/searchContext";

const searchClient = algoliasearch(
  process.env.NEXT_PUBLIC_ALGOLIA_ID,
  process.env.NEXT_PUBLIC_ALGOLIA_SEARCH_API
);

const AlgoliaSearch = () => {
  const [currentDropDown, setCurrentDropDown] = useState(0); //0, for no dropdowns
  const laptop = useMediaQuery("(min-width:1024px)");
  const { contextCategory } = useSearch();

  const filters = [
    { label: "CATEGORY", attribute: "category", default: contextCategory },
    { label: "LOCATION", attribute: "business_location" },
  ];
  return (
    <>
      <div className="ais-InstantSearch">
        <InstantSearch indexName="Business" searchClient={searchClient}>
          <div className="search-algolia">
            {/* <PoweredBy /> */}
            <SearchBox />
          </div>
          <div className="results-filters">
            <div className="left-panel">
              {!laptop &&
                filters.map((item, index) => (
                  <Button
                    key={item.label}
                    className="refinementMobile"
                    onClick={() =>
                      currentDropDown !== index + 1
                        ? setCurrentDropDown(index + 1)
                        : setCurrentDropDown(0)
                    }
                    variant="contained"
                    color={
                      currentDropDown === index + 1 ? "primary" : "default"
                    }
                  >
                    {item.label}
                    {currentDropDown === index + 1 ? (
                      <ExpandLessIcon />
                    ) : (
                      <ExpandMoreIcon />
                    )}
                  </Button>
                ))}
              {filters.map((item, index) => (
                <CustomRefinementList
                  key={item.attribute}
                  attribute={item.attribute}
                  label={item.label}
                  hide={currentDropDown !== index + 1 && !laptop}
                  defaultRefinement={item.default ? [item.default] : []}
                />
              ))}
              <Configure hitsPerPage={12} />
            </div>
            <div className="right-panel">
              <ClearRefinements />
              <CustomCurrentRefinements clearsQuery />
              <Stats />
              <Hits hitComponent={AlgoliaHit} />
              <Pagination />
            </div>
          </div>
        </InstantSearch>
      </div>
    </>
  );
};

export default AlgoliaSearch;
