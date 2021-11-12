import React from "react";
import { Favorites, DashboardLayout } from "@components/index";
import nookies from "nookies";
import { verifyIdToken } from "../../utils/firebaseAdmin";
import { fetchUserFavorites } from "utils/fetchUserFavorites";

const FavoritesPage = ({ favorites }) => {
  return (
    <>
      <DashboardLayout title="My Dashboard | SoPlugged" position={1}>
        <Favorites data={favorites} />
      </DashboardLayout>
    </>
  );
};

export async function getServerSideProps(context) {
  try {
    const cookies = nookies.get(context);
    const token = await verifyIdToken(cookies.token);

    if (!token.email) throw new Error("no email in token");

    const response = await fetchUserFavorites(cookies.token);
    return { props: response };
  } catch (error) {
    console.log({ error });
    return {
      redirect: {
        destination: "/join",
        permanent: false,
      },
    };
  }
}

export default FavoritesPage;
