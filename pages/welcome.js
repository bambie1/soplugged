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
import SEO from "@/components/SEO";
import Router from "next/router";

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

const BusinessPreview = ({ business, refPage }) => {
  const classes = useStyles();

  React.useEffect(() => {
    if (refPage !== "my-business" && business)
      Router.push(`/business/${business.slug}`);
  }, []);

  return (
    <>
      <SEO
        title={
          business
            ? "Thanks for regsitering your business!"
            : "No business found"
        }
        description="Thanks for registering your business on SoPlugged. You can edit your info anytime, and view your dashboard for updates."
      />
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
})(async ({ AuthUser, req, res }) => {
  const token = await AuthUser.getIdToken();
  const refUrl = req.headers.referer;
  const refPage = refUrl ? refUrl.substr(refUrl.lastIndexOf("/") + 1) : "";
  const fetchUrl = `${process.env.NEXT_PUBLIC_SERVER_BASE_URL}/business`;
  try {
    const res = await fetch(fetchUrl, {
      method: "GET",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
        "Firebase-Token": token,
      },
    });
    if (!res.ok) throw new Error("HTTP status " + res.status);
    const business = await res.json();
    if (!business[0]) throw new Error("HTTP status " + res.status);

    return {
      props: {
        business: business[0],
        refPage,
      },
    };
  } catch (error) {
    return { props: {} };
  }
});

export default withAuthUser({
  whenUnauthedAfterInit: AuthAction.REDIRECT_TO_LOGIN,
})(BusinessPreview);
