/* eslint-disable max-len */
import algoliasearch from "algoliasearch/lite";
import { useEffect, useState } from "react";
import { Configure, Hits, InstantSearch } from "react-instantsearch-dom";
import AlgoliaHit from "./algolia/AlgoliaHit";
import CarouselHits from "./algolia/CarouselHits";

import NewBusinessCard from "./NewBusinessCard";

const PopularBusinesses = () => {
  const [businesses, setBusinesses] = useState<any>([]);

  const client = algoliasearch(
    process.env.NEXT_PUBLIC_ALGOLIA_ID || "",
    process.env.NEXT_PUBLIC_ALGOLIA_SEARCH_API || ""
  );

  const searchClient = algoliasearch(
    process.env.NEXT_PUBLIC_ALGOLIA_ID!,
    process.env.NEXT_PUBLIC_ALGOLIA_SEARCH_API!
  );

  return (
    <section className="light-gradient mt-20 mb-20 hidden lg:mt-0 lg:mb-10 lg:block ">
      <div className="">
        <div className="overflow-hidden">
          <InstantSearch indexName="Business" searchClient={searchClient}>
            <Configure hitsPerPage={12} />

            <CarouselHits />
          </InstantSearch>
        </div>
      </div>
    </section>
  );
};

export default PopularBusinesses;
