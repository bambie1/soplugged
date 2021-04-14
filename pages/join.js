import React from "react";
import FirebaseAuth from "../components/FirebaseAuth";
import {
  Button,
  Typography,
  Container,
  makeStyles,
} from "../components/mui-components";
import Link from "next/link";
import SEO from "@/components/SEO";
import nookies from "nookies";
import { verifyIdToken } from "../utils/firebaseAdmin";

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

const Join = ({ referrer }) => {
  const classes = useStyles();
  return (
    <>
      <SEO
        description="Whether you have a need, provide solutions, or both, SoPlugged is for you"
        title="Join SoPlugged"
      />
      <div className="page" style={{ zIndex: "1", background: "white" }}>
        <Container maxWidth="sm" className={classes.container}>
          <Typography variant="h1">Join SoPlugged</Typography>
          <Typography>
            Please verify your identity via one of the following sign-in
            methods:
          </Typography>
          <div className={classes.paper}>
            <FirebaseAuth referrer={referrer} />
          </div>
          <Typography>We want to make sure you're real.</Typography>
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
  const sameRef =
    referrer?.indexOf("http://" + host) === 0 ||
    referrer?.indexOf("https://" + host) === 0
      ? referrer
      : null;
  try {
    const cookies = nookies.get(context);
    const token = await verifyIdToken(cookies.token);
    if (token?.email) {
      context.res.writeHead(302, { location: "/dashboard" });
      context.res.end();
      return {
        props: {},
      };
    } else {
      throw new Error("not signed in");
    }
  } catch (error) {
    return { props: { referrer: sameRef || "" } };
  }
}

export default Join;
