import React, { useState } from "react";
import BusinessInfoForm from "../components/BusinessInfoForm";
import { Container, Typography } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import Head from "next/head";
import nookies from "nookies";
import { verifyIdToken } from "../src/firebase/firebaseAdmin";
import firebaseClient from "../src/firebase/firebaseClient";
import { useAuth } from "../contexts/auth";
import { useRouter } from "next/router";
import { getImageUrl } from "../src/uploadImage";
import SavingAnimation from "../components/SavingAnimation";
import { submitBusinessObject } from "../src/updateBusiness";

const useStyles = makeStyles((theme) => ({
  page: {
    padding: theme.spacing(10, 1, 2),
    minHeight: "85vh",
  },
}));

const EditBusiness = ({ email, business }) => {
  const classes = useStyles();
  firebaseClient();
  const { user } = useAuth();
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

export async function getServerSideProps(context) {
  try {
    const cookies = nookies.get(context);
    const token = await verifyIdToken(cookies.token);
    const { email } = token;
    const res = await fetch(process.env.NEXT_PUBLIC_SERVER_ONE_BUSINESS, {
      method: "GET",
      headers: {
        "Firebase-Token": cookies.token,
      },
    });
    if (!res.ok) {
      throw new Error("HTTP status " + res.status);
    }
    const resJson = await res.json();
    return {
      props: {
        email: email,
        business: resJson,
      },
    };
  } catch (err) {
    console.log({ err });
    context.res.writeHead(302, { Location: "/join" });
    context.res.end();
    return { props: {} };
  }
}

export default EditBusiness;
