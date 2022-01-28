import type { NextPage } from "next";
import { useFlags } from "@happykit/flags/client";

import { ComingSoon, ProPage } from "@/scenes/ProPage";
import { SEO } from "@/components/SEO";

const Pro: NextPage = () => {
  const { flags } = useFlags();

  return (
    <>
      <SEO title="Professional help for your business' digital needs | SoPluggedPRO" />
      {flags?.pro_page ? <ProPage /> : <ComingSoon />}
    </>
  );
};

export default Pro;
