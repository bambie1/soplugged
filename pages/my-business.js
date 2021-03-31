import React, { useState } from "react";
import BusinessInfoForm from "../components/BusinessInfoForm";
import { Container, makeStyles } from "../components/mui-components";
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
import BusinessInfoSkeleton from "../components/skeletons/BusinessInfoSkeleton";
import { useBusiness } from "@/hooks/useBusiness";

const useStyles = makeStyles((theme) => ({
  page: {
    padding: theme.spacing(10, 0, 2),
    minHeight: "85vh",
    zIndex: "1",
    background: "white",
  },
}));

const EditBusiness = ({ email, token }) => {
  const classes = useStyles();
  const user = useAuthUser();
  const router = useRouter();
  const [saving, setSaving] = useState(false);
  const { business, isLoading, isError } = useBusiness(token);

  const handleSubmit = async (businessData, files) => {
    setSaving(true);
    const userToken = await user.getIdToken();
    let slug = await submitBusinessObject(
      businessData,
      files,
      email,
      userToken,
      business
    );
    setSaving(false);
    if (slug) {
      business ? router.push(`/business/${slug}`) : router.push("/welcome");
    }
  };

  if (isLoading)
    return (
      <div className={classes.page}>
        <BusinessInfoSkeleton />
      </div>
    );
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
            <BusinessInfoForm
              submitHandler={handleSubmit}
              currentBusiness={isError ? null : business[0]}
              email={email}
            />
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
