import { FC } from "react";
import dynamic from "next/dynamic";

import ProHero from "@/components/pro/ProHero";
import FeaturedReview from "@/components/pro/FeaturedReview";
import OurProcess from "@/components/pro/OurProcess";

const Header = dynamic(() => import("../components/Header/Header"));
const SocialMediaService = dynamic(
  () => import("../components/pro/SocialMediaService")
);
const CustomWebsiteService = dynamic(
  () => import("../components/pro/CustomWebsiteService")
);
const ConsultForm = dynamic(() => import("../components/pro/ConsultForm"));
const Pricing = dynamic(() => import("../components/pro/Pricing"));
const SatisfactionGuarantee = dynamic(
  () => import("../components/pro/SatisfactionGuarantee")
);
const Footer = dynamic(() => import("../components/Footer/Footer"));

const ProPage: FC = () => {
  return (
    <>
      <Header variant="pro" />
      <div className="scroll-p-10 overflow-hidden scroll-smooth">
        <ProHero />
        <div className="relative mx-auto ">
          {/* <div className="absolute -top-96 left-0 right-0 -z-[1] h-80 -skew-y-6 bg-gradient-to-r from-accent/40 to-accent/20 lg:-top-64"></div> */}
          <div className="grid gap-20 lg:gap-36">
            <OurProcess />
            {/* <FeaturedReview /> */}
            <CustomWebsiteService />
            <SatisfactionGuarantee />
            <SocialMediaService />
            <Pricing />
            <ConsultForm />
          </div>
        </div>
        <Footer tertiary />
      </div>
    </>
  );
};

export default ProPage;
