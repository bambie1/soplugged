import React from "react";
import { Avatar } from "@material/mui-components";
import { Highlight, Snippet } from "react-instantsearch-dom";
import Link from "next/link";
import BusinessHeader from "../BusinessHeader/BusinessHeader";
import styles from "styles/Directory.module.scss";

const AlgoliaHit = ({ hit }) => {
  let slug = hit.slug || "biz-slug";

  return (
    <div className={styles.hit_root}>
      <Link href={`/business/${slug}`}>
        <a className={styles.hit_root_link}>
          <BusinessHeader>
            <Avatar alt="Business Logo" src={hit.logo_url}>
              {hit.business_name.toUpperCase().charAt(0)}
            </Avatar>
            <h3 className={styles.hit_business_name}>
              <Highlight attribute="business_name" hit={hit} />
            </h3>
          </BusinessHeader>

          <p className={styles.hit_business_category}>
            <Highlight attribute="category" hit={hit} />
          </p>
          <div className={styles.hide_on_mobile}>
            <p className="mediumFont" style={{ marginBlock: "8px" }}>
              <Snippet attribute="business_description" hit={hit} />
            </p>
            <hr style={{ width: "20px", margin: "2px auto" }} />
          </div>
          <p className={styles.hit_business_location}>
            {hit.business_location}
          </p>
        </a>
      </Link>
    </div>
  );
};

export default AlgoliaHit;
