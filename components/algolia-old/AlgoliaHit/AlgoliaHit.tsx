import { FC } from "react";
import { Highlight, Snippet } from "react-instantsearch-dom";
import Link from "next/link";

import Avatar from "@/components/Avatar/Avatar";

import styles from "./AlgoliaHit.module.scss";
interface Props {
  hit: any;
}

const AlgoliaHit: FC<Props> = ({ hit }) => {
  const { slug, business_name, logo_url, business_location } = hit;

  return (
    <Link href={`/business/${slug}`}>
      <a className="flex h-full flex-col rounded-lg border border-transparent p-4 shadow transition duration-200 hover:border-secondary/60 hover:shadow-md focus:border-primary  focus-visible:border-primary ">
        <section className={styles.cardHeader}>
          {/* <Avatar name={business_name} url={logo_url} /> */}
          <h3 className={styles.businessName}>
            <Highlight attribute="business_name" hit={hit} />
          </h3>
        </section>

        <p className={styles.businessCategory}>
          <Highlight attribute="category" hit={hit} />
        </p>
        <p className={styles.businessDescription}>
          <Snippet attribute="business_description" hit={hit} />
        </p>
        <p className={styles.businessLocation}>{business_location}</p>
      </a>
    </Link>
  );
};

export default AlgoliaHit;
