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

const Join = ({ register }) => {
  const [mail, setMail] = useState("");
  const [mailSent, setMailSent] = useState(false);
  const classes = useStyles();

  const handleSubmit = (e) => {
    e.preventDefault();
    // sendLink(mail);
    setMailSent(true);
  };

  const handleGoogleSubmit = () => {
    // auth.signInWithRedirect(provider);
    // auth
    //   .getRedirectResult()
    //   .then((result) => {
    //     var user = result.user;
    //     setCurrentUser(user);
    //   })
    //   .catch((error) => {
    //     var errorCode = error.code;
    //     var errorMessage = error.message;
    //     console.log("error code/message: ", errorCode, errorMessage);
    //   });
  };

  return (
    <>
      <Head>
        <meta
          name="description"
          content="Quick sign-up process to join as a business-owner"
        />
        <title>Sign In to SoPlugged</title>
      </Head>
      <div className="page">
        <Container maxWidth="sm">
          <Paper className={classes.root}>
            <form onSubmit={handleSubmit} className={classes.form}>
              <Typography variant="h5">
                {register ? "Register my business" : "Sign In"}
              </Typography>
              <Typography variant="body1">
                Please enter the e-mail{" "}
                {register ? "you'd like to use for" : "associated with"} your
                SoPlugged account.
              </Typography>{" "}
              <br></br>
              <Typography variant="body2">
                We'll send you a{" "}
                <span style={{ textDecoration: "underline" }}>one-time</span>{" "}
                {register ? "verification" : "sign-in"} link.
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
              {/* {mailSent && (
                <>
                  <Alert severity="info">
                    We've sent a sign-in link to this e-mail address. <br></br>
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
              )} */}
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
              {register
                ? "Already have your business on SoPlugged?"
                : "First time on SoPlugged?"}
            </Typography>

            {/* {register ? (
              <Typography variant="body1">
                <Link to="/sign-in" className={classes.signInLink}>
                  Sign in
                </Link>{" "}
                to your business page
              </Typography>
            ) : (
              <Typography variant="body1">
                <Link to="/join" className={classes.signInLink}>
                  Set up
                </Link>{" "}
                your business page
              </Typography>
            )} */}
            <Link href="/">
              <Button variant="outlined" style={{ marginTop: "8px" }}>
                Take me back Home
              </Button>
            </Link>
          </div>
        </Container>
      </div>
    </>
  );
};

export default Join;
