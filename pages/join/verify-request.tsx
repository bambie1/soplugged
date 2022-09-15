import { NextPage } from "next";

import { SEO } from "@/components/SEO";
import { JoinPage } from "@/scenes/JoinPage";

const VerifyRequest: NextPage = (props) => {
  return (
    <>
      <SEO
        description="Whether you have a need, provide solutions, or both, SoPlugged is for you"
        title="Check your e-mail | Join SoPlugged"
      />

      <JoinPage {...props} stage="verify" />
    </>
  );
};

export default VerifyRequest;
