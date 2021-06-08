import React, { useEffect } from "react";
import FirebaseAuth from "../components/FirebaseAuth";
import {
  Button,
  Typography,
  Container,
  makeStyles,
} from "@material/mui-components";
import Link from "next/link";
import SEO from "@components/SEO";
import nookies from "nookies";
import { verifyIdToken } from "../utils/firebaseAdmin";
import { useRouter } from "next/router";

const useStyles = makeStyles((theme) => ({
  container: {
    textAlign: "center",
    "& > *": {
      margin: theme.spacing(1, 0),
    },
  },
  paper: {
    padding: theme.spacing(2, 0),
  },
  link: {
    color: theme.palette.primary.light,
    textDecoration: "underline",
  },
}));

const Join = ({ referrer, refresh }) => {
  const classes = useStyles();
  const router = useRouter();

  useEffect(() => {
    router.beforePopState(({ url, as, options }) => {
      console.log({ refresh });
    });
  }, [refresh]);

  return (
    <>
      <SEO
        description="Whether you have a need, provide solutions, or both, SoPlugged is for you"
        title="Join SoPlugged"
      />
      <div className="page">
        <Container maxWidth="sm" className={classes.container}>
          <Typography variant="h1">Join SoPlugged</Typography>
          <Typography variant="body1">
            Please verify your identity via one of the following sign-in
            methods:
          </Typography>
          <div className={classes.paper}>
            <FirebaseAuth referrer={referrer} />
          </div>
          <Typography variant="body2">
            We want to make sure you're real.
          </Typography>
          <Link href="/search">
            <a>
              <Button variant="outlined" color="secondary">
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
