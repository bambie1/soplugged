import { FC } from "react";
import dynamic from "next/dynamic";

import ProHero from "@/components/pro/ProHero";
import FeaturedReview from "@/components/pro/FeaturedReview";

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
        <div className="my-10 mx-auto grid gap-20 lg:gap-36">
          <FeaturedReview />
          <CustomWebsiteService />
          <SocialMediaService />
          <SatisfactionGuarantee />
          <Pricing />

          <ConsultForm />
        </div>
        <Footer tertiary />
      </div>
    </>
  );
};

export default ProPage;
