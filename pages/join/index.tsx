import type { GetServerSideProps, NextPage } from "next";
import dynamic from "next/dynamic";
import { getCsrfToken, getSession } from "next-auth/react";

import { SEO } from "@/components/SEO";

const JoinPage = dynamic(() => import("../../scenes/JoinPage/JoinPage"));

const Join: NextPage = (props) => {
  return (
    <>
      <SEO
        description="Whether you have a need, provide solutions, or both, SoPlugged is for you"
        title="Join SoPlugged"
      />
      <JoinPage {...props} />
    </>
  );
};

export const getServerSideProps: GetServerSideProps = async (context) => {
  const session = await getSession({ req: context.req });

  if (session?.user?.email)
    return {
      redirect: {
        destination: "/dashboard",
        permanent: false,
      },
    };

  const csrfToken = await getCsrfToken(context);
  return {
    props: { csrfToken },
  };
};

export default Join;
