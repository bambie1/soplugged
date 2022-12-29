import { FC } from "react";
import dynamic from "next/dynamic";

import ProHero from "@/src/components/pro/ProHero";
import WhySoPluggedPro from "@/src/components/pro/WhySoPluggedPro";
import OurServices from "@/src/components/pro/OurServices";
import OurReviews from "@/src/components/pro/OurReviews";

const Header = dynamic(() => import("../components/Header/Header"));
const Footer = dynamic(() => import("../components/Footer"));
const CalendlyForm = dynamic(() => import("../components/pro/CalendlyForm"));
const ProFAQs = dynamic(() => import("../components/pro/ProFAQs"));

const ProPage: FC = () => {
  return (
    <>
      <Header variant="pro" />
      <div className="grid gap-20 overflow-hidden lg:gap-40">
        <ProHero />
        <WhySoPluggedPro />
        <OurServices />
        <OurReviews />
        <ProFAQs />
        <CalendlyForm />
        <Footer tertiary />
      </div>
    </>
  );
};

export default ProPage;
