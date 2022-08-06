import dynamic from "next/dynamic";

import ProHero from "@/components/pro/ProHero";
import Services from "@/components/pro/Services";
import Reviews from "@/components/pro/Reviews";
import BookAConsult from "@/components/pro/BookAConsult";
import HomeGuides from "@/components/pro/HomeGuides";
import OurToolkit from "@/components/pro/OurToolkit";

const Header = dynamic(() => import("../components/Header"));
const Footer = dynamic(() => import("../components/Footer/Footer"));

const ProPage = () => {
  return (
    <>
      <Header />
      <ProHero />
      <main className="mb-10 flex min-h-screen scroll-pt-10 flex-col gap-20">
        <Services />
        <Reviews />
        <HomeGuides />
        <OurToolkit />
        <BookAConsult />
      </main>
      <Footer tertiary />
    </>
  );
};

export default ProPage;
