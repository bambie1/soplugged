import React from "react";
import Skeleton from "./Skeleton";
import { Grid, Paper, makeStyles } from "@material/mui-components";

const useStyles = makeStyles((theme) => ({
  paper: {
    padding: "15px",
    marginBottom: "10px",
  },
  grid: {
    "& .MuiFormControl-root": {
      width: "100%",
    },
  },
  head: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
}));

const BusinessInfoSkeleton = () => {
  const classes = useStyles();

  return (
    <>
      <div className={classes.head}>
        <Skeleton type="heading" />
        <Skeleton type="heading" />
      </div>
      <Grid className={classes.grid} container spacing={2}>
        <Grid item xs={12} md={6}>
          <Paper elevation={3} className={classes.paper}>
            <Grid className={classes.grid} container spacing={2}>
              <Grid item xs={12}>
                <Skeleton type="title" />
              </Grid>
              {[1, 2, 3].map((x) => (
                <Grid item xs={12} sm={6} key={x}>
                  <Skeleton type="input" />
                </Grid>
              ))}

              <Grid item xs={12} sm={6}>
                <Skeleton type="button" />
              </Grid>

              {[1, 2, 3].map((x) => (
                <Grid item xs={12} key={x}>
                  <Skeleton type="input" />
                </Grid>
              ))}
            </Grid>
          </Paper>
        </Grid>
        <Grid className={classes.grid} item xs={12} md={6}>
          <Paper elevation={3} className={classes.paper}>
            <Grid className={classes.grid} container spacing={2}>
              <Grid item xs={12}>
                <Skeleton type="title" />
              </Grid>
              {[1, 2].map((x) => (
                <Grid item xs={12} key={x}>
                  <Skeleton type="input" />
                </Grid>
              ))}
            </Grid>
          </Paper>
          <Skeleton type="button" />
        </Grid>
      </Grid>
    </>
  );
};

export default BusinessInfoSkeleton;
