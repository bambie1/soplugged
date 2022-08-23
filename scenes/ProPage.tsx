import { FC } from "react";
import dynamic from "next/dynamic";

import ProHero from "@/components/pro/ProHero";
import ExpandedServices from "@/components/pro/ExpandedServices";
import Services from "@/components/pro/Services";

const Header = dynamic(() => import("../components/Header"));
const Footer = dynamic(() => import("../components/Footer/Footer"));
const BookAConsult = dynamic(() => import("../components/pro/BookAConsult"));
const HomeGuides = dynamic(() => import("../components/pro/HomeGuides"));
const OurToolkit = dynamic(() => import("../components/pro/OurToolkit"));
const HowWeDoIt = dynamic(() => import("../components/pro/HowWeDoIt"));
const Reviews = dynamic(() => import("../components/pro/Reviews"));

const ProPage: FC = (props) => {
  return (
    <>
      <Header />
      <ProHero />
      <main className="mb-10 flex min-h-screen scroll-pt-10 flex-col gap-20 lg:mt-36">
        <Services />
        <ExpandedServices />
        <HowWeDoIt />
        <Reviews />
        <HomeGuides {...props} />
        <OurToolkit />
        <BookAConsult />
      </main>
      <Footer tertiary />
    </>
  );
};

export default ProPage;
