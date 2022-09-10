import { FC } from "react";
import dynamic from "next/dynamic";

import ProHero from "@/components/pro/ProHero";
import FeaturedReview from "@/components/pro/FeaturedReview";
import OurToolkit from "@/components/pro/OurToolkit";

const Header = dynamic(() => import("../components/Header/Header"));
const SocialMediaService = dynamic(
  () => import("../components/pro/SocialMediaService")
);
const CustomWebsiteService = dynamic(
  () => import("../components/pro/CustomWebsiteService")
);
const ProductPhotography = dynamic(
  () => import("../components/pro/ProductPhotography")
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
        <FeaturedReview />
        <div className="my-10 mx-auto grid gap-20 lg:max-w-none lg:gap-36">
          <SocialMediaService />
          <CustomWebsiteService />
          {/* <OurToolkit /> */}
          {/* <ProductPhotography /> */}
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
