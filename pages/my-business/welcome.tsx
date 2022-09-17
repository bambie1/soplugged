import { getSession } from "next-auth/react";
import { GetServerSideProps } from "next/types";

import { SEO } from "@/components/SEO";
import { MyBusinessWelcome } from "@/scenes/MyBusinessWelcome";

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

export const getServerSideProps: GetServerSideProps = async ({ req }) => {
  const session = await getSession({ req });

  if (!session?.user) {
    return {
      redirect: {
        destination: "/join",
        permanent: false,
      },
    };
  }

  try {
    const fetchPromise = await fetch(
      `${process.env.NEXT_PUBLIC_SERVER_BASE_URL}/business`,
      {
        method: "GET",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
          "User-Email": session.user.email!,
          "Super-Secret-Key": process.env.NEXT_SERVER_SECRET!,
        },
      }
    );
    const businesses = await fetchPromise.json();

    if (!!businesses.length)
      return {
        redirect: {
          destination: "/my-business",
          permanent: false,
        },
      };

    return {
      props: {},
    };
  } catch (error) {
    return {
      props: {},
    };
  }
};

export default Welcome;
