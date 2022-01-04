import { GetServerSideProps } from "next";
import nookies from "nookies";

import { SEO } from "@/components/SEO";
import { MyBusinessWelcome } from "@/scenes/MyBusinessWelcome";
import { verifyIdToken } from "@/src/firebase/firebaseAdmin";

const Welcome = () => {
  return (
    <>
      <SEO
        description="Register your business as an Black entrepreneur, and get featured on our platform, for FREE!"
        title="Welcome - My Business | SoPlugged"
      />
      <MyBusinessWelcome />
    </>
  );
};

export const getServerSideProps: GetServerSideProps = async (context) => {
  try {
    const cookies = nookies.get(context);
    const token = await verifyIdToken(cookies.token);

    if (!token.email) throw new Error("no email in token");

    return { props: {} };
  } catch (error) {
    context.res.writeHead(302, { Location: "/join" });
    context.res.end();

    return { props: {} as never };
  }
};

export default Welcome;
