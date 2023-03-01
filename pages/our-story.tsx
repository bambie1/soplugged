import type { NextPage } from "next";

import OurStoryPage from "@/src/scenes/OurStoryPage";
import SEO from "@/src/components/SEO";

const OurStory: NextPage = () => {
  return (
    <>
      <SEO
        title="Our Story | SoPlugged"
        description="Learn about SoPlugged and our mission to support and empower Black-owned businesses across Canada. Our free online directory connects communities with local Black-owned businesses, helping to promote economic growth and diversity. Join us in our mission today."
      />
      <OurStoryPage />
    </>
  );
};

export default OurStory;
