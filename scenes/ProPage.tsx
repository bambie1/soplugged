import { FC } from "react";
import dynamic from "next/dynamic";

import ProHero from "@/components/pro/ProHero";
import FeaturedReview from "@/components/pro/FeaturedReview";
import { Footer } from "@/components/Footer";

const ProHeader = dynamic(() => import("../components/Header/ProHeader"));
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

const ProPage: FC = (props) => {
  return (
    <>
      <ProHeader />
      <div className="scroll-p-10 overflow-hidden scroll-smooth">
        <ProHero />
        <FeaturedReview />
        <div className="my-10 grid gap-20 lg:gap-36">
          <SocialMediaService />
          <CustomWebsiteService />
          <ProductPhotography />

          <ConsultForm />
        </div>
        <Footer tertiary />
      </div>
    </>
  );
};

export default ProPage;
