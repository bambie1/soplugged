import React, { FC } from "react";
import Link from "next/link";

import Avatar from "../Avatar";
import { IBusiness } from "@/types/Business";

import styles from "./BusinessCard.module.scss";

interface Props {
  business: IBusiness;
  mini?: boolean;
}

const BusinessCard: FC<Props> = ({ business }) => {
  const { business_name, business_location, logo_url, category, slug } =
    business;

  return (
    <Link href={`/business/${slug}`}>
      <a className={styles.root}>
        <div className="mb-4 flex items-center gap-2">
          <Avatar url={logo_url} name={business_name} />
          <h3 className="text-lg font-semibold uppercase tracking-wide lg:text-xl">
            {business_name}
          </h3>
        </div>

        <p className="">{category}</p>

        {business_location && (
          <p className="my-1 text-xs uppercase text-gray-600 lg:text-sm">
            {business_location}
          </p>
        )}
      </a>
    </Link>
  );
};

export default BusinessCard;
