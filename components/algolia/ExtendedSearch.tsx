import { useRouter } from "next/router";
import algoliasearch from "algoliasearch/lite";
import qs from "qs";
import React, { useEffect, useRef, useState } from "react";
import {
  Configure,
  connectSearchBox,
  InstantSearch,
  Pagination,
} from "react-instantsearch-dom";
import dynamic from "next/dynamic";

import { CustomStateResults } from "./CustomStateResults";
import { SEO } from "@/components/SEO";

const CustomMenu = dynamic(() => import("./CustomMenu"));
const CustomRefinements = dynamic(() =>
  import("../algolia-old/CustomRefinements").then(
    (mod: any) => mod.CustomRefinements
  )
);

const INSTANT_SEARCH_INDEX_NAME = "Business";

const searchClient = algoliasearch(
  process.env.NEXT_PUBLIC_ALGOLIA_ID!,
  process.env.NEXT_PUBLIC_ALGOLIA_SEARCH_API!
);

function createURL(searchState: any) {
  return qs.stringify(searchState, { addQueryPrefix: true });
}

const searchStateToUrl = (searchState: any) =>
  searchState ? createURL(searchState) : "";

const urlToSearchState = ({ search }: any) => qs.parse(search.slice(1));

const VirtualSearchBox = connectSearchBox(() => null);

const ExtendedSearch = () => {
  const router = useRouter();
  const [searchState, setSearchState] = useState(() => {
    if (typeof window !== "undefined") {
      return urlToSearchState(window.location);
    } else return null;
  });
  const timerRef = useRef(null);

  function onSearchStateChange(updatedSearchState: any) {
    // @ts-ignore
    clearTimeout(timerRef.current);

    // @ts-ignore
    timerRef.current = setTimeout(() => {
      router.push(searchStateToUrl(updatedSearchState));
    }, 400);

    setSearchState(updatedSearchState);
  }

  useEffect(() => {
    setSearchState(urlToSearchState(window.location));
  }, [router]);

  // @ts-ignore
  const filteredCategory = searchState?.menu?.category || null;
  // @ts-ignore
  const filteredLocation = searchState?.menu?.business_location || null;

  return (
    <>
      <SEO
        title={`${filteredCategory || "Discover all"} businesses | SoPlugged`}
        description="Online platform connecting you to black-owned businesses across Canada. Find the perfect business for your needs on our rich directory"
      />
      <div className="flex flex-col items-center">
        <div className="my-container mb-8 flex flex-col items-center ">
          <h1 className="relative inline-block max-w-lg text-center text-5xl font-bold">
            <span className="text-primary">
              {filteredCategory || "Explore"}
            </span>
          </h1>
          <span className="mt-4 text-lg lg:text-2xl">
            Businesses in {filteredLocation?.split(", Canada")[0] || "Canada"}
          </span>
        </div>
        <InstantSearch
          searchClient={searchClient}
          indexName={INSTANT_SEARCH_INDEX_NAME}
          searchState={searchState}
          onSearchStateChange={onSearchStateChange}
          createURL={createURL}
        >
          {/* A virtual search box is required for InstantSearch to understand the `query` search state property */}
          <VirtualSearchBox />

          <Configure hitsPerPage={12} />

          <CustomRefinements />
          <div className="top-[3.9rem] mt-4 w-full py-2">
            <div className="my-container flex flex-col justify-between gap-2 md:flex-row">
              <CustomMenu attribute="category" />
            </div>
          </div>

          <CustomStateResults />
          <Pagination />
        </InstantSearch>
      </div>
    </>
  );
};

export default ExtendedSearch;
