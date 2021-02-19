import React from "react";
import { Highlight, connectRefinementList } from "react-instantsearch-dom";
import { makeStyles } from "@material-ui/core/styles";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import Checkbox from "@material-ui/core/Checkbox";
import Divider from "@material-ui/core/Divider";
import { Button, Paper, Typography } from "@material-ui/core";

const ITEMS_LIMIT = 4;
const useStyles = makeStyles((theme) => ({
  root: {
    width: "calc(100% - 16px)",
    maxWidth: "600px",
    backgroundColor: theme.palette.background.paper,
    padding: "8px",
    margin: "8px auto 0px",
  },
  numBadge: {
    padding: ".1rem .4rem",
    fontSize: ".8rem",
    color: "#3a4570",
    backgroundColor: "#dfe2ee",
    borderRadius: "8px",
    marginLeft: "0.5rem",
  },
}));

const RefinementList = ({
  items,
  isFromSearch,
  refine,
  searchForItems,
  createURL,
  hide,
  label,
}) => {
  const classes = useStyles();
  const [extended, setExtended] = React.useState(false);
  return (
    <Paper
      className={classes.root}
      elevation={2}
      style={{ display: hide ? "none" : "block" }}
    >
      <Typography variant="caption">{label}</Typography>
      <List component="nav" aria-label="location refinement options">
        <ListItem disableGutters>
          <input
            type="search"
            onChange={(event) => searchForItems(event.currentTarget.value)}
            style={{ width: "100%" }}
          />
        </ListItem>
        <Divider />
        {items.map(
          (item, index) =>
            (index < ITEMS_LIMIT || extended) && (
              <ListItem button key={item.label} disableRipple disableGutters>
                <a
                  href={createURL(item.value)}
                  style={{
                    display: "flex",
                    alignItems: "center",
                    fontSize: "0.8rem",
                  }}
                  onClick={(event) => {
                    event.preventDefault();
                    refine(item.value);
                  }}
                >
                  <ListItemIcon style={{ minWidth: "auto" }}>
                    <Checkbox
                      checked={item.isRefined}
                      disableRipple
                      inputProps={{ "aria-labelledby": item.label }}
                      style={{ padding: "0px 2px 0px 0px" }}
                    />
                  </ListItemIcon>
                  {isFromSearch ? (
                    <Highlight attribute="label" hit={item} />
                  ) : (
                    item.label
                  )}{" "}
                  <span className={classes.numBadge}>{item.count}</span>
                </a>
              </ListItem>
            )
        )}
      </List>
      {items.length > ITEMS_LIMIT && (
        <Button size="small" onClick={() => setExtended(!extended)}>
          {extended ? "Show Less" : "Show More"}
        </Button>
      )}
    </Paper>
  );
};

export const CustomRefinementList = connectRefinementList(RefinementList);
