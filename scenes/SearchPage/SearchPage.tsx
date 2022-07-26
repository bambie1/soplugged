import dynamic from "next/dynamic";

import { PageWrapper } from "@/components/PageWrapper";

const Header = dynamic(() => import("../../components/Header"));
const Footer = dynamic(() => import("../../components/Footer/Footer"));
const AlgoliaSearch = dynamic(
  () => import("../../components/algolia/AlgoliaSearch/AlgoliaSearch")
);

const SearchPage = () => {
  return (
    <>
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
