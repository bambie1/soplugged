import { FC } from "react";
import Link from "next/link";

import Avatar from "@/src/components/Avatar";

interface Props {
  hit: any;
}

const NewBusinessCard: FC<Props> = ({ hit }) => {
  const { slug, business_name, logo_url, business_location, category } = hit;

  return (
    <>
      <Link href={`/business/${slug}`}>
        <a className="group relative block min-w-[16rem] rounded-lg bg-white/70 p-4 text-center transition duration-200 hover:-translate-y-2 hover:bg-white">
          <div className="absolute -top-7 flex rounded-full shadow-lg grayscale-[.8] group-hover:grayscale-0">
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
