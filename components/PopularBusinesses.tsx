/* eslint-disable max-len */
import algoliasearch from "algoliasearch/lite";
import { useEffect, useState } from "react";

import NewBusinessCard from "./NewBusinessCard";

const PopularBusinesses = () => {
  const [businesses, setBusinesses] = useState<any>([]);

  const client = algoliasearch(
    process.env.NEXT_PUBLIC_ALGOLIA_ID || "",
    process.env.NEXT_PUBLIC_ALGOLIA_SEARCH_API || ""
  );

  const index = client.initIndex("Business");

  useEffect(() => {
    index
      .search("", {
        attributesToRetrieve: [
          "business_name",
          "logo_url",
          "business_location",
          "category",
          "slug",
        ],
        length: 15,
      })
      .then(({ hits }) => setBusinesses(hits));
  }, []);

  return (
    <section className="hidden lg:block mt-20 mb-20 lg:mt-0 lg:mb-10 bg-secondary/[.12] ">
      <div className="">
        <div className="overflow-hidden">
          <ul className="flex gap-5 overflow-x-auto pt-16 pb-12 animate-slide">
            {businesses.map((item: any) => (
              <li key={item} className="w-full relative">
                <NewBusinessCard hit={item} />
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
};

export default PopularBusinesses;
