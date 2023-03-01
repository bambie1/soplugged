import type { NextPage } from "next";

import SponsorsPage from "@/src/scenes/SponsorsPage";
import SEO from "@/src/components/SEO";

const Sponsors: NextPage = () => {
  return (
    <>
      <SEO
        title="Become a Sponsor | SoPlugged"
        description="Join SoPlugged in promoting and supporting Black-owned businesses across Canada. By becoming a sponsor, you'll help us invest in building and growing our platform, allowing us to connect even more communities with local Black-owned businesses."
      />
      <SponsorsPage />
    </>
  );
};

export default Sponsors;
