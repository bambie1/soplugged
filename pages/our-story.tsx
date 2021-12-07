import type { NextPage } from "next";

import { OurStoryPage } from "@/scenes/OurStoryPage";
import { SEO } from "@/components/SEO";

const OurStory: NextPage = () => {
  return (
    <>
      <SEO
        title="Our Story | SoPlugged"
        description="SoPlugged is an online platform that makes #buyingblack easy! Our
              search-friendly platform helps end-users connect to Black-owned
              businesses across Canada"
      />
      <OurStoryPage />
    </>
  );
};

export default OurStory;
