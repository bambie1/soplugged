import dynamic from "next/dynamic";

const Header = dynamic(() => import("../components/Header"));
const Footer = dynamic(() => import("../components/Footer/Footer"));
const AlgoliaSearch = dynamic(
  () => import("../components/algolia/AlgoliaSearch/AlgoliaSearch")
);

const SearchPage = () => {
  return (
    <>
      <Header />
      <main className="my-container pt-24">
        <h1 className="mb-8 text-center text-5xl font-bold text-primary lg:text-6xl">
          directory
        </h1>
        <AlgoliaSearch />
      </main>
      <Footer />
    </>
  );
};

export default SearchPage;
