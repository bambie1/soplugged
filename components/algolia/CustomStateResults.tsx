import Image from "next/image";
import { SearchResults } from "react-instantsearch-core";
import { connectStateResults } from "react-instantsearch-dom";

import CustomHits from "./CustomHits";
import { LocationMenu } from "./LocationMenu";

const StateResults = ({ searchResults }: { searchResults: SearchResults }) => {
  const hasResults = searchResults && searchResults.nbHits !== 0;
  const nbHits = searchResults && searchResults.nbHits;

  if (!hasResults)
    return (
      <div className="my-container text-center">
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
    <div className="my-container mt-10 w-full">
      <div className="flex w-full items-center justify-between">
        <p>
          {nbHits} {nbHits > 1 ? "businesses" : "business"} found
        </p>
        <LocationMenu attribute="business_location" />
      </div>
      <CustomHits />
    </div>
  );
};

export const CustomStateResults = connectStateResults(StateResults);
