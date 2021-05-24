import React from "react";
import displayShopifyCollection from "../src/shopifyStore";
import {
  Typography,
  Button,
  Container,
  Grid,
  makeStyles,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Paper,
  Box,
  WhiteOutlinedButton,
} from "@material/mui-components";
import SEO from "@components/SEO";

const useStyles = makeStyles((theme) => ({}));

const Merch = () => {
  return (
    <>
      <SEO
        description="Custom tees, sweatshirts and accessories to spread the word"
        title="SoPlugged Merch"
      />
      <Box mt={3} className="page">
        <Typography variant="h5" align="center" gutterBottom={true}>
          Our Merch
        </Typography>
        <div id="collection-component-1621820423617">
          {displayShopifyCollection()}
        </div>
      </Box>
    </>
  );
};

export default Merch;
