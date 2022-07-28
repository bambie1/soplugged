import { useRouter } from "next/router";
import type { NextPage } from "next";

import SearchPage from "@/scenes/SearchPage";
import { SEO } from "@/components/SEO";

import { urlToSearchState } from "@/components/algolia-old/AlgoliaSearch/AlgoliaSearch";

const Search: NextPage = () => {
  const router = useRouter();
  const searchQuery = router.asPath.replace(router.pathname, "");

  const searchState = urlToSearchState(searchQuery);

  const refinement = searchState?.refinementList;

  const category =
    typeof refinement === "string" || Array.isArray(refinement)
      ? undefined
      : refinement?.category;

  const title = category ? [0] : "All businesses";

  return (
    <>
      <SEO
        title={`${title} | SoPlugged`}
        description="Online platform connecting you to black-owned businesses across Canada. Find the perfect business for your needs on our rich directory"
      />
      <SearchPage />
    </>
  );
};

export default Search;
