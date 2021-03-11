import React, { useState } from "react";
import BusinessInfoForm from "../components/BusinessInfoForm";
import { Container, Typography } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import Head from "next/head";
import { useRouter } from "next/router";
import SavingAnimation from "../components/SavingAnimation";
import { submitBusinessObject } from "../src/updateBusiness";
import {
  useAuthUser,
  withAuthUser,
  withAuthUserTokenSSR,
  AuthAction,
} from "next-firebase-auth";

const useStyles = makeStyles((theme) => ({
  page: {
    padding: theme.spacing(10, 1, 2),
    minHeight: "85vh",
  },
}));

const EditBusiness = ({ email, business }) => {
  const classes = useStyles();
  const { user } = {};
  const router = useRouter();
  const [saving, setSaving] = useState(false);

  const handleSubmit = async (data, files) => {
    const userToken = await user.getIdToken();
    setSaving(true);
    await submitBusinessObject(data, files, email, userToken, business);
    setSaving(false);
    business ? router.push("/preview") : router.push("/preview/new");
  };
  if (email) {
    return (
      <>
        <Head>
          <meta
            name="description"
            content="Online platform connecting you to black-owned businesses across Canada. If you're an entrepreneur, register your business to be featured on our platform or join our mailing list to stay plugged in."
          />
          <title>My Business | SoPlugged</title>
        </Head>
        <Container maxWidth="lg" className={classes.page}>
          <BusinessInfoForm
            submitHandler={handleSubmit}
            currentBusiness={business}
            email={email}
          />
        </Container>
        {saving && <SavingAnimation />}
      </>
    );
  } else {
    return <p>Not signed in</p>;
  }
};

export const getServerSideProps = withAuthUserTokenSSR({
  whenUnauthed: AuthAction.REDIRECT_TO_LOGIN,
})(async ({ AuthUser, req }) => {
  const token = await AuthUser.getIdToken();
  const response = await fetch(process.env.NEXT_PUBLIC_SERVER_ONE_BUSINESS, {
    method: "GET",
    headers: {
      "Firebase-Token": token,
    },
  });
  const data = await response.json();
  if (!response.ok) {
    throw new Error(
      `Data fetching failed with status ${response.status}: ${JSON.stringify(
        data
      )}`
    );
  }
  return {
    props: {
      email: AuthUser.email,
      business: data,
    },
  };
});

export default withAuthUser({
  whenUnauthedAfterInit: AuthAction.REDIRECT_TO_LOGIN,
})(EditBusiness);
