import type { NextPage } from "next";
import { useFlags } from "@happykit/flags/client";

import { ComingSoon, ProPage } from "@/scenes/ProPage";
import { SEO } from "@/components/SEO";

const Pro: NextPage = () => {
  const { flags } = useFlags();

  return (
    <>
      <SEO
        description="Professional help for your business' digital needs | SoPluggedPRO"
        title="Scale your business with ease"
      />
      {/* {flags?.pro_page ? <ProPage /> : <ComingSoon />} */}
      <ProPage />
    </>
  );
};

export default Pro;
