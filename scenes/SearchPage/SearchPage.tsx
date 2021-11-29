import dynamic from "next/dynamic";

import { PageWrapper } from "@/components/PageWrapper";
import { SEO } from "@/components/SEO";

const Header = dynamic(() => import("../../components/Header/Header"));
const Footer = dynamic(() => import("../../components/Footer/Footer"));
const AlgoliaSearch = dynamic(
  () => import("../../components/algolia/AlgoliaSearch/AlgoliaSearch")
);

const SearchPage = () => {
  return (
    <>
      <SEO
        title="Business Directory | SoPlugged"
        description="Online platform connecting you to black-owned businesses across Canada. Find the perfect business for your needs on our rich directory"
      />
      <Header />
      <PageWrapper center>
        <h1>directory</h1>
        <AlgoliaSearch />
      </PageWrapper>
      <Footer />
    </>
  );
};

export default SearchPage;
