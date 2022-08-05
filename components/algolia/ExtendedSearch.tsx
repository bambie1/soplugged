// @ts-nocheck

import { useRouter } from "next/router";
import algoliasearch from "algoliasearch/lite";
import qs from "qs";
import React, { useEffect, useRef, useState } from "react";
import {
  Configure,
  connectSearchBox,
  CurrentRefinements,
  InstantSearch,
  Pagination,
} from "react-instantsearch-dom";

import { CustomStateResults } from "./CustomStateResults";
import { SEO } from "@/components/SEO";

import "@algolia/autocomplete-theme-classic/dist/theme.css";
import { CustomRefinements } from "../algolia-old/CustomRefinements";
import CustomMenu from "./CustomMenu";
import { LocationMenu } from "./LocationMenu";

const INSTANT_SEARCH_INDEX_NAME = "Business";

const searchClient = algoliasearch(
  process.env.NEXT_PUBLIC_ALGOLIA_ID!,
  process.env.NEXT_PUBLIC_ALGOLIA_SEARCH_API!
);

function createURL(searchState: any) {
  return qs.stringify(searchState, { addQueryPrefix: true });
}

function searchStateToUrl({ location }: any, searchState: any) {
  if (Object.keys(searchState).length === 0) {
    return "";
  }

  // Remove configure search state from query parameters
  const { configure, ...rest } = searchState;
  return `${location.pathname}${createURL(rest)}`;
}

function urlToSearchState({ search }: any) {
  return qs.parse(search.slice(1));
}

const VirtualSearchBox = connectSearchBox(() => null);

const ExtendedSearch = () => {
  const router = useRouter();
  const [searchState, setSearchState] = useState(() => {
    if (typeof window !== "undefined") {
      return urlToSearchState(window.location);
    } else return null;
  });
  const timerRef = useRef(null);

  useEffect(() => {
    clearTimeout(timerRef.current!);

    timerRef.current = setTimeout(() => {
      window.history.pushState(
        searchState,
        null,
        searchStateToUrl({ location: window.location }, searchState)
      );
    }, 400);
  }, [searchState, router]);

  useEffect(() => {
    setSearchState(urlToSearchState(window.location));
  }, [router]);

  const filteredCategory = searchState?.menu?.category || null;
  const filteredLocation = searchState?.menu?.business_location || null;

  return (
    <>
      <SEO
        title={`${filteredCategory || "Discover all"} businesses | SoPlugged`}
        description="Online platform connecting you to black-owned businesses across Canada. Find the perfect business for your needs on our rich directory"
      />
      <div className="flex flex-col items-center">
        <div className="mb-8 flex flex-col items-center ">
          <h1 className="relative inline-block max-w-lg text-center text-5xl font-bold">
            <span className="text-primary">
              {filteredCategory || "Explore"}
            </span>
            {/* <span className="absolute left-0 -bottom-1 mx-auto h-3 w-full -rotate-2 bg-secondary/40" /> */}
          </h1>
          <span className="mt-4 text-lg lg:text-2xl">
            Businesses in {filteredLocation?.split(", Canada")[0] || "Canada"}
          </span>
        </div>
        <InstantSearch
          searchClient={searchClient}
          indexName={INSTANT_SEARCH_INDEX_NAME}
          searchState={searchState}
          onSearchStateChange={setSearchState}
          createURL={createURL}
        >
          {/* A virtual search box is required for InstantSearch to understand the `query` search state property */}
          <VirtualSearchBox />

          <Configure hitsPerPage={12} />

          <CustomRefinements />
          <div className="mt-4 flex w-full justify-between gap-4">
            <CustomMenu attribute="category" />
            <LocationMenu attribute="business_location" />
          </div>

          <CustomStateResults />
          <Pagination />
        </InstantSearch>
      </div>
    </>
  );
};

export default ExtendedSearch;
