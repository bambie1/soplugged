import { Button } from "@/styled/Button";
import Image from "next/image";
import { connectStateResults, Hits } from "react-instantsearch-dom";

import AlgoliaHit from "./AlgoliaHit";

const StateResults = ({ searchResults }: any) => {
  const hasResults = searchResults && searchResults.nbHits !== 0;
  const nbHits = searchResults && searchResults.nbHits;

  if (!hasResults)
    return (
      <div>
        <div>
          <Image
            src="/images/empty_inbox.svg"
            alt="empty clipboard"
            width={300}
            height={300}
          />
        </div>
        <p>We couldn't find any results for your search.</p>
        <p>
          Try removing some constraints to see results,<br></br> <u>OR</u>
        </p>
        <Button variant="outlined">Clear query</Button>
      </div>
    );

  return (
    <div>
      <p>{nbHits} hits found</p>
      <div>
        <Hits hitComponent={AlgoliaHit} />
      </div>
    </div>
  );
};

export const CustomStateResults = connectStateResults(StateResults);
