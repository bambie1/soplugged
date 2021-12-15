import React, { FC } from "react";
import Link from "next/link";

import { Avatar } from "@/components/Avatar";
import { IBusiness } from "@/types/Business";

import styles from "./BusinessCard.module.scss";

interface Props {
  business: IBusiness;
  mini?: boolean;
}

const BusinessCard: FC<Props> = ({ business, mini }) => {
  const {
    business_name,
    business_location,
    business_description,
    logo_url,
    sample_images,
    category,
    fixed_to_one_location,
    slug,
  } = business;

  return (
    <Link href={`/business/${slug}`}>
      <a className={styles.root}>
        <div className={styles.cardHeader}>
          <Avatar url={logo_url} name={business_name} />
          <h3 className={styles.businessName}>{business_name}</h3>
        </div>

        <p className={styles.category}>{category}</p>
        <div
          className={styles.businessDescription}
          dangerouslySetInnerHTML={{
            __html: business_description?.replace(/<[^>]*>?/gm, ""),
          }}
        ></div>

        {mini && (
          <>
            {business_location && (
              <p className={styles.businessLocation}>{business_location}</p>
            )}
          </>
        )}
      </a>
    </Link>
  );
};

export default BusinessCard;
