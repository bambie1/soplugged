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
  const { push } = useRouter();
  const { agreementSigned } = useBusinessFormContext();

  const { data: businesses, error } = useSWR(
    `${process.env.NEXT_PUBLIC_SERVER_BASE_URL}/business`,
    swrFetchWithToken
  );

  if (!businesses?.length && !agreementSigned) {
    push("/my-business/welcome");
  }

  if (error)
    return (
      <>
        <SEO
          description="Register your business as an Black entrepreneur, and get featured on our platform, for FREE!"
          title="My Business | SoPlugged"
        />
        <MyBusinessPage business={null} />
      </>
    );

  const renderPage = () => {
    if (!businesses) return <MyBusinessSkeleton />;

    if (!businesses?.length) return <MyBusinessPage business={null} />;

    return <MyBusinessPage business={businesses[0]} />;
  };

  return (
    <>
      <SEO
        description="Register your business as an Black entrepreneur, and get featured on our platform, for FREE!"
        title="My Business | SoPlugged"
      />
      {renderPage()}
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
