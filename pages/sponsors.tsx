import type { NextPage } from "next";

import SponsorsPage from "@/scenes/SponsorsPage";
import SEO from "@/components/SEO";

const Sponsors: NextPage = () => {
  return (
    <>
      <SEO
        title="Become a Sponsor | SoPlugged"
        description="Our goal is to give black business a wider platform in Canada for free. Help us maintain this goal by donating."
      />
      <SponsorsPage />
    </>
  );
};

export default Sponsors;
