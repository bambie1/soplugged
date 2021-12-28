import { useState } from "react";
import type { NextPage } from "next";

import { ComingSoon, ProPage } from "@/scenes/ProPage";
import { SEO } from "@/components/SEO";

const Pro: NextPage = () => {
  const [isLive, setIsLive] = useState(true);

  return (
    <>
      <SEO title="Professional help for your business' digital needs | SoPluggedPRO" />
      {isLive ? <ProPage /> : <ComingSoon />}
    </>
  );
};

export default Pro;
