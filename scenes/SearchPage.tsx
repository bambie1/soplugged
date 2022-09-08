import dynamic from "next/dynamic";

import ExtendedSearch from "@/components/algolia/ExtendedSearch";

const Header = dynamic(() => import("../components/Header/Header"));
const Footer = dynamic(() => import("../components/Footer/Footer"));

const SearchPage = () => {
  return (
    <>
      <Header />
      <main className="mb-16 min-h-screen pt-12">
        <ExtendedSearch />
      </main>
      <Footer />
    </>
  );
};

export default SearchPage;
