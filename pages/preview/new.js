import React from "react";
import BusinessCard from "@/components/BusinessCard";
import {
  Button,
  Container,
  Typography,
  Paper,
  makeStyles,
} from "@/components/mui-components";
import { EditIcon } from "@/components/mui-icons";
import Link from "next/link";
import Head from "next/head";
import {
  withAuthUser,
  withAuthUserTokenSSR,
  AuthAction,
} from "next-firebase-auth";
import useSWR from "swr";
import BusinessCardSkeleton from "@/components/skeletons/BusinessCardSkeleton";

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
  if (data === undefined) {
    return (
      <Container className={classes.page} maxWidth="md">
        <BusinessCardSkeleton />
      </Container>
    );
  }
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
        {data ? (
          <>
            <Typography variant="h6">
              Thanks for registering your business on SoPlugged!
            </Typography>
            <br></br>
            <Typography>
              We've sent a confirmation e-mail to you as well.
            </Typography>
            <Typography
              variant="body2"
              style={{ fontSize: "0.8rem" }}
              color="textSecondary"
            >
              Didn't get one? Be sure to check your spam/junk folder
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
            <BusinessCard dbObject={data} />
          </>
        ) : (
          <Paper style={{ padding: "16px", maxWidth: "400px", margin: "auto" }}>
            <Typography variant="h6">SoPlugged Business Preview</Typography>
            <br></br>
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
            <br></br>
            <Typography>
              Doesn't look like you have registered your business yet
            </Typography>
            <br></br>
            <br></br>
            <Typography variant="body2">
              Hit the 'Edit' button to add your business
            </Typography>
          </Paper>
        )}

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