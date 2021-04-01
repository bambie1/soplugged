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

const useStyles = makeStyles((theme) => ({
  page: {
    padding: theme.spacing(10, 0, 2),
    minHeight: "85vh",
    zIndex: "1",
    background: "white",
  },
}));

const EditBusiness = ({ business, token, email }) => {
  const classes = useStyles();
  const router = useRouter();
  const [saving, setSaving] = useState(false);

  const handleSubmit = async (businessData, files) => {
    setSaving(true);
    let slug = await submitBusinessObject(
      businessData,
      files,
      token,
      !!business
    );
    setSaving(false);
    if (!slug.error) {
      business ? router.push(`/business/${slug}`) : router.push("/welcome");
    } else {
      alert("error saving");
    }
  };
  if (business !== undefined) {
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
              currentBusiness={business}
            />
          </Container>
          {saving && <SavingAnimation />}
        </div>
      </>
    );
  } else {
    return <p>No business</p>;
  }
};

export const getServerSideProps = withAuthUserTokenSSR({
  whenUnauthed: AuthAction.REDIRECT_TO_LOGIN,
})(async ({ AuthUser, req }) => {
  const token = await AuthUser.getIdToken();
  const fetchUrl = `${process.env.NEXT_PUBLIC_SERVER_BASE_URL}/business`;
  try {
    const res = await fetch(fetchUrl, {
      method: "GET",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
        "Firebase-Token": token,
      },
    });
    if (!res.ok) throw new Error("HTTP status " + res.status);

    const business = await res.json();
    return {
      props: {
        business: business[0] || null,
        token,
        email: AuthUser.email,
      },
    };
  } catch (error) {
    return {
      props: {
        business: null,
      },
    };
  }
});

export default withAuthUser({
  whenUnauthedAfterInit: AuthAction.REDIRECT_TO_LOGIN,
})(EditBusiness);
