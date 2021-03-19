import React from "react";
import {
  Container,
  Typography,
  makeStyles,
} from "../components/mui-components";
import AlgoliaSearch from "../components/algolia/AlgoliaSearch";
import Link from "next/link";
import Head from "next/head";

const useStyles = makeStyles((theme) => ({
  page: {
    minHeight: "85vh",
    padding: theme.spacing(10, 1, 2),
    zIndex: "1",
    background: "white",
  },
  link: {
    color: theme.palette.primary.main,
  },
}));

const Search = () => {
  const classes = useStyles();
  return (
    <>
      <Head>
        <meta
          name="description"
          content="Online platform connecting you to black-owned businesses across Canada. Find the perfect business for your needs on our rich directory"
        />
        <meta
          property="og:title"
          content="Find the perfect black-owned business for your needs | SoPlugged"
        />
        <meta
          property="og:description"
          content="Online platform connecting you to black-owned businesses across Canada. Find the perfect business for your needs on our rich directory"
        />
        <meta property="og:url" content="http://soplugged.com/search" />
        <title>Business Directory | SoPlugged</title>
      </Head>
      <div className={classes.page}>
        <Container maxWidth="lg" style={{ textAlign: "center" }}>
          <Typography
            variant="h4"
            style={{ textAlign: "center", fontWeight: "700" }}
          >
            directory
          </Typography>
          {/* <ErrorBoundary> */}
          <AlgoliaSearch />
          {/* </ErrorBoundary> */}
          <Typography style={{ marginTop: "100px" }}>
            Know of a business that should be on this list?{" "}
            <a href="mailto:hello@soplugged.com" className={classes.link}>
              Let us know
            </a>
          </Typography>
          <hr style={{ width: "70%", maxWidth: "500px" }}></hr>
          <Typography>
            Are you a business owner?{" "}
            <Link href="/join">
              <a className={classes.link}>Add your business to our platform</a>
            </Link>
          </Typography>
        </Container>
      </div>
    </>
  );
};

export default Search;
