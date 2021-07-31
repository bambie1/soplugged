import React from "react";
import FirebaseAuth from "../components/FirebaseAuth";
import { Button, Typography, Container } from "@material/mui-components";
import Link from "next/link";
import SEO from "@components/SEO";
import nookies from "nookies";
import { verifyIdToken } from "../utils/firebaseAdmin";
import { NavigateBeforeIcon } from "@components/material-ui/mui-icons";
import Image from "next/image";
import styles from "styles/Join.module.scss";

const Join = ({ referrer }) => {
  return (
    <>
      <SEO
        description="Whether you have a need, provide solutions, or both, SoPlugged is for you"
        title="Join SoPlugged"
      />
      <div className={styles.page}>
        <Container maxWidth="sm" className={styles.container}>
          <div className={styles.logo_circle}>
            <Image
              src="/soplugged-logo.png"
              alt="SoPlugged Logo"
              width={60}
              height={60}
            />
          </div>
          <Typography variant="h1">Join SoPlugged</Typography>
          <Typography variant="body1">
            Please verify your identity via one of the following sign-in
            methods:
          </Typography>
          <div className={styles.firebase_auth_paper}>
            <FirebaseAuth referrer={referrer} />
          </div>
          <hr style={{ width: "30%", margin: " 16px auto" }} />
          <Link href="/search">
            <a className={styles.back_to_directory_btn}>
              <Button
                variant="contained"
                color="secondary"
                startIcon={<NavigateBeforeIcon />}
              >
                I'm just browsing
              </Button>
            </a>
          </Link>
        </Container>
      </div>
    </>
  );
};

export async function getServerSideProps(context) {
  const referrer = context.req.headers.referer;
  const host = context.req.headers.host;
  // only redirect to referre if referrer is a business or the directory. Else go to daashboard
  const redirectRef =
    referrer?.indexOf(host + "/business") !== -1 ||
    referrer?.indexOf(host + "/search") !== -1
      ? referrer
      : null;
  try {
    const cookies = nookies.get(context);
    const token = await verifyIdToken(cookies.token);
    if (token?.email) {
      return {
        redirect: {
          destination: "/dashboard",
          permanent: false,
        },
      };
    } else {
      throw new Error("not signed in");
    }
  } catch (error) {
    return {
      props: {
        referrer: redirectRef || "",
        refresh: error.code,
      },
    };
  }
}

export default Join;
