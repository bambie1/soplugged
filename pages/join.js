import React, { useState } from "react";
import {
  Button,
  Paper,
  TextField,
  Typography,
  Container,
} from "@material-ui/core";
import Link from "next/link";
import Head from "next/head";
import { makeStyles } from "@material-ui/core/styles";
import { Alert } from "@material-ui/lab";
import nookies from "nookies";
import { verifyIdToken } from "../src/firebase/firebaseAdmin";
import firebaseClient from "../src/firebase/firebaseClient";
import firebase from "firebase/app";
import { useRouter } from "next/router";
import { useAuth } from "../contexts/auth";

const useStyles = makeStyles((theme) => ({
  page: {
    minHeight: "80vh",
    padding: theme.spacing(8, 1, 2),
  },
  form: {
    justifyContent: "center",
    "& .MuiFormControl-root": {
      width: "100%",
      margin: `${theme.spacing(1)}px auto`,
    },
  },
  root: {
    maxWidth: 700,
    margin: `${theme.spacing(2)}px auto`,
    display: "flex",
    flexDirection: "column",
    "& > *": {
      margin: theme.spacing(2),
    },
  },
  google: {
    border: "2px solid #4285f4",
    display: "flex",
    alignSelf: "center",
    color: "#4285f4",
    width: "calc(100% - 32px)",
    fontWeight: "bold",
    marginBottom: "0px",
  },
  signInLink: {
    color: "#4e3505",
    textDecoration: "underline",
  },
  wrongEmail: {
    textAlign: "center",
    cursor: "pointer",
    color: "#ff5722",
    margin: theme.spacing(1),
  },
}));

const Join = ({ session }) => {
  const [mail, setMail] = useState("");
  const [mailSent, setMailSent] = useState(false);
  const classes = useStyles();
  const router = useRouter();
  const { sendLink } = useAuth();

  firebaseClient();
  const handleSubmit = (e) => {
    e.preventDefault();
    sendLink(mail);
    setMailSent(true);
  };

  const handleGoogleSubmit = async () => {
    var provider = new firebase.auth.GoogleAuthProvider();
    firebase.auth().signInWithRedirect(provider);
  };
  if (session) {
    router.push("/my-business");
    return <p>loading</p>;
  } else {
    return (
      <>
        <Head>
          <meta
            name="description"
            content="Quick sign-up process to join as a business-owner"
          />
          <title>Register your business on SoPlugged</title>
        </Head>
        <div className="page">
          <Container maxWidth="sm">
            <Paper className={classes.root}>
              <form onSubmit={handleSubmit} className={classes.form}>
                <Typography variant="h5">Register my business</Typography>
                <Typography variant="body1">
                  Please enter the e-mail you'd like to use for your SoPlugged
                  account.
                </Typography>{" "}
                <br></br>
                <Typography variant="body2">
                  We'll send you a{" "}
                  <span style={{ textDecoration: "underline" }}>one-time</span>{" "}
                  verification link.
                </Typography>
                <TextField
                  name="userMail"
                  label="E-mail"
                  variant="outlined"
                  type="email"
                  disabled={mailSent}
                  helperText="P.S: Your potential customers will contact you via this e-mail"
                  required
                  onChange={(e) => setMail(e.target.value)}
                />
                <Button
                  variant="contained"
                  type="submit"
                  style={{ width: "100%" }}
                  disabled={mailSent}
                >
                  Send link
                </Button>
                {mailSent && (
                  <>
                    <Alert severity="info">
                      We've sent a sign-in link to this e-mail address.{" "}
                      <br></br>
                      If you don't get an e-mail, please double-check the e-mail
                      you've entered and check your spam folder.
                    </Alert>
                    <Typography
                      variant="body2"
                      className={classes.wrongEmail}
                      onClick={() => setMailSent(false)}
                    >
                      Wrong e-mail?
                    </Typography>
                  </>
                )}
              </form>
              <div className="hr-div">
                <span className="hr-text">OR</span>
              </div>
              <Button
                className={classes.google}
                onClick={() => {
                  handleGoogleSubmit();
                }}
              >
                <img
                  src="https://img.icons8.com/plasticine/30/000000/google-logo.png"
                  alt="google"
                />
                <span style={{ marginLeft: "16px" }}>Continue with Google</span>
              </Button>
              <Typography
                style={{ color: "grey", fontSize: "0.9rem", marginTop: "0px" }}
              >
                P.S: Your potential customers will contact you via this e-mail
              </Typography>
            </Paper>
            <div style={{ textAlign: "center", margin: "8px" }}>
              <Typography variant="body2">
                Already have your business on SoPlugged?
              </Typography>

              <Typography variant="body1">
                <Link href="/sign-in">
                  <a className={classes.signInLink}>Sign in</a>
                </Link>{" "}
                to your business page
              </Typography>

              <Link href="/">
                <a>
                  <Button variant="outlined" style={{ marginTop: "8px" }}>
                    Take me back Home
                  </Button>
                </a>
              </Link>
            </div>
          </Container>
        </div>
      </>
    );
  }
};

export async function getServerSideProps(context) {
  try {
    const cookies = nookies.get(context);
    const token = await verifyIdToken(cookies.token);
    context.res.writeHead(302, { Location: "/my-business" });
    context.res.end();
    return {
      props: { session: "Logged in" },
    };
  } catch (err) {
    return { props: {} };
  }
}

export default Join;
