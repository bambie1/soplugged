import { useRouter } from "next/router";
import type { GetServerSideProps, NextPage } from "next";
import { getCsrfToken, useSession } from "next-auth/react";

import SEO from "@/src/components/SEO";
import JoinPage from "@/src/scenes/JoinPage";

const Join: NextPage = (props) => {
  const { data: session } = useSession();
  const router = useRouter();

  if (session?.user) router.push("/my-business");

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
  const csrfToken = await getCsrfToken(context);

  return {
    props: { csrfToken },
  };
};

export default Join;
