import React from "react";
import { withAuthUser, AuthAction } from "next-firebase-auth";
import FirebaseAuth from "../components/FirebaseAuth";
import Head from "next/head";
import { makeStyles } from "@material-ui/core/styles";
import {
  Button,
  Paper,
  TextField,
  Typography,
  Container,
} from "@material-ui/core";

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
          content="Quick sign-up process to get started on SoPlugged as a business owner"
        />
        <title>Join SoPlugged</title>
      </Head>
      <div className="page">
        <Container maxWidth="sm" className={classes.container}>
          <Typography variant="h1">Sign in</Typography>
          <Typography>
            {" "}
            To get started, please sign in with your preferred sign-in method
          </Typography>
          <Paper className={classes.paper}>
            <FirebaseAuth />
          </Paper>
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
