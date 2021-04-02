import React from "react";
import { withAuthUser, AuthAction } from "next-firebase-auth";
import FirebaseAuth from "../components/FirebaseAuth";
import {
  Button,
  Typography,
  Container,
  makeStyles,
} from "../components/mui-components";
import Link from "next/link";
import SEO from "@/components/SEO";

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

const SignIn = () => {
  const classes = useStyles();
  return (
    <>
      <SEO
        title="Sign In to SoPlugged"
        description="Sign in to to SoPlugged to add your business or save your favorite businesses"
      />
      <div className="page" style={{ zIndex: "1", background: "white" }}>
        <Container maxWidth="sm" className={classes.container}>
          <Typography variant="h1">Sign-in to SoPlugged</Typography>
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
  whenUnauthedBeforeInit: AuthAction.RETURN_NULL,
  whenUnauthedAfterInit: AuthAction.RENDER,
})(SignIn);
