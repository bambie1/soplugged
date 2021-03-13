import React, { useState } from "react";
import BusinessInfoForm from "../components/BusinessInfoForm";
import { Container } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import Head from "next/head";
import { useRouter } from "next/router";
import SavingAnimation from "../components/SavingAnimation";
import { submitBusinessObject } from "../src/updateBusiness";
import {
  withAuthUser,
  withAuthUserTokenSSR,
  AuthAction,
  useAuthUser,
} from "next-firebase-auth";
import useSWR from "swr";
import BusinessInfoSkeleton from "../components/skeletons/BusinessInfoSkeleton";

const useStyles = makeStyles((theme) => ({
  page: {
    padding: theme.spacing(10, 1, 2),
    minHeight: "85vh",
    zIndex: "1",
    background: "white",
  },
}));

const fetcher = (url, token) =>
  fetch(url, {
    method: "GET",
    headers: {
      "Firebase-Token": token,
    },
  }).then((r) => r.json());

const EditBusiness = ({ email, token }) => {
  const classes = useStyles();
  const user = useAuthUser();
  const router = useRouter();
  const [saving, setSaving] = useState(false);

  const { data, error } = useSWR(
    [`${process.env.NEXT_PUBLIC_SERVER_BASE_URL}/business`, token],
    fetcher
  );
  const handleSubmit = async (businessData, files) => {
    setSaving(true);
    const userToken = await user.getIdToken();
    await submitBusinessObject(businessData, files, email, userToken, data);
    setSaving(false);
    data ? router.push("/preview") : router.push("/preview/new");
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
        <div className={classes.page}>
          <Container maxWidth="lg">
            {data !== undefined ? (
              <BusinessInfoForm
                submitHandler={handleSubmit}
                currentBusiness={data}
                email={email}
              />
            ) : (
              <BusinessInfoSkeleton />
            )}
          </Container>
          {saving && <SavingAnimation />}
        </div>
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
  return {
    props: {
      email: AuthUser.email,
      token,
    },
  };
});

export default withAuthUser({
  whenUnauthedAfterInit: AuthAction.REDIRECT_TO_LOGIN,
})(EditBusiness);
