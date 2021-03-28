import React from "react";
import Skeleton from "./Skeleton";
import { Grid, Container, makeStyles } from "../mui-components";

const useStyles = makeStyles((theme) => ({
  paper: {
    padding: "15px",
    margin: "auto",
    maxWidth: "440px",
  },
}));

const BusinessPageSkeleton = () => {
  const classes = useStyles();

  return (
    <Container>
      <div style={{ display: "flex", justifyContent: "center" }}>
        <Skeleton type="heading" />
      </div>
      <div style={{ display: "flex", justifyContent: "center" }}>
        <Skeleton type="input" />
      </div>
      <Grid container spacing={2}>
        <Grid item xs={12} sm={6}>
          <Skeleton type="image" />
          <Skeleton type="input" />
        </Grid>
        <Grid item xs={12} sm={6}>
          <Skeleton type="image" />
        </Grid>
      </Grid>
      <div style={{ display: "flex", justifyContent: "center" }}>
        <Skeleton type="input" />
      </div>
    </Container>
  );
};

export default BusinessPageSkeleton;
