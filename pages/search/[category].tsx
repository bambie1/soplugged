import dynamic from "next/dynamic";
import qs from "qs";
import { useEffect, useState, useRef } from "react";
import type { GetServerSideProps } from "next";
import { useRouter } from "next/router";
import algoliasearch from "algoliasearch/lite";
import { findResultsState } from "react-instantsearch-dom/server";
import {
  Configure,
  Pagination,
  InstantSearch,
  connectSearchBox,
} from "react-instantsearch-dom";
import {
  InstantSearchProps,
  SearchState,
  StateResultsProvided,
} from "react-instantsearch-core";

import { CustomRefinements } from "@/components/algolia-old/CustomRefinements";
import CustomMenu from "@/components/algolia/CustomMenu";
import { CustomStateResults } from "@/components/algolia/CustomStateResults";
import { SEO } from "@/components/SEO";
import { createURL, getCategoryName } from "@/utils/algolia";

const Header = dynamic(() => import("../../components/Header/Header"));
const Footer = dynamic(() => import("../../components/Footer/Footer"));

const VirtualSearchBox = connectSearchBox(() => null);

const updateAfter = 400;
const INSTANT_SEARCH_INDEX_NAME = "Business";
const searchClient = algoliasearch(
  process.env.NEXT_PUBLIC_ALGOLIA_ID!,
  process.env.NEXT_PUBLIC_ALGOLIA_SEARCH_API!
);

const searchStateToURL = (searchState: SearchState) =>
  searchState ? createURL(searchState) : "";

const urlToSearchState = ({ search, pathname }: any) => {
  const pathnameMatches = pathname.match(/search\/(.*?)\/?$/);
  const category = getCategoryName(
    (pathnameMatches && pathnameMatches[1]) || ""
  );

  const { page = 1, city = "" } =
    typeof search === "string" ? qs.parse(search?.slice(1)) : search;

  const isDefault = category === "all";

  const newState = {
    page,
    menu: {
      category: !isDefault
        ? decodeURIComponent(getCategoryName(category as string))
        : "",
      business_location: city,
    },
  };

  return newState as SearchState;
};

const DEFAULT_PROPS = {
  searchClient,
  indexName: INSTANT_SEARCH_INDEX_NAME,
};

export default function Page(props: {
  searchState: SearchState;
  resultsState: StateResultsProvided;
}) {
  const [searchState, setSearchState] = useState(props.searchState);
  const router = useRouter();
  const debouncedSetState = useRef();

  const isBrowser = typeof window !== "undefined";

  useEffect(() => {
    if (isBrowser) {
      const urlToState = urlToSearchState(window.location);
      setSearchState(urlToState);
    }
  }, [router, isBrowser]);

  let filteredLocation = searchState?.menu?.business_location || null;
  if (Array.isArray(filteredLocation)) filteredLocation = filteredLocation[0];

  return (
    <>
      (
      <SEO
        title={`${
          (isBrowser && searchState.menu?.category) || "Discover all"
        } businesses | SoPlugged`}
        description="Online platform connecting you to black-owned businesses across Canada. Find the perfect business for your needs on our rich directory"
      />
      <Header />
      <main className="mb-16 min-h-screen pt-12">
        <div className="flex flex-col items-center">
          <div className="my-container mb-8 flex flex-col items-center ">
            <h1 className="relative inline-block max-w-lg break-words text-center text-4xl font-bold text-primary lg:text-5xl">
              {searchState.menu?.category || "Explore"}
            </h1>
            <span className="mt-2 text-lg lg:mt-4 lg:text-2xl">
              Businesses in {filteredLocation?.split(", Canada")[0] || "Canada"}
            </span>
          </div>

          <App
            {...DEFAULT_PROPS}
            searchState={searchState}
            resultsState={props.resultsState}
            onSearchStateChange={(nextSearchState: SearchState) => {
              clearTimeout(debouncedSetState.current);

              // @ts-ignore
              debouncedSetState.current = setTimeout(() => {
                const href = searchStateToURL(nextSearchState) || "/search/all";

                router.push(href, href, { shallow: true });
              }, updateAfter);

              setSearchState(nextSearchState);
            }}
            createURL={createURL}
          />
        </div>
      </main>
      <Footer />
    </>
  );
}

export const getServerSideProps: GetServerSideProps = async ({
  query,
  resolvedUrl,
}) => {
  const searchState = urlToSearchState({
    pathname: resolvedUrl,
    search: query,
  });
  const resultsState = await findResultsState(App as any, {
    ...DEFAULT_PROPS,
    searchState,
  });

  return {
    props: {
      resultsState: JSON.parse(JSON.stringify(resultsState)),
      searchState,
    },
  };
};

export function App(props: InstantSearchProps) {
  return (
    <InstantSearch {...props}>
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
  );
}
