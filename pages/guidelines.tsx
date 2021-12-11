import { FC } from "react";

import { SEO } from "@/components/SEO";
import { GuidelinesPage } from "@/scenes/GuidelinesPage";

const Guidelines: FC = () => {
  return (
    <>
      <SEO
        description="Community Guidelines for SoPlugged users"
        title="Guidelines | SoPlugged"
      />

      <GuidelinesPage />
    </>
  );
};

export default Guidelines;
