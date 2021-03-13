import React from "react";
import Skeleton from "./Skeleton";
import { Grid, Paper } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  paper: {
    padding: "15px",
    margin: "auto",
    maxWidth: "440px",
  },
}));

const BusinessCardSkeleton = () => {
  const classes = useStyles();

  return (
    <Paper elevation={3} className={classes.paper}>
      <Grid container spacing={2}>
        <Grid
          item
          xs={12}
          style={{ display: "flex", justifyContent: "center" }}
        >
          <Skeleton type="heading" />
        </Grid>
        <Grid item xs={12}>
          <Skeleton type="input" />
        </Grid>
        <Grid item xs={12}>
          <Skeleton type="image" />
        </Grid>
      </Grid>
    </Paper>
  );
};

export default BusinessCardSkeleton;
