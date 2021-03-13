import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import BusinessCard from "../../components/BusinessCard";
import {
  withAuthUser,
  withAuthUserTokenSSR,
  AuthAction,
} from "next-firebase-auth";
import { Button, Container } from "@material-ui/core";
import EditIcon from "@material-ui/icons/Edit";
import Link from "next/link";
import Head from "next/head";
import useSWR from "swr";
import BusinessCardSkeleton from "../../components/skeletons/BusinessCardSkeleton";
// import ErrorBoundary from "../components/ErrorBoundary";

const useStyles = makeStyles((theme) => ({
  page: {
    textAlign: "center",
    padding: "80px 8px 0px",
    minHeight: "80vh",
    zIndex: "1",
    background: "white",
  },
  button: {
    margin: theme.spacing(1),
  },
  buttonDiv: {
    display: "flex",
    flexWrap: "wrap",
    maxWidth: "400px",
    margin: "16px auto",
    justifyContent: "space-between",
  },
  buttonLink: {
    margin: "8px auto 0px",
  },
}));

const fetcher = (url, token) =>
  fetch(url, {
    method: "GET",
    headers: {
      "Firebase-Token": token,
    },
  }).then((r) => r.json());

const BusinessPreview = ({ token }) => {
  const classes = useStyles();
  const { data, error } = useSWR(
    [`${process.env.NEXT_PUBLIC_SERVER_BASE_URL}/business`, token],
    fetcher
  );
  return (
    <>
      <Head>
        <meta
          name="description"
          content="Online platform connecting you to black-owned businesses across Canada. If you're an entrepreneur, register your business to be featured on our platform or join our mailing list to stay plugged in."
        />
        <title>Preview Business | SoPlugged</title>
      </Head>
      <Container className={classes.page} maxWidth="md">
        <Typography variant="h6">
          Your SoPlugged business has been updated
        </Typography>
        <br></br>
        <Typography variant="body2">
          Here's a snapshot of your business card:
        </Typography>
        <Link href="/my-business">
          <a>
            <Button
              variant="contained"
              color="default"
              className={classes.button}
              startIcon={<EditIcon />}
            >
              Edit
            </Button>
          </a>
        </Link>
        {/* <ErrorBoundary> */}
        {data ? <BusinessCard dbObject={data} /> : <BusinessCardSkeleton />}

        {/* </ErrorBoundary> */}

        <div className={classes.buttonDiv}>
          <Link
            href="/"
            className={classes.buttonLink}
            className={classes.buttonLink}
          >
            <a>
              <Button variant="outlined">Take me back Home</Button>
            </a>
          </Link>
          <Link
            href="/search"
            className={classes.buttonLink}
            className={classes.buttonLink}
          >
            <a>
              <Button variant="outlined">Visit Directory</Button>
            </a>
          </Link>
        </div>
      </Container>
    </>
  );
};

export const getServerSideProps = withAuthUserTokenSSR({
  whenUnauthed: AuthAction.REDIRECT_TO_LOGIN,
})(async ({ AuthUser, req }) => {
  const token = await AuthUser.getIdToken();
  return {
    props: {
      token,
    },
  };
});

export default withAuthUser({
  whenUnauthedAfterInit: AuthAction.REDIRECT_TO_LOGIN,
})(BusinessPreview);
