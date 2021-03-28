import React from "react";
import { makeStyles } from "@/components/mui-components";
import Dashboard from "@/components/Dashboard";
import {
  withAuthUser,
  withAuthUserTokenSSR,
  AuthAction,
} from "next-firebase-auth";
import DashboardLayout from "@/components/DashboardLayout";
import { useBusiness } from "@/hooks/useBusiness";
import DashboardSkeleton from "@/components/skeletons/DashboardSkeleton";

const useStyles = makeStyles((theme) => ({}));

const DashboardPage = ({ email, token }) => {
  const { business, isLoading, isError } = useBusiness(token);
  const classes = useStyles();

  if (isLoading)
    return (
      <DashboardLayout title="My Dashboard | SoPlugged" position={0}>
        <DashboardSkeleton page="home" />
      </DashboardLayout>
    );
  return (
    <>
      <DashboardLayout title="My Dashboard | SoPlugged" position={0}>
        {business && <Dashboard data={business} email={email} />}
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
})(DashboardPage);
