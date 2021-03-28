import React from "react";
import Skeleton from "./Skeleton";
import { Grid, Paper, makeStyles, Container } from "../mui-components";

const useStyles = makeStyles((theme) => ({
  paper: {
    padding: "15px",
  },
}));

const DashboardSkeleton = ({ page }) => {
  const classes = useStyles();

  return (
    <div className={classes.paper}>
      <Grid container spacing={2}>
        <Grid
          item
          xs={12}
          style={{ display: "flex", justifyContent: "center" }}
        >
          <Skeleton type="heading" />
        </Grid>
        {page === "home" && (
          <Grid
            item
            xs={12}
            style={{ display: "flex", justifyContent: "center" }}
          >
            <Skeleton type="input" />
          </Grid>
        )}
        {page === "profile" ? (
          <Container maxWidth="sm">
            <Grid item xs={12}>
              <Skeleton type="input" />
            </Grid>
            <Grid item xs={12}>
              <Skeleton type="input" />
            </Grid>
            <Grid item xs={12}>
              <Skeleton type="button" />
            </Grid>
          </Container>
        ) : (
          <>
            <Grid item xs={12} sm={6}>
              <Skeleton type="box" />
            </Grid>
            <Grid item xs={12} sm={6}>
              <Skeleton type="box" />
            </Grid>
            <Grid item xs={12} sm={6}>
              <Skeleton type="box" />
            </Grid>
            <Grid item xs={12} sm={6}>
              <Skeleton type="box" />
            </Grid>
          </>
        )}
      </Grid>
    </div>
  );
};

export default DashboardSkeleton;
