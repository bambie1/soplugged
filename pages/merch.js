import React from "react";
import displayShopifyCollection from "../src/shopifyStore";
import { Typography, makeStyles, Box } from "@material/mui-components";
import SEO from "@components/SEO";
import SubscribeForm from "@components/SubscribeForm";

const useStyles = makeStyles((theme) => ({}));

const Merch = () => {
  return (
    <>
      <SEO
        description="Custom tees, sweatshirts and accessories to spread the word"
        title="SoPlugged Merch"
      />
      <Box mt={3} className="page">
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
        <hr style={{ width: "40%", maxWidth: "170px" }}></hr>
        <div id="collection-component-1622397974663">
          {displayShopifyCollection(
            "collection-component-1622397974663",
            "267757355198"
          )}
        </div>

        <SubscribeForm />
      </Box>
    </>
  );
};

export default Merch;
