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
} from "@/components/mui-components";
import { ArrowRightIcon, EditIcon } from "@/components/mui-icons";
import Link from "next/link";
import Head from "next/head";
import BusinessCardSkeleton from "@/components/skeletons/BusinessCardSkeleton";
import { useBusiness } from "@/hooks/useBusiness";

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
    margin: "40px auto",
    justifyContent: "space-between",
  },
  buttonLink: {
    margin: "8px auto 0px",
  },
}));

const BusinessPreview = ({ token, refPage }) => {
  const classes = useStyles();
  const { business, isLoading, isError } = useBusiness(token);

  if (isLoading) {
    return (
      <Container className={classes.page} maxWidth="md">
        <BusinessCardSkeleton />
      </Container>
    );
  }
  if (refPage === "my-business") alert("New user");
  return (
    <>
      <Head>
        <meta
          name="description"
          content="Online platform connecting you to black-owned businesses across Canada. If you're an entrepreneur, register your business to be featured on our platform or join our mailing list to stay plugged in."
        />
        <title>Thanks for registering your business | SoPlugged</title>
      </Head>
      <Container className={classes.page} maxWidth="md">
        {business ? (
          <>
            <Typography variant="h6">
              Thanks for registering your business on SoPlugged!
            </Typography>
            <br></br>
            <Typography>
              We'll send a confirmation e-mail to you as well.
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
              View your business page here
            </Typography>
            <br></br>
            <Link href={`/business/${business[0]?.slug}`}>
              <a>
                <Button
                  variant="contained"
                  color="secondary"
                  endIcon={<ArrowRightIcon />}
                >
                  Business Page
                </Button>
              </a>
            </Link>
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
          <Link href="/my-business" className={classes.buttonLink}>
            <a>
              <Button
                variant="outlined"
                color="secondary"
                startIcon={<EditIcon />}
              >
                Edit Business
              </Button>
            </a>
          </Link>
          <Link href="/search" className={classes.buttonLink}>
            <a>
              <Button variant="outlined" color="secondary">
                Visit Directory
              </Button>
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
  const refUrl = req.headers.referer;
  const refPage = refUrl ? refUrl.substr(refUrl.lastIndexOf("/") + 1) : "";

  return {
    props: {
      token,
      refPage,
    },
  };
});

export default withAuthUser({
  whenUnauthedAfterInit: AuthAction.REDIRECT_TO_LOGIN,
})(BusinessPreview);
