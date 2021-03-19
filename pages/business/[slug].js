import React from "react";
import {
  withAuthUser,
  withAuthUserTokenSSR,
  AuthAction,
} from "next-firebase-auth";
import {
  Button,
  Container,
  Typography,
  Paper,
  makeStyles,
} from "../../components/mui-components";
import Link from "next/link";
import Head from "next/head";
import useSWR from "swr";
import BusinessCardSkeleton from "../../components/skeletons/BusinessCardSkeleton";
import BusinessPage from "../../components/BusinessPage";

const useStyles = makeStyles((theme) => ({
  page: {
    textAlign: "center",
    padding: "60px 8px",
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
    margin: "40px auto",
    justifyContent: "center",
    "& > *": {
      margin: "8px 16px",
    },
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
          content={`${data?.business_description || "SoPlugged business page"}`}
        />
        <title>{`${data?.business_name || ""} | SoPlugged`}</title>
      </Head>
      <Container className={classes.page} maxWidth="lg">
        <br></br>
        {data ? (
          <BusinessPage dbObject={data} />
        ) : (
          <Paper style={{ padding: "16px", maxWidth: "400px", margin: "auto" }}>
            <Typography>
              We don't recognize this business url. Please verify you've entered
              it correctly
            </Typography>
            <br></br>
            <br></br>
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
