import Link from "next/link";
import { ArrowLeftIcon } from "@heroicons/react/outline";
import dynamic from "next/dynamic";
import qs from "qs";
import { useEffect, useState, useRef } from "react";
import type { GetStaticPathsResult, GetStaticProps } from "next";
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

import CustomRefinements from "@/src/components/algolia/CustomRefinements";
import CustomMenu from "@/src/components/algolia/CustomMenu";
import { CustomStateResults } from "@/src/components/algolia/CustomStateResults";
import SEO from "@/src/components/SEO";
import { createURL, getCategoryName, encodedCategories } from "@/utils/algolia";
import { categoryMetaDescriptions } from "@/lib/categoryMetaDescriptions";

const Header = dynamic(() => import("../../src/components/Header/Header"));
const Footer = dynamic(() => import("../../src/components/Footer"));

const VirtualSearchBox = connectSearchBox(() => null);

const updateAfter = 400;
const INSTANT_SEARCH_INDEX_NAME = "Business";
const searchClient = algoliasearch(
  process.env.NEXT_PUBLIC_ALGOLIA_ID!,
  process.env.NEXT_PUBLIC_ALGOLIA_SEARCH_API!
);

const searchStateToURL = (searchState: SearchState) =>
  searchState ? createURL(searchState) : "";

const urlToSearchState = ({
  urlCategory,
  search,
}: {
  urlCategory: string;
  search?: string;
}) => {
  const category = getCategoryName(urlCategory || "");
  const isDefault = category === "all";

  if (search) {
    const { page = 1, city = "" } =
      typeof search === "string" ? qs.parse(search?.slice(1)) : search;

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
  }

  const newState = {
    menu: {
      category: !isDefault
        ? decodeURIComponent(getCategoryName(category as string))
        : "",
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

  const isExplorePage =
    searchState?.menu?.category === "" || searchState?.menu?.category === "all";

  useEffect(() => {
    if (isBrowser) {
      const urlToState = urlToSearchState({
        urlCategory: window.location.pathname?.split("/search/")?.[1],
        search: window.location.search,
      });
      setSearchState(urlToState);
    }
  }, [router, isBrowser]);

  let filteredLocation = searchState?.menu?.business_location || null;
  if (Array.isArray(filteredLocation)) filteredLocation = filteredLocation[0];

  const category = props.searchState?.menu?.category;

  const seoTitle = `${
    category && !category.includes("?") ? category : "Discover all"
  } Black-owned businesses | SoPlugged`;

  const seoDescription = `${
    category
      ? // @ts-ignore
        `Discover the best Black-owned ${category} businesses in Canada with SoPlugged's online directory. ${categoryMetaDescriptions[category]}`
      : "Explore the best Black-owned businesses in Canada with SoPlugged's online directory. Discover a wide range of businesses and services, from restaurants and shops to professional services and more."
  } Start your search today. ${
    searchState?.page && `Page ${searchState?.page}`
  }`;

  return (
    <>
      <SEO title={seoTitle} description={seoDescription} />
      <Header />
      <main className="mb-16 min-h-screen pt-12">
        <div className="flex flex-col items-center">
          <div className="my-container mb-8 flex flex-col items-center">
            {!isExplorePage && (
              <Link href="/search/all">
                <a className="mb-5 -mt-4 flex gap-2 self-start rounded-3xl text-gray-500">
                  <ArrowLeftIcon className="h-6 w-6" strokeWidth={0.8} />
                  Back to all categories
                </a>
              </Link>
            )}
            <h1 className="relative inline-block max-w-lg break-words text-center text-4xl font-semibold text-primary lg:text-5xl">
              {props.searchState?.menu?.category || "Explore"}
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

                router.push(href, href);
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

type Params = {
  category: string;
};

export function getStaticPaths(): GetStaticPathsResult<Params> {
  return {
    paths: [
      ...Object.keys(encodedCategories)
        .slice(0, 19)
        .map((category) => ({ params: { category } })),
      { params: { category: "all" } },
    ],
    fallback: true,
  };
}

export const getStaticProps: GetStaticProps = async ({ params }) => {
  if (typeof params?.category !== "string")
    return {
      redirect: {
        destination: "/search/all",
        permanent: false,
      },
    };

  const searchState = urlToSearchState({
    urlCategory: params?.category || "",
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
    revalidate: 5 * 60 * 60,
  };
};

export function App(props: InstantSearchProps) {
  return (
    <InstantSearch {...props}>
      <VirtualSearchBox />

      <Configure hitsPerPage={32} />

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
