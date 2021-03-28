import React from "react";
import { makeStyles } from "@/components/mui-components";
import Profile from "@/components/Profile";
import {
  withAuthUser,
  withAuthUserTokenSSR,
  AuthAction,
} from "next-firebase-auth";
import DashboardLayout from "@/components/DashboardLayout";
import DashboardSkeleton from "@/components/skeletons/DashboardSkeleton";

const useStyles = makeStyles((theme) => ({}));

const ProfilePage = ({ email }) => {
  const classes = useStyles();

  return (
    <>
      <DashboardLayout title="My Dashboard | SoPlugged" position={2}>
        <Profile email={email} />
      </DashboardLayout>
      {/* <DashboardLayout title="My Profile | SoPlugged" position={2}>
        <DashboardSkeleton page="profile" />
      </DashboardLayout> */}
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
})(ProfilePage);
