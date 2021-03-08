import React from "react";
import { Container, Typography } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import AlgoliaSearch from "../components/algolia/AlgoliaSearch";
import Link from "next/link";
import Head from "next/head";

const useStyles = makeStyles((theme) => ({
  page: {
    minHeight: "85vh",
    padding: theme.spacing(10, 1, 2),
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
          content="Online platform connecting you to black-owned businesses across Canada. If you're an entrepreneur, register your business to be featured on our platform or join our mailing list to stay plugged in."
        />
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
