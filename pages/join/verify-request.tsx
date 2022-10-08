import type { GetServerSideProps, NextPage } from "next";
import { getCsrfToken } from "next-auth/react";

import { SEO } from "@/components/SEO";
import JoinPage from "@/scenes/JoinPage";

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

export const getServerSideProps: GetServerSideProps = async (context) => {
  const csrfToken = await getCsrfToken(context);
  return {
    props: { csrfToken },
  };
};

export default VerifyRequest;
