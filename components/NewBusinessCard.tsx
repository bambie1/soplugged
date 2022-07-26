import { FC } from "react";
import Link from "next/link";

import Avatar from "@/components/Avatar/Avatar";

import styles from "./algolia/AlgoliaHit/AlgoliaHit.module.scss";

interface Props {
  hit: any;
}

const NewBusinessCard: FC<Props> = ({ hit }) => {
  const { slug, business_name, logo_url, business_location, category } = hit;

  return (
    <>
      <Link href={`/business/${slug}`}>
        <a className="relative bg-white block rounded-lg p-4 text-center min-w-[16rem]">
          <div className="absolute -top-7 shadow-lg rounded-full flex">
            <Avatar name={business_name} url={logo_url} />
          </div>
          <h3 className="font-bold text-gray-600 uppercase truncate">
            {business_name}
          </h3>

          <p className="text-sm truncate">{category}</p>
          <p className="text-xs mt-2 truncate">{business_location}</p>
        </a>
      </Link>
    </>
  );
};

export default NewBusinessCard;
