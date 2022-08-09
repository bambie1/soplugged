import { FC } from "react";
import { Highlight, Snippet } from "react-instantsearch-dom";
import Link from "next/link";

import { Hit as AlgoliaHit } from "instantsearch.js/es/types";

import Avatar from "@/components/Avatar/Avatar";

type HitProps = {
  hit: AlgoliaHit<{
    slug: string;
    business_name: string;
    logo_url: string;
    business_location: string[];
  }>;
};

const CustomHit: FC<HitProps> = ({ hit }) => {
  const { slug, business_name, logo_url, business_location } = hit;

  return (
    <Link href={`/business/${slug}`}>
      <a className="relative flex h-full w-full flex-col items-start rounded-lg bg-light p-4 shadow transition  duration-200 hover:border-secondary/60 hover:bg-white hover:shadow-md focus:border-primary focus-visible:border-primary">
        <div className="-mt-10 mb-2 inline-flex rounded-full border-4 border-white ">
          <Avatar name={business_name} url={logo_url} />
        </div>{" "}
        <h3 className="truncate font-semibold uppercase text-gray-600 lg:text-lg">
          <Highlight attribute="business_name" hit={hit} />
        </h3>
        <p className="truncate text-sm">
          <Highlight attribute="category" hit={hit} />
        </p>
        <div className="max-w-full overflow-hidden">
          <p className="mt-4 truncate">
            <Snippet attribute="business_description" hit={hit} />
          </p>
        </div>
        <p className="mt-2 truncate text-xs">{business_location}</p>
      </a>
    </Link>
  );
};

export default CustomHit;
