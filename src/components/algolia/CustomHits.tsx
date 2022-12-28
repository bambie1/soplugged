import { connectHits } from "react-instantsearch-dom";

import CustomHit from "./CustomHit";

const Hits = ({ hits }: any) => {
  return (
    <ul className="my-8 flex w-full flex-col gap-2 sm:grid sm:grid-cols-2 lg:grid-cols-4 lg:gap-6">
      {hits.map((hit: any) => (
        <li key={hit.id} className="my-4 flex">
          <CustomHit hit={hit} />
        </li>
      ))}
    </ul>
  );
};

const CustomHits = connectHits(Hits);

export default CustomHits;
