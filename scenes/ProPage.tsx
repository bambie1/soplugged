import { FC } from "react";
import dynamic from "next/dynamic";

import ProHero from "@/components/pro/ProHero";
import OurProcess from "@/components/pro/OurProcess";
import WhySoPluggedPro from "@/components/pro/WhySoPluggedPro";
import OurServices from "@/components/pro/OurServices";
import OurReviews from "@/components/pro/OurReviews";
import ProFAQs from "@/components/pro/ProFAQs";

const Header = dynamic(() => import("../components/Header/Header"));

const Footer = dynamic(() => import("../components/Footer/Footer"));

const ProPage: FC = () => {
  return (
    <>
      <Header variant="pro" />
      <div className="grid gap-20 overflow-hidden lg:gap-40">
        <ProHero />
        <WhySoPluggedPro />
        <OurServices />
        <OurReviews />
        <OurProcess />
        <ProFAQs />
        <Footer tertiary />
      </div>
    </>
  );
};

export default ProPage;
