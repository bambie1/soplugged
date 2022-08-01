import dynamic from "next/dynamic";

import ExtendedSearch from "@/components/algolia/ExtendedSearch";

const Header = dynamic(() => import("../components/Header"));
const Footer = dynamic(() => import("../components/Footer/Footer"));

const SearchPage = () => {
  return (
    <>
      <Header />
      <main className="my-container pt-24">
        {/* <AlgoliaSearch /> */}
        <ExtendedSearch />
      </main>
      <Footer />
    </>
  );
};

export default SearchPage;
