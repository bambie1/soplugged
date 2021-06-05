import React from "react";
import displayShopifyCollection from "../src/shopifyStore";
import { Typography, makeStyles, Box } from "@material/mui-components";
import SEO from "@components/SEO";
import SubscribeForm from "@components/SubscribeForm";
import dynamic from "next/dynamic";

const DynamicProgress = dynamic(() =>
  import("@material/mui-components").then((mod) => mod.CircularProgress)
);
const DynamicAlert = dynamic(() =>
  import("@material/mui-lab").then((mod) => mod.Alert)
);

const useStyles = makeStyles((theme) => ({
  loading: {
    position: "absolute",
    top: "0",
    left: "0",
    width: "100%",
    zIndex: "1",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
  },
}));

const Merch = () => {
  const classes = useStyles();
  return (
    <>
      <SEO
        description="Custom tees, sweatshirts and accessories to spread the word"
        title="SoPlugged Merch"
      />
      <Box
        mt={3}
        className="page"
        style={{ display: "flex", flexDirection: "column" }}
      >
        <Typography
          variant="h4"
          style={{ textAlign: "center", fontWeight: "700" }}
          gutterBottom={true}
        >
          shop
        </Typography>
        <Typography align="center" gutterBottom={true}>
          Normalize <b>#buyingblack</b>, but make it fashionable
        </Typography>
        <hr
          style={{ width: "40%", maxWidth: "170px", marginBottom: "40px" }}
        ></hr>
        <div
          id="collection-component-1622397974663"
          style={{ position: "relative", display: "flex", minHeight: "250px" }}
        >
          {displayShopifyCollection(
            "collection-component-1622397974663",
            "267757355198"
          )}
          <div id="behind" className={classes.loading}>
            <DynamicProgress
              style={{ marginBottom: "16px" }}
              color="secondary"
              aria-label="loading progress"
            />
            <DynamicAlert severity="info">
              Loading the store. Hang tight!
            </DynamicAlert>
          </div>
        </div>
        <div style={{ marginTop: "auto" }}>
          <SubscribeForm />
        </div>
      </Box>
    </>
  );
};

export default Merch;
