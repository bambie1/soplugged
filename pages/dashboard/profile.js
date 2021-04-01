import React from "react";
import Profile from "@/components/Profile";
import {
  withAuthUser,
  withAuthUserTokenSSR,
  AuthAction,
} from "next-firebase-auth";
import DashboardLayout from "@/components/DashboardLayout";
import { editUser, addUser, getUser } from "src/handleDBUser";
import { Snackbar, IconButton } from "@/components/mui-components";
import { CloseIcon } from "@/components/mui-icons";

const ProfilePage = ({ user, token, email }) => {
  const [open, setOpen] = React.useState(false);
  const handleClose = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }
    setOpen(false);
  };
  const handleSubmit = async (data) => {
    let res = null;
    data.email = email;
    if (user) res = await editUser(data, token);
    else res = await addUser(data, token);
    console.log({ res });
    if (res && !res.error) setOpen(true);
  };
  return (
    <>
      <DashboardLayout title="My Profile | SoPlugged" position={2}>
        <Profile user={user} email={email} submitHandler={handleSubmit} />
      </DashboardLayout>
      <Snackbar
        anchorOrigin={{
          vertical: "bottom",
          horizontal: "left",
        }}
        open={open}
        autoHideDuration={6000}
        onClose={handleClose}
        message="User Profile updated"
        action={
          <IconButton
            size="small"
            aria-label="close"
            color="inherit"
            onClick={handleClose}
          >
            <CloseIcon fontSize="small" />
          </IconButton>
        }
      />
    </>
  );
};

export const getServerSideProps = withAuthUserTokenSSR({
  whenUnauthed: AuthAction.REDIRECT_TO_LOGIN,
})(async ({ AuthUser, req }) => {
  const token = await AuthUser.getIdToken();
  const user = await getUser(token);
  return { props: { user, token, email: AuthUser.email } };
});

export default withAuthUser({
  whenUnauthedAfterInit: AuthAction.REDIRECT_TO_LOGIN,
})(ProfilePage);
