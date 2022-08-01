import Image from "next/image";
import { SearchResults } from "react-instantsearch-core";
import { connectStateResults, Hits } from "react-instantsearch-dom";

import { Button } from "@/styled/Button";
import CustomHit from "./CustomHit";

const StateResults = ({ searchResults }: { searchResults: SearchResults }) => {
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
        <Hits hitComponent={CustomHit as any} />
      </div>
    </div>
  );
};

export const CustomStateResults = connectStateResults(StateResults);
