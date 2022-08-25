import { FC } from "react";
import dynamic from "next/dynamic";

import ProHero from "@/components/pro/ProHero";

const ProHeader = dynamic(() => import("../components/Header/ProHeader"));
const SocialMediaService = dynamic(
  () => import("../components/pro/SocialMediaService")
);
const CustomWebsiteService = dynamic(
  () => import("../components/pro/CustomWebsiteService")
);
const ConsultForm = dynamic(() => import("../components/pro/ConsultForm"));

const ProPage: FC = (props) => {
  return (
    <>
      <ProHeader />
      <div className="h-screen scroll-p-10 overflow-y-auto scroll-smooth">
        <ProHero />
        <SocialMediaService />
        <CustomWebsiteService />
        <ConsultForm />
      </div>
    </>
  );
};

export default ProPage;
