import type { GetServerSideProps, NextPage } from "next";
import { useRouter } from "next/router";
import dynamic from "next/dynamic";
import nookies from "nookies";
import useSWR from "swr";

import { swrFetchWithToken } from "@/utils/swrFetchWithToken";
import { SEO } from "@/components/SEO";
import MyBusinessSkeleton from "@/scenes/MyBusinessPage/MyBusinessSkeleton";
import { useBusinessFormContext } from "@/context/businessFormContext";
import { verifyIdToken } from "@/src/firebase/firebaseAdmin";

const MyBusinessPage = dynamic(
  () => import("../../scenes/MyBusinessPage/MyBusinessPage")
);

const MyBusiness: NextPage = () => {
  const { query, push } = useRouter();
  const { agreementSigned, setIsNew } = useBusinessFormContext();

  const { data: businesses, error } = useSWR(
    `${process.env.NEXT_PUBLIC_SERVER_BASE_URL}/business`,
    swrFetchWithToken
  );

  if (!businesses) return <MyBusinessSkeleton />;

  if (!businesses[0] && !agreementSigned) {
    setIsNew(true);
    push("/my-business/welcome");
  }

  return (
    <>
      <SEO
        description="Register your business as an Black entrepreneur, and get featured on our platform, for FREE!"
        title="My Business | SoPlugged"
      />
      <MyBusinessPage business={businesses[0]} step={query.step} />
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
    return {
      redirect: {
        destination: "/join",
        permanent: false,
      },
    };
  }
};

export default MyBusiness;
