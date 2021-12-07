import type { GetServerSideProps, NextPage } from "next";
import { useRouter } from "next/router";
import dynamic from "next/dynamic";
import nookies from "nookies";
import useSWR from "swr";

import { swrFetchWithToken } from "@/utils/swrFetchWithToken";

import { verifyIdToken } from "../firebase/firebaseAdmin";
import MyBusinessSkeleton from "@/scenes/MyBusinessPage/MyBusinessSkeleton";

const MyBusinessPage = dynamic(
  () => import("../scenes/MyBusinessPage/MyBusinessPage")
);

const MyBusiness: NextPage = () => {
  const { query } = useRouter();

  const { data: businesses, error } = useSWR(
    `${process.env.NEXT_PUBLIC_SERVER_BASE_URL}/business`,
    swrFetchWithToken
  );

  if (!businesses) return <MyBusinessSkeleton />;

  return (
    <>
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
