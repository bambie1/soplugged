import type { NextPage } from "next";

import SEO from "@/components/SEO";
import SoRandomPage from "@/scenes/SoRandomPage";

const SoRandom: NextPage = () => {
  return (
    <>
      <SEO
        title="So Random | A SoPlugged talk-show"
        description="A talk-show about everything related to buying black and running a small business as a black entrepreneur."
      />
      <SoRandomPage />
    </>
  );
};

export default SoRandom;
