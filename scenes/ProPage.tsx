import { FC } from "react";
import dynamic from "next/dynamic";

import ProHero from "@/components/pro/ProHero";
import WhySoPluggedPro from "@/components/pro/WhySoPluggedPro";
import OurServices from "@/components/pro/OurServices";
import OurReviews from "@/components/pro/OurReviews";

const Header = dynamic(() => import("../components/Header/Header"));
const Footer = dynamic(() => import("../components/Footer/Footer"));
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
