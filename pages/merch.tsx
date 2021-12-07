import type { NextPage } from "next";

import { MerchPage } from "@/scenes/MerchPage";
import { SEO } from "@/components/SEO";

const Merch: NextPage = () => {
  return (
    <>
      <SEO
        description="Custom tees, sweatshirts and accessories to look fashionable while buying black"
        title="SoPlugged Merch"
      />
      <MerchPage />
    </>
  );
};

export default Merch;
