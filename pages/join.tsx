import type { NextPage } from "next";
import dynamic from "next/dynamic";

import { SEO } from "@/components/SEO";

const JoinPage = dynamic(() => import("../scenes/JoinPage/JoinPage"));

interface Props {
  referrer: any;
}

const Join: NextPage<Props> = ({ referrer }) => {
  return (
    <>
      <SEO
        description="Whether you have a need, provide solutions, or both, SoPlugged is for you"
        title="Join SoPlugged"
      />
      <JoinPage />
    </>
  );
};

export default Join;
