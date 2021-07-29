import React from "react";
import {
  Dialog,
  DialogContent,
  useMediaQuery,
  DialogActions,
  makeStyles,
  IconButton,
  Button,
  Slide,
  AppBar,
  Toolbar,
  Typography,
} from "@material/mui-components";
import { CloseIcon, SearchIcon } from "@material/mui-icons";
import { useTheme } from "@material-ui/core/styles";
import { CustomRefinementList } from "./CustomRefinementList";
import { useSearch } from "@contexts/searchContext";
import { ClearRefinements } from "react-instantsearch-dom";
import CustomRefinements from "./CustomRefinements";

const useStyles = makeStyles((theme) => ({
  dialogContent: {
    paddingTop: "70px",
    paddingBottom: "70px",
    positon: "relative",
    background: "rgb(255,250,242)",
    background:
      "linear-gradient(0deg, rgba(255,250,242,1) 0%, rgba(255,255,255,1) 100%)",
  },
  background: {
    position: "absolute",
    height: "50%",
    width: "100%",
    background: "blue",
    bottom: 0,
    left: 0,
  },
  toolBar: {
    display: "flex",
    justifyContent: "space-between",
    paddingTop: "8px",
  },
}));

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

const AlgoliaSearchFilters = ({ opened, handleClose, defaultRefinement }) => {
  const classes = useStyles();
  const { contextCategory } = useSearch();
  const theme = useTheme();
  const fullScreen = useMediaQuery(theme.breakpoints.down("sm"));

  const filters = [
    { label: "CATEGORY", attribute: "category", default: contextCategory },
    { label: "LOCATION", attribute: "business_location" },
  ];

  return (
    <div>
      <Dialog
        fullScreen={fullScreen}
        open={opened}
        onClose={handleClose}
        aria-labelledby="search-filters-dialog"
        TransitionComponent={Transition}
        fullWidth
        maxWidth="md"
      >
        <DialogContent className={classes.dialogContent}>
          {/* <div className="algolia-filters">
            <ClearRefinements defaultRefinement={defaultRefinement} />
            <CustomRefinements clearsQuery />
          </div> */}
          {filters.map((item, index) => (
            <CustomRefinementList
              key={item.attribute}
              attribute={item.attribute}
              label={item.label}
              // hide={currentDropDown !== index + 1 && !laptop}
              defaultRefinement={item.default ? [item.default] : []}
            />
          ))}
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default AlgoliaSearchFilters;
