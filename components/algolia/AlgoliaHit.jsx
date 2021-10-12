import React from "react";
import { Typography, Avatar } from "@material/mui-components";
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
            <Typography
              variant="h6"
              className={styles.hit_business_name}
              noWrap={true}
            >
              <Highlight attribute="business_name" hit={hit} />
            </Typography>
          </BusinessHeader>

          <Typography
            variant="body1"
            align="center"
            className={styles.hit_business_category}
          >
            <Highlight attribute="category" hit={hit} />
          </Typography>
          <div className={styles.hide_on_mobile}>
            <Typography
              variant="body2"
              align="center"
              style={{ marginBottom: "8px" }}
            >
              <Snippet attribute="business_description" hit={hit} />
            </Typography>
            <hr style={{ width: "20px", margin: "2px auto" }} />
          </div>
          <Typography className={styles.hit_business_location} align="center">
            {hit.business_location}
          </Typography>
        </a>
      </Link>
    </div>
  );
};

export default AlgoliaHit;
