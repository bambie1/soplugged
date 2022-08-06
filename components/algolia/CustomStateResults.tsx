import Image from "next/image";
import { SearchResults } from "react-instantsearch-core";
import { connectStateResults } from "react-instantsearch-dom";

import CustomHits from "./CustomHits";

const StateResults = ({ searchResults }: { searchResults: SearchResults }) => {
  const hasResults = searchResults && searchResults.nbHits !== 0;
  const nbHits = searchResults && searchResults.nbHits;

  if (!hasResults)
    return (
      <div>
        <div>
          <Image
            src="/images/empty_inbox.svg"
            alt=""
            width={300}
            height={300}
          />
        </div>
        <p>We couldn't find any results for your search.</p>
      </div>
    );

  return (
    <div className="mt-10 w-full">
      <p>
        {nbHits} {nbHits > 1 ? "businesses" : "business"} found
      </p>
      <CustomHits />
      {/* <Hits hitComponent={CustomHit as any} /> */}
    </div>
  );
};

export const CustomStateResults = connectStateResults(StateResults);
