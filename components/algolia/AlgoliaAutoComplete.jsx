import React, { useState } from "react";
import algoliasearch from "algoliasearch/lite";
import { InstantSearch, Configure, Index } from "react-instantsearch-dom";
import Autocomplete from "./Autocomplete";
import { useSearch } from "@contexts/searchContext";
import { useRouter } from "next/router";
import {
  Dialog,
  DialogContent,
  useMediaQuery,
  DialogActions,
  makeStyles,
  IconButton,
  Button,
} from "@material/mui-components";
import { CloseIcon, SearchIcon } from "@material/mui-icons";
import { useTheme } from "@material-ui/core/styles";

// const searchClient = algoliasearch(
//   "0P514VMKM1",
//   "a991b7a115a14c6c44df6fb753511267"
// );
const searchClient = algoliasearch(
  process.env.NEXT_PUBLIC_ALGOLIA_ID,
  process.env.NEXT_PUBLIC_ALGOLIA_SEARCH_API
);

const useStyles = makeStyles((theme) => ({
  closeButton: {
    position: "absolute",
    right: theme.spacing(1),
    top: theme.spacing(1),
  },
  button: {
    backgroundColor: "white",
    marginTop: "16px",
    padding: "0.7rem",
    "&:hover": {
      backgroundColor: "#fafafa",
      borderColor: theme.palette.primary.main,
    },
  },
  autocompleteDialog: {
    "& .MuiDialog-paperWidthLg": {
      backgroundColor: "rgb(255 255 255 / 57%)",
      paddingTop: "24px",
    },
  },
}));

const AlgoliaAutoComplete = () => {
  const classes = useStyles();
  const [query, setQuery] = useState("");
  const [showSearchDialog, setShowSearchDialog] = useState(false);
  const router = useRouter();
  const { setContextCategory } = useSearch();
  const theme = useTheme();
  const fullScreen = useMediaQuery(theme.breakpoints.down("sm"));

  const onSuggestionSelected = (_, { suggestion }) => {
    // setContextCategory(suggestion.name);
    if (suggestion.slug) {
      router.push(`/business/${suggestion.slug}`);
    } else {
      setContextCategory(suggestion.name);
      router.push("/search");
    }
    setQuery("");
    setShowSearchDialog(false);
  };

  const onSuggestionCleared = () => {
    setQuery("");
  };
  const handleOpen = () => {
    setShowSearchDialog(true);
  };
  const handleClose = () => {
    setShowSearchDialog(false);
  };

  return (
    <>
      <Button
        variant="outlined"
        startIcon={<SearchIcon />}
        fullWidth
        disableRipple
        onClick={handleOpen}
        className={classes.button}
        size="large"
      >
        What are you looking for?
      </Button>
      {showSearchDialog && (
        <Dialog
          onClose={handleClose}
          aria-labelledby="algolia-search-dialog"
          open={showSearchDialog}
          fullScreen={fullScreen}
          maxWidth="lg"
          fullWidth
          className={classes.autocompleteDialog}
        >
          <DialogContent>
            <div className="autocomplete-search-container">
              <InstantSearch indexName="Business" searchClient={searchClient}>
                <Configure hitsPerPage={5} />
                <Autocomplete
                  onSuggestionSelected={onSuggestionSelected}
                  onSuggestionCleared={onSuggestionCleared}
                />
                <Index indexName="Business" />
                <Index indexName="Category" />
              </InstantSearch>
            </div>
          </DialogContent>
          {fullScreen && (
            <DialogActions>
              <Button
                onClick={handleClose}
                color="secondary"
                variant="contained"
              >
                Close
              </Button>
            </DialogActions>
          )}
        </Dialog>
      )}
    </>
  );
};

export default AlgoliaAutoComplete;
