import { connectHits } from "react-instantsearch-dom";

import NewBusinessCard from "../NewBusinessCard";

const Hits = ({ hits }: any) => (
  <div className="overflow-hidden">
    <ul className="flex animate-slide gap-5 pt-16 pb-12">
      {hits.map((hit: any) => (
        <NewBusinessCard hit={hit} key={`${hit.id}-0`} />
      ))}
      {hits.map((hit: any) => (
        <NewBusinessCard hit={hit} key={`${hit.id}-1`} />
      ))}
    </ul>
  </div>
);

const CarouselHits = connectHits(Hits);

export default CarouselHits;
