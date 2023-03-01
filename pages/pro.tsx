import type { NextPage } from "next";

import ProPage from "@/src/scenes/ProPage";
import SEO from "@/src/components/SEO";

const Pro: NextPage = () => {
  return (
    <>
      <SEO
        description="Get the digital expertise you need with SoPlugged Pro. Our team of experts will handle your custom website design, social media management, and more. Focus on what you do best and let us take care of your digital needs. Contact us today to learn more."
        title="SoPlugged Pro | Grow your online presence with ease"
        variant="pro"
      />
      <ProPage />
    </>
  );
};

export default Pro;
