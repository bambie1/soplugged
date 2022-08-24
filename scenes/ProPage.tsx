import { FC } from "react";
import dynamic from "next/dynamic";

import ProHero from "@/components/pro/ProHero";

const ProHeader = dynamic(() => import("../components/Header/ProHeader"));
const Footer = dynamic(() => import("../components/Footer/Footer"));
const SocialMediaService = dynamic(
  () => import("../components/pro/SocialMediaService")
);
const CustomWebsiteService = dynamic(
  () => import("../components/pro/CustomWebsiteService")
);
const ConsultForm = dynamic(() => import("../components/pro/ConsultForm"));
const HomeGuides = dynamic(() => import("../components/pro/HomeGuides"));
const OurToolkit = dynamic(() => import("../components/pro/OurToolkit"));
const Reviews = dynamic(() => import("../components/pro/Reviews"));

const ProPage: FC = (props) => {
  return (
    <>
      <ProHeader />
      <div className="h-screen snap-y snap-mandatory overflow-y-auto">
        <ProHero />
        <SocialMediaService />
        <CustomWebsiteService />
        <ConsultForm />
      </div>
    </>
  );
};

export default ProPage;
