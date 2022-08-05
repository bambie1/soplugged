import type { NextPage } from "next";

import ProPage from "@/scenes/ProPage";
import { SEO } from "@/components/SEO";

const Pro: NextPage = () => {
  return (
    <>
      <SEO
        description="Professional help for your business' digital needs | SoPluggedPRO"
        title="Scale your business with ease"
      />
      <ProPage />
    </>
  );
};

export default Pro;
