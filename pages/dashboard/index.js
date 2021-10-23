import React from "react";
import { DashboardHome, DashboardLayout } from "@components/index";
import nookies from "nookies";
import { verifyIdToken } from "../../utils/firebaseAdmin";
import { fetchUserBusiness } from "../../utils/fetchUserBusiness";

const DashboardPage = ({ business }) => {
  return (
    <>
      <DashboardLayout title="My Dashboard | SoPlugged" position={0}>
        <DashboardHome business={business} />
      </DashboardLayout>
    </>
  );
};

export async function getServerSideProps(context) {
  try {
    const cookies = nookies.get(context);
    const token = await verifyIdToken(cookies.token);

    if (!token.email) throw new Error("no email in token");

    const response = await fetchUserBusiness(cookies.token);

    return { props: response };
  } catch (error) {
    return {
      redirect: {
        destination: "/join",
        permanent: true,
      },
    };
  }
}

export default DashboardPage;
