import type { GetServerSideProps, NextPage } from "next";
import nookies from "nookies";
import useSWR from "swr";

import { BusinessInfoPage } from "@/scenes/dashboard/BusinessInfoPage";
import { swrFetchWithToken } from "@/utils/swrFetchWithToken";

import { verifyIdToken } from "../../firebase/firebaseAdmin";
import { DashboardLayout } from "layouts/Dashboard";
import BusinessInfoSkeleton from "@/scenes/dashboard/BusinessInfoPage/BusinessInfoSkeleton";

const DashboardHome: NextPage = () => {
  const { data: businesses, error } = useSWR(
    `${process.env.NEXT_PUBLIC_SERVER_BASE_URL}/business`,
    swrFetchWithToken
  );

  const renderPage = () => {
    if (!businesses) return <BusinessInfoSkeleton />;
    return <BusinessInfoPage business={businesses[0]} />;
  };

  return (
    <>
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
