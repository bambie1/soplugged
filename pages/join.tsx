import type { GetServerSideProps, NextPage } from "next";
import nookies from "nookies";
import dynamic from "next/dynamic";

import { SEO } from "@/components/SEO";
import { verifyIdToken } from "@/src/firebase/firebaseAdmin";

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
      <JoinPage referrer={referrer} />
    </>
  );
};

export const getServerSideProps: GetServerSideProps = async (context) => {
  const referrer = context.req.headers.referer;
  const host = context.req.headers.host;
  // only redirect to referre if referrer is a business or the directory. Else go to daashboard
  const redirectRef =
    referrer?.indexOf(host + "/business") !== -1 ||
    referrer?.indexOf(host + "/search") !== -1
      ? referrer
      : null;
  try {
    const cookies = nookies.get(context);
    const token = await verifyIdToken(cookies.token);

    if (token?.email) {
      return {
        redirect: {
          destination: "/dashboard",
          permanent: false,
        },
      };
    } else {
      throw new Error("not signed in");
    }
  } catch (error) {
    return {
      props: {
        referrer: redirectRef || "",
        // refresh: error.code,
      },
    };
  }
};

export default Join;
