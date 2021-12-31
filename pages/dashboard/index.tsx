import type { GetServerSideProps, NextPage } from "next";
import nookies from "nookies";
import useSWR from "swr";

import { BusinessInfoPage } from "@/scenes/dashboard/BusinessInfoPage";
import BusinessInfoSkeleton from "@/scenes/dashboard/BusinessInfoPage/BusinessInfoSkeleton";
import { swrFetchWithToken } from "@/utils/swrFetchWithToken";
import { SEO } from "@/components/SEO";

import { verifyIdToken } from "@/src/firebase/firebaseAdmin";
import { DashboardLayout } from "layouts/Dashboard";

const DashboardHome: NextPage = () => {
  const { data: businesses, error } = useSWR(
    `${process.env.NEXT_PUBLIC_SERVER_BASE_URL}/business`,
    swrFetchWithToken
  );

  const renderPage = () => {
    if (error) return <BusinessInfoPage business={null} />;
    if (!businesses) return <BusinessInfoSkeleton />;
    return <BusinessInfoPage business={businesses[0]} />;
  };

  return (
    <>
      <SEO
        title="Business Info | My SoPlugged dashboard"
        description="Manage your business, favorites and profile."
      />
      <DashboardLayout>{renderPage()}</DashboardLayout>
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

export default DashboardHome;
