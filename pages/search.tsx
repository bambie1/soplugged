import type { NextPage } from "next";

import SearchPage from "@/scenes/SearchPage";
import { SEO } from "@/components/SEO";

const Search: NextPage = () => {
  return (
    <>
      <SEO
        title="Business Directory | SoPlugged"
        description="Online platform connecting you to black-owned businesses across Canada. Find the perfect business for your needs on our rich directory"
      />
      <SearchPage />
    </>
  );
};

export default Search;
