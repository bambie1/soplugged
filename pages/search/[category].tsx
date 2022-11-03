// @ts-nocheck

import { useEffect, useState, useRef } from "react";
import { useRouter } from "next/router";
import qs from "qs";
import algoliasearch from "algoliasearch/lite";
import { findResultsState } from "react-instantsearch-dom/server";
import {
  Configure,
  Pagination,
  InstantSearch,
  connectSearchBox,
} from "react-instantsearch-dom";
import { CustomRefinements } from "@/components/algolia-old/CustomRefinements";
import CustomMenu from "@/components/algolia/CustomMenu";
import { CustomStateResults } from "@/components/algolia/CustomStateResults";
import { SEO } from "@/components/SEO";
import { Footer } from "@/components/Footer";
import Header from "@/components/Header/Header";

const VirtualSearchBox = connectSearchBox(() => null);

const updateAfter = 400;
const INSTANT_SEARCH_INDEX_NAME = "Business";
const searchClient = algoliasearch(
  process.env.NEXT_PUBLIC_ALGOLIA_ID!,
  process.env.NEXT_PUBLIC_ALGOLIA_SEARCH_API!
);

const encodedCategories = {
  art: "Art",
  "baking-and-catering": "Baking / Catering",
  "coaching-tutoring": "Coaching / Tutoring",
  consultancy: "Consultancy",
  "content-creating-and-writing": "Content Creating / Writing",
  entertainment: "Entertainment",
  "event-planning": "Event Planning",
  fashion: "Fashion",
  fitness: "Fitness",
  "graphic-design": "Graphic Design",
  groceries: "Groceries",
  "hair-and-beauty": "Hair / Beauty",
  "handcraft-gifting": "Handcraft / Gifting Services",
  "housekeeping-domestic": "Housekeeping / Domestic Services",
  "interior-decor": "Interior Decor",
  "maintenance-repair": "Maintenance/Repair Services",
  "media-services": "Media services",
  "travel-tourism": "Travel / Tourism Service",
  "web-dev-design": "Web Development / Design",
  other: "Other",

  // staging categories
  hair: "Hair",
  beauty: "Beauty",
};

const decodedCategories = Object.keys(encodedCategories).reduce((acc, key) => {
  const newKey = encodedCategories[key];
  const newValue = key;

  return {
    ...acc,
    [newKey]: newValue,
  };
}, {});

function getCategorySlug(name) {
  const encodedName = decodedCategories[name] || name;

  return encodedName.split(" ").map(encodeURIComponent).join("+");
}

function getCategoryName(slug) {
  const decodedSlug = encodedCategories[slug] || slug;

  return decodedSlug.split("+").map(decodeURIComponent).join(" ");
}

const createURL = (state) => {
  const isDefaultRoute =
    !state.query &&
    state.page === 1 &&
    state.menu &&
    state.menu.category.length === 0;

  if (isDefaultRoute) {
    return "";
  }

  const categoryPath = state.menu.category
    ? `${getCategorySlug(state.menu.category)}/`
    : "";
  const queryParameters = {};

  if (state.query) {
    queryParameters.query = encodeURIComponent(state.query);
  }
  if (state.page !== 1) {
    queryParameters.page = state.page;
  }
  if (state.menu.business_location) {
    queryParameters.business_location = state.menu.business_location;
  }

  const queryString = qs.stringify(queryParameters, {
    addQueryPrefix: true,
    arrayFormat: "repeat",
  });

  const url = `/search/${categoryPath}${queryString}`;

  return url;
};

const pathToSearchState = (urlQuery) => {
  const { page = 1, category = "" } = qs.parse(urlQuery);
  // `qs` does not return an array when there's a single value.

  const isDefault = category === "all";

  const newState = {
    page,
    menu: {
      category: !isDefault ? decodeURIComponent(getCategoryName(category)) : "",
      // business_location: decodedCategories()
    },
  };

  return newState;
};

const searchStateToURL = (searchState) =>
  searchState ? createURL(searchState) : "";

const DEFAULT_PROPS = {
  searchClient,
  indexName: INSTANT_SEARCH_INDEX_NAME,
};

export default function Page(props) {
  const [searchState, setSearchState] = useState(props.searchState);
  const router = useRouter();
  const debouncedSetState = useRef();

  useEffect(() => {
    if (router) {
      router.beforePopState(({ url }) => {
        setSearchState(pathToSearchState(url));
      });
    }
  }, [router]);

  return (
    <>
      <SEO
        title={`${
          searchState.menu?.category || "Discover all"
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
              Businesses in Canada
            </span>
          </div>

          <App
            {...DEFAULT_PROPS}
            searchState={searchState}
            resultsState={props.resultsState}
            onSearchStateChange={(nextSearchState) => {
              clearTimeout(debouncedSetState.current);

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

export async function getServerSideProps({ query }) {
  const searchState = pathToSearchState(query);
  const resultsState = await findResultsState(App, {
    ...DEFAULT_PROPS,
    searchState,
  });

  return {
    props: {
      resultsState: JSON.parse(JSON.stringify(resultsState)),
      searchState,
    },
  };
}

export function App(props) {
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
