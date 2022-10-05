import type {
  GetServerSideProps,
  InferGetServerSidePropsType,
  NextPage,
} from "next";
import dynamic from "next/dynamic";
import { getSession } from "next-auth/react";
import Script from "next/script";

import { SEO } from "@/components/SEO";

const MyBusinessPage = dynamic(
  () => import("../scenes/MyBusinessPage/MyBusinessPage")
);

const MyBusiness: NextPage<
  InferGetServerSidePropsType<typeof getServerSideProps>
> = ({ business }) => {
  return (
    <>
      <SEO
        description="Register your business as an Black entrepreneur, and get featured on our platform, for FREE!"
        title="My Business | SoPlugged"
      />

      <MyBusinessPage business={business} />
      <Script src="https://maps.googleapis.com/maps/api/js?key=AIzaSyDjqMtZjTrCMfn7U4OHk00_wte02pcuaHs&libraries=places" />
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

    if (!businesses[0]) throw new Error("no business found");

    return {
      props: {
        business: businesses[0],
      },
    };
  } catch (error) {
    return {
      props: {
        business: null,
      },
    };
  }
};

export default MyBusiness;
