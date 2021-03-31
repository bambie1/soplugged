import React from "react";
import Favorites from "@/components/Favorites";
import {
  withAuthUser,
  withAuthUserTokenSSR,
  AuthAction,
} from "next-firebase-auth";
import DashboardLayout from "@/components/DashboardLayout";
import DashboardSkeleton from "@/components/skeletons/DashboardSkeleton";
import { useFavorites } from "@/hooks/useFavorites";

const FavoritesPage = ({ token }) => {
  const { favorites, isLoading, isError } = useFavorites(token);

  if (isLoading)
    return (
      <DashboardLayout title="My Dashboard | SoPlugged" position={1}>
        <DashboardSkeleton page="favorites" />
      </DashboardLayout>
    );
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
  return {
    props: {
      token,
    },
  };
});

export default withAuthUser({
  whenUnauthedAfterInit: AuthAction.REDIRECT_TO_LOGIN,
})(FavoritesPage);
