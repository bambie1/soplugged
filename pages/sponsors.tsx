import type { NextPage } from "next";

import SponsorsPage from "@/src/scenes/SponsorsPage";
import SEO from "@/src/components/SEO";

const Sponsors: NextPage = () => {
  return (
    <>
      <SEO
        title="Become a Sponsor | SoPlugged"
        description="Join SoPlugged in promoting and supporting black-owned businesses across Canada. By becoming a sponsor or donating, you'll help us invest in building and growing our platform, allowing us to connect even more communities with local black-owned businesses. Learn more about how you can make a difference today"
      />
      <SponsorsPage />
    </>
  );
};

export default Sponsors;
