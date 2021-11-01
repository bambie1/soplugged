import React from "react";
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
        <h1 className="center">directory</h1>
        <AlgoliaSearch />
        <div style={{ marginTop: "100px", padding: "0.5rem" }}>
          <p className="noMargin">
            Know of a business that should be on this list?{" "}
            <a href="mailto:hello@soplugged.com" className="secondary">
              Let us know
            </a>
          </p>
          <hr style={{ width: "70%", maxWidth: "500px" }}></hr>
          <p className="noMargin">
            Are you a business owner?{" "}
            <Link href="/my-business">
              <a className="secondary">Add your business to our platform</a>
            </Link>
          </p>
        </div>
      </div>
    </>
  );
};

export default Search;
