import React from "react";
import { Typography } from "@material/mui-components";
import AlgoliaSearch from "@components/algolia/AlgoliaSearch";
import Link from "next/link";
import { SEO } from "@components/index";

import styles from "styles/Directory.module.scss";

const Search = () => {
  return (
    <>
      <SEO
        title="Business Directory | SoPlugged"
        description="Online platform connecting you to black-owned businesses across Canada. Find the perfect business for your needs on our rich directory"
      />
      <div className={styles.page}>
        <Typography variant="h1" align="center" gutterBottom={true}>
          directory
        </Typography>
        <AlgoliaSearch />
        <Typography align="center" style={{ marginTop: "100px" }}>
          Know of a business that should be on this list?{" "}
          <a href="mailto:hello@soplugged.com" className={styles.link}>
            Let us know
          </a>
        </Typography>
        <hr style={{ width: "70%", maxWidth: "500px" }}></hr>
        <Typography align="center">
          Are you a business owner?{" "}
          <Link href="/my-business">
            <a className={styles.link}>Add your business to our platform</a>
          </Link>
        </Typography>
      </div>
    </>
  );
};

export default Search;
