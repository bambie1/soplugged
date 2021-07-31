import React from "react";
import { Typography, Button, Box } from "@material/mui-components";
import Link from "next/link";
import displayShopifyCollection from "../src/shopifyStore";
import styles from "styles/Home.module.scss";

const ShopifyMiniCollection = () => {
  return (
    <Box textAlign="center" mt={5} mb={10}>
      <Typography variant="h2" align="center" gutterBottom={true}>
        Check out our merch collection
      </Typography>
      <Typography variant="body1" align="center" gutterBottom={true}>
        Normalize <b>#buyingblack</b>, but make it fashionable
      </Typography>
      {/* <hr></hr> */}
      <div id="collection-component-1622397719540">
        {displayShopifyCollection(
          "collection-component-1622397719540",
          "266521968830"
        )}
      </div>
      <Link href="/merch">
        <a className={styles.shop_more}>
          <Button variant="outlined" color="secondary">
            Shop More
          </Button>
        </a>
      </Link>
    </Box>
  );
};

export default ShopifyMiniCollection;
