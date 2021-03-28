import React from "react";
import { makeStyles } from "@/components/mui-components";
import Favorites from "@/components/Favorites";
import {
  withAuthUser,
  withAuthUserTokenSSR,
  AuthAction,
} from "next-firebase-auth";
import useSWR from "swr";
import DashboardLayout from "@/components/DashboardLayout";
import DashboardSkeleton from "@/components/skeletons/DashboardSkeleton";

const useStyles = makeStyles((theme) => ({}));

const fetcher = (url, token) =>
  fetch(url, {
    method: "GET",
  }).then((r) => r.json());

const FavoritesPage = ({ email, token }) => {
  const { data, error } = useSWR(
    [`${process.env.NEXT_PUBLIC_SERVER_BASE_URL}/businesses`],
    fetcher
  );
  const classes = useStyles();

  return (
    <>
      <DashboardLayout title="My Dashboard | SoPlugged" position={1}>
        {data ? (
          <Favorites data={data} email={email} />
        ) : (
          <DashboardSkeleton page="favorites" />
        )}
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
      email: AuthUser.email,
      token,
    },
  };
});

export default withAuthUser({
  whenUnauthedAfterInit: AuthAction.REDIRECT_TO_LOGIN,
})(FavoritesPage);
