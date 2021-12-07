import type { NextPage } from "next";

import { ProPage } from "@/scenes/ProPage";
import { SEO } from "@/components/SEO";

const Pro: NextPage = () => {
  return (
    <>
      <SEO title="Professional help for your business' digital needs | SoPluggedPRO" />

      <ProPage />
    </>
  );
};

export default Pro;
