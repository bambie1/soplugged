import React from "react";
import Favorites from "@/components/Favorites";
import {
  withAuthUser,
  withAuthUserTokenSSR,
  AuthAction,
} from "next-firebase-auth";
import DashboardLayout from "@/components/DashboardLayout";

const FavoritesPage = ({ favorites }) => {
  return (
    <>
      <DashboardLayout title="My Dashboard | SoPlugged" position={1}>
        <Favorites data={favorites} />
      </DashboardLayout>
    </>
  );
};

export const getServerSideProps = withAuthUserTokenSSR({
  whenUnauthed: AuthAction.REDIRECT_TO_LOGIN,
})(async ({ AuthUser, req }) => {
  const token = await AuthUser.getIdToken();
  const fetchUrl = `${process.env.NEXT_PUBLIC_SERVER_BASE_URL}/favorites`;
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
    const favorites = await res.json();
    return {
      props: {
        favorites,
      },
    };
  } catch (error) {
    return {
      props: {
        favorites: [],
      },
    };
  }
});

export default withAuthUser({
  whenUnauthedAfterInit: AuthAction.REDIRECT_TO_LOGIN,
})(FavoritesPage);
