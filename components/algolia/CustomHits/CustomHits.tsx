import { FC } from "react";
import { connectHits } from "react-instantsearch-dom";
import { AlgoliaHit } from "../AlgoliaHit";

const MyHits: FC = ({ hits, hide }: any) => {
  if (hide) return <></>;

  return (
    <>
      <ul className={`list `}>
        {hits.map((hit: any, index: any) => (
          <AlgoliaHit key={index} hit={hit} />
        ))}
      </ul>
    </>
  );
};

export const CustomHits = connectHits(MyHits);
