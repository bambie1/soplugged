import type { NextPage } from "next";
import { useFlags } from "@happykit/flags/client";

import { ProPage } from "@/scenes/ProPage";
import { SEO } from "@/components/SEO";

const Pro: NextPage = () => {
  const { flags } = useFlags();

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
