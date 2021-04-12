import React from "react";
import Profile from "@/components/Profile";
import DashboardLayout from "@/components/DashboardLayout";
import { editUser, addUser, getUser } from "src/handleDBUser";
import { Snackbar, IconButton } from "@/components/mui-components";
import { CloseIcon } from "@/components/mui-icons";
import nookies from "nookies";
import { verifyIdToken } from "../../utils/firebaseAdmin";

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
    if (user !== null) res = await editUser(data, token);
    else res = await addUser(data, token);
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

export async function getServerSideProps(context) {
  try {
    const cookies = nookies.get(context);
    const token = await verifyIdToken(cookies.token);
    if (token?.email) {
      const user = await getUser(cookies.token);
      return {
        props: { user, token: cookies.token, email: token.email },
      };
    } else throw new Error("no token found");
  } catch (error) {
    context.res.writeHead(302, { location: "/join" });
    context.res.end();
    return { props: {} };
  }
}

export default ProfilePage;
