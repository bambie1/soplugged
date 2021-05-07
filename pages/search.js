import React from "react";
import { Container, Typography, makeStyles } from "@material/mui-components";
import AlgoliaSearch from "@components/algolia/AlgoliaSearch";
import Link from "next/link";
import SEO from "@components/SEO";

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
      <SEO
        title="Business Directory | SoPlugged"
        description="Online platform connecting you to black-owned businesses across Canada. Find the perfect business for your needs on our rich directory"
      />
      <div className={classes.page}>
        <Container maxWidth="lg" style={{ textAlign: "center" }}>
          <Typography
            variant="h4"
            style={{ textAlign: "center", fontWeight: "700" }}
          >
            directory
          </Typography>
          <AlgoliaSearch />
          <Typography style={{ marginTop: "100px" }}>
            Know of a business that should be on this list?{" "}
            <a href="mailto:hello@soplugged.com" className={classes.link}>
              Let us know
            </a>
          </Typography>
          <hr style={{ width: "70%", maxWidth: "500px" }}></hr>
          <Typography>
            Are you a business owner?{" "}
            <Link href="/my-business">
              <a className={classes.link}>Add your business to our platform</a>
            </Link>
          </Typography>
        </Container>
      </div>
    </>
  );
};

export default Search;
