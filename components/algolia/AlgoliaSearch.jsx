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
  connectRefinementList,
} from "react-instantsearch-dom";
import algoliasearch from "algoliasearch/lite";
import AlgoliaHit from "./AlgoliaHit";
import { CustomRefinementList } from "./CustomRefinementList";
import CustomRefinements from "./CustomRefinements";
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

const VirtualRefinementList = connectRefinementList(() => null);

const AlgoliaSearch = () => {
  const laptop = useMediaQuery("(min-width:1024px)");
  const { contextCategory } = useSearch();
  const [dialogOpen, setDialogOpen] = useState(false);
  const [categoryState, setCategoryState] = React.useState([]);
  const [locationState, setLocationState] = React.useState([]);

  return (
    <>
      <div className="ais-InstantSearch">
        <InstantSearch
          indexName="Business"
          searchClient={searchClient}
          onSearchStateChange={(state) => {
            console.log(state.refinementList);
            if (dialogOpen && state.refinementList?.category) {
              setCategoryState(state.refinementList?.category);
            }
            if (dialogOpen && state.refinementList?.location) {
              setLocationState(state.refinementList?.location);
            }
          }}
        >
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
            <VirtualRefinementList
              defaultRefinement={categoryState}
              attribute="category"
            />
            <Stats />
            <Hits hitComponent={AlgoliaHit} />
            <Pagination />
          </Container>
          <AlgoliaSearchFilters
            opened={dialogOpen}
            handleClose={() => setDialogOpen(false)}
            // defaultRefinement={categoryState}
          />
        </InstantSearch>
      </div>
    </>
  );
};

export default AlgoliaSearch;
