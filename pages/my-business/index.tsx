import type { NextPage } from "next";
import { useRouter } from "next/router";
import dynamic from "next/dynamic";
import useSWR from "swr";

import { swrFetchWithToken } from "@/utils/swrFetchWithToken";
import { SEO } from "@/components/SEO";
import MyBusinessSkeleton from "@/scenes/MyBusinessPage/MyBusinessSkeleton";
import { useBusinessFormContext } from "@/context/businessFormContext";
import { useEffect } from "react";

const MyBusinessPage = dynamic(
  () => import("../../scenes/MyBusinessPage/MyBusinessPage")
);

const MyBusiness: NextPage = () => {
  const router = useRouter();
  const { agreementSigned } = useBusinessFormContext();

  const { data: businesses, error } = useSWR(
    `${process.env.NEXT_PUBLIC_SERVER_BASE_URL}/business`,
    swrFetchWithToken
  );

  useEffect(() => {
    if (error && !agreementSigned) {
      router.push("/my-business/welcome");
    }
  }, [error, agreementSigned]);

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

export default MyBusiness;
