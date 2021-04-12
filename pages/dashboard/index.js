import React from "react";
import Dashboard from "@/components/Dashboard";
import DashboardLayout from "@/components/DashboardLayout";
import nookies from "nookies";
import { verifyIdToken } from "../../utils/firebaseAdmin";

const DashboardPage = ({ business }) => {
  return (
    <>
      <DashboardLayout title="My Dashboard | SoPlugged" position={0}>
        <Dashboard business={business} />
      </DashboardLayout>
    </>
  );
};

export async function getServerSideProps(context) {
  try {
    const cookies = nookies.get(context);
    const token = await verifyIdToken(cookies.token);

    if (token?.email) {
      const fetchUrl = `${process.env.NEXT_PUBLIC_SERVER_BASE_URL}/business`;
      const res = await fetch(fetchUrl, {
        method: "GET",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
          "Firebase-Token": cookies.token,
        },
      });
      if (!res.ok)
        return {
          props: {
            business: null,
          },
        };
      const business = await res.json();
      return {
        props: {
          business: business[0] || null,
        },
      };
    } else throw new Error("No token found");
  } catch (err) {
    context.res.writeHead(302, { location: "/join" });
    context.res.end();
    return { props: {} };
  }
}

export default DashboardPage;
