import dynamic from "next/dynamic";

import ProHero from "@/components/pro/ProHero";
import Services from "@/components/pro/Services";
import Reviews from "@/components/pro/Reviews";
import BookAConsult from "@/components/pro/BookAConsult";

const Header = dynamic(() => import("../components/Header"));
const Footer = dynamic(() => import("../components/Footer/Footer"));

const ProPage = () => {
  return (
    <>
      <Header />
      <main className="mb-10 flex min-h-screen flex-col">
        <ProHero />
        <Services />
        <Reviews />
        <BookAConsult />
      </main>
      <Footer tertiary />
    </>
  );
};

export default ProPage;
