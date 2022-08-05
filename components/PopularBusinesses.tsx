import algoliasearch from "algoliasearch/lite";
import { Configure, InstantSearch } from "react-instantsearch-dom";
import CarouselHits from "./algolia/CarouselHits";

const PopularBusinesses = () => {
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
