import Image from "next/image";
import Link from "next/link";
import dynamic from "next/dynamic";
import qs from "qs";
import { useEffect, useState, useRef } from "react";
import type { GetStaticProps } from "next";
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

import { CustomStateResults } from "@/src/components/algolia/CustomStateResults";
import SEO from "@/src/components/SEO";
import { createURL } from "@/utils/algolia";
import Searchbar from "@/components/algolia/Searchbar";
import { categories } from "@/lib/categoryList";

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

const urlToSearchState = ({ search }: { search?: string }) => {
  const { page = 1, city = "" } =
    typeof search === "string" ? qs.parse(search?.slice(1)) : {};

  const newState = {
    page,
    menu: {
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
      const urlToState = urlToSearchState({
        search: window.location.search,
      });
      setSearchState(urlToState);
    }
  }, [router, isBrowser]);

  return (
    <>
      <SEO
        title="Explore all businesses | SoPlugged"
        description="Online platform connecting you to black-owned businesses across Canada. Find the perfect business for your needs on our rich directory"
      />
      <Header variant="search" />
      <main className="mb-16 min-h-screen">
        <div className="flex w-full flex-col items-center">
          <div className="relative w-full bg-secondary/10 pb-12 pt-20 lg:pt-28">
            <div className="my-container mb-8 flex flex-col items-center text-center">
              <h1 className="relative inline-block max-w-lg break-words text-center text-4xl font-bold text-primary lg:text-5xl">
                Explore
              </h1>
              <p className="mt-2 text-lg text-gray-600 lg:mt-4 lg:text-xl">
                Discover some of the best black-owned businesses near you
              </p>

              <div className="absolute -bottom-6 left-1/2 mx-auto w-full max-w-lg -translate-x-1/2 px-4 lg:px-0">
                <Searchbar />
              </div>
            </div>
          </div>

          <div className="mt-14 w-full lg:mx-auto lg:mt-20 lg:max-w-screen-2xl lg:overflow-x-auto lg:px-8">
            <h2 className="mb-2 px-4 text-xl font-semibold sm:px-6 lg:px-0">
              Categories
            </h2>

            <div className="relative w-full overflow-x-auto">
              <ul
                role="list"
                className="mx-4 inline-flex space-x-3 sm:mx-6 lg:mx-0"
              >
                {categories.map((category) => (
                  <li key={category.value} className="flex">
                    <Link href={`/search/${category.value}`}>
                      <a className="relative flex w-64 cursor-pointer flex-col overflow-hidden rounded-lg">
                        <div className="absolute inset-0 flex items-end bg-gradient-to-t from-black/70 p-2 text-white lg:px-3">
                          {category.label}
                        </div>
                        <div className="relative -z-10 aspect-video w-full flex-shrink-0">
                          <Image
                            src={category.image}
                            alt={category.imageAlt}
                            layout="fill"
                            objectFit="cover"
                            objectPosition="top"
                          />
                        </div>
                      </a>
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <hr className="mt-10 w-full" />

          <App
            {...DEFAULT_PROPS}
            searchState={searchState}
            resultsState={props.resultsState}
            onSearchStateChange={(nextSearchState: SearchState) => {
              clearTimeout(debouncedSetState.current);

              // @ts-ignore
              debouncedSetState.current = setTimeout(() => {
                const href = searchStateToURL(nextSearchState) || "/search";

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

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const searchState = urlToSearchState({});
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

      <Configure hitsPerPage={28} />

      <CustomStateResults />
      <Pagination />
    </InstantSearch>
  );
}
