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
import {
  Button,
  useMediaQuery,
  Container,
  Badge,
} from "@material/mui-components";
import { TuneIcon } from "@material/mui-icons";
import { useSearch } from "@contexts/searchContext";
import AlgoliaSearchFilters from "./AlgoliaSearchFilters";
import styles from "../../styles/Directory.module.scss";

const searchClient = algoliasearch(
  process.env.NEXT_PUBLIC_ALGOLIA_ID,
  process.env.NEXT_PUBLIC_ALGOLIA_SEARCH_API
);

const AlgoliaSearch = () => {
  const laptop = useMediaQuery("(min-width:1024px)");
  const { contextCategory } = useSearch();
  const [dialogOpen, setDialogOpen] = useState(false);

  return (
    <>
      <div className="ais-InstantSearch">
        <InstantSearch indexName="Business" searchClient={searchClient}>
          {/* <PoweredBy /> */}
          <div className={styles.sticky_search}>
            <SearchBox defaultRefinement={contextCategory} />
            <Badge
              color="secondary"
              badgeContent={9}
              style={{ alignSelf: "center", cursor: "pointer" }}
              onClick={() => setDialogOpen(true)}
              variant="dot"
              anchorOrigin={{
                vertical: "top",
                horizontal: "left",
              }}
            >
              <TuneIcon />
            </Badge>
          </div>
          <div className="cover"></div>
          <Container maxWidth="lg" className="search-results">
            <Stats />
            <Hits hitComponent={AlgoliaHit} />
            <Pagination />
          </Container>
          <AlgoliaSearchFilters
            opened={dialogOpen}
            handleClose={() => setDialogOpen(false)}
          />
        </InstantSearch>
      </div>
    </>
  );
};

export default AlgoliaSearch;
