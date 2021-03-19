import React from "react";
import { withAuthUser, AuthAction } from "next-firebase-auth";
import FirebaseAuth from "../components/FirebaseAuth";
import Head from "next/head";
import {
  Button,
  Typography,
  Container,
  makeStyles,
} from "../components/mui-components";
import Link from "next/link";
import slugify from "slugify";

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

const getBiz = async () => {
  let res = await fetch(
    `${process.env.NEXT_PUBLIC_SERVER_BASE_URL}/businesses`,
    {
      method: "GET",
    }
  );
  let businesses = await res.json();
  let slugArray = [];
  businesses.map((item) => {
    let slug = slugify(item.business_name, { lower: true });
    let obj = { name: item.business_name, slug };
    slugArray.push(obj);
  });
  console.log({ slugArray });
  return businesses;
};

const Auth = () => {
  const classes = useStyles();
  // getBiz();

  return (
    <>
      <Head>
        <meta
          name="description"
          content="Quick sign-up process to get started on SoPlugged as a business owner"
        />
        <title>Join SoPlugged</title>
      </Head>
      {/* <Header /> */}
      <div className="page" style={{ zIndex: "1", background: "white" }}>
        <Container maxWidth="sm" className={classes.container}>
          <Typography variant="h1">Join SoPlugged</Typography>
          <Typography>
            Please verify your identity via one of the following sign-in
            methods:
          </Typography>
          <div className={classes.paper}>
            <FirebaseAuth />
          </div>
          <br></br>
          <br></br>
          <Typography>
            Already a SoPlugged member?
            <a href="/sign-in" className={classes.link}>
              {" "}
              Sign in here{" "}
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
})(Auth);
