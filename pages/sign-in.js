import React from "react";
import { withAuthUser, AuthAction } from "next-firebase-auth";
import FirebaseAuth from "../components/FirebaseAuth";
import Head from "next/head";
import { makeStyles } from "@material-ui/core/styles";
import { Button, Typography, Container } from "@material-ui/core";
import Link from "next/link";

const styles = {
  container: {
    width: "100vw",
    height: "100vh",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
};

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

const MyLoader = () => (
  <div style={styles.container}>
    <h3>Loading...</h3>
  </div>
);

const Auth = () => {
  const classes = useStyles();
  return (
    <>
      <Head>
        <meta
          name="description"
          content="Quick sign-in process to access SoPlugged account as a business owner"
        />
        <title>Sign in to SoPlugged</title>
      </Head>
      <div className="page" style={{ zIndex: "1", background: "white" }}>
        <Container maxWidth="sm" className={classes.container}>
          <Typography variant="h1">SoPlugged Sign-in</Typography>
          <Typography>
            Please sign into your account using the mathod used to register:
          </Typography>
          <div className={classes.paper}>
            <FirebaseAuth />
          </div>
          <br></br>
          <br></br>
          <Typography>
            First time on SoPlugged, or have no account?
            <a href="/join" className={classes.link}>
              {" "}
              Set up one{" "}
            </a>
            .
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

export default withAuthUser({
  whenAuthed: AuthAction.REDIRECT_TO_APP,
  whenUnauthedBeforeInit: AuthAction.SHOW_LOADER,
  whenUnauthedAfterInit: AuthAction.RENDER,
  LoaderComponent: MyLoader,
})(Auth);
