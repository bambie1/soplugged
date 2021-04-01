import React from "react";
import Dashboard from "@/components/Dashboard";
import {
  withAuthUser,
  withAuthUserTokenSSR,
  AuthAction,
} from "next-firebase-auth";
import DashboardLayout from "@/components/DashboardLayout";

const DashboardPage = ({ business }) => {
  return (
    <>
      <DashboardLayout title="My Dashboard | SoPlugged" position={0}>
        <Dashboard business={business} />
      </DashboardLayout>
    </>
  );
};

export const getServerSideProps = withAuthUserTokenSSR({
  whenUnauthed: AuthAction.REDIRECT_TO_LOGIN,
})(async ({ AuthUser, req }) => {
  const token = await AuthUser.getIdToken();
  const fetchUrl = `${process.env.NEXT_PUBLIC_SERVER_BASE_URL}/business`;
  try {
    const res = await fetch(fetchUrl, {
      method: "GET",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
        "Firebase-Token": token,
      },
    });
    if (!res.ok) throw new Error("HTTP status " + res.status);
    const business = await res.json();

    return {
      props: {
        business: business[0] || null,
      },
    };
  } catch (error) {
    return {
      props: {
        business: null,
      },
    };
  }
});

export default withAuthUser({
  whenUnauthedAfterInit: AuthAction.REDIRECT_TO_LOGIN,
})(DashboardPage);
