import { FC } from "react";
import Link from "next/link";

import Avatar from "@/components/Avatar/Avatar";

interface Props {
  hit: any;
}

const NewBusinessCard: FC<Props> = ({ hit }) => {
  const { slug, business_name, logo_url, business_location, category } = hit;

  return (
    <>
      <Link href={`/business/${slug}`}>
        <a className="relative block min-w-[16rem] rounded-lg bg-white p-4 text-center">
          <div className="absolute -top-7 flex rounded-full shadow-lg">
            <Avatar name={business_name} url={logo_url} />
          </div>
          <h3 className="truncate font-bold uppercase text-gray-600">
            {business_name}
          </h3>

          <p className="truncate text-sm">{category}</p>
          <p className="mt-2 truncate text-xs">{business_location}</p>
        </a>
      </Link>
    </>
  );
};

export default NewBusinessCard;
