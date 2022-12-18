import { FC } from "react";

import SEO from "@/components/SEO";
import GuidelinesPage from "@/scenes/GuidelinesPage";

const Guidelines: FC = () => {
  return (
    <>
      <SEO
        description="In order to maintain a respectful, inclusive, and safe environment
        for everyone, we've created a set of community guidelines to serve
        as a moral compass for behavior on our platform, define what is
        acceptable in the SoPlugged community."
        title="Community guidelines | SoPlugged"
      />

      <GuidelinesPage />
    </>
  );
};

export default Guidelines;
