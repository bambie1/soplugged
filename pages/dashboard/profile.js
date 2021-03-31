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
import { useUser } from "@/hooks/useUser";
import { submitUser } from "src/addUpdateUser";

const useStyles = makeStyles((theme) => ({}));

const ProfilePage = ({ token, email }) => {
  const classes = useStyles();
  const { user, isLoading, isError } = useUser(token);

  const handleSubmit = (data) => {
    submitUser(data, isError, token);
  };
  return (
    <>
      <DashboardLayout title="My Dashboard | SoPlugged" position={2}>
        {isLoading ? (
          <DashboardSkeleton page="profile" />
        ) : (
          <Profile
            user={isError ? null : user}
            email={email}
            submitHandler={handleSubmit}
          />
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
})(ProfilePage);
