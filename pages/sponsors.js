import {
  Container,
  Typography,
  Button,
  Grid,
  Paper,
  makeStyles,
} from "../components/mui-components";
import Head from "next/head";
import Link from "next/link";
import SubscribeForm from "../components/SubscribeForm";

const useStyles = makeStyles((theme) => ({
  page: {
    paddingTop: "70px",
    zIndex: "1",
    background: "white",
  },
  container: {
    display: "flex",
    flexDirection: "column",
    minHeight: "85vh",
  },
  title: {
    margin: "32px 0px",
    fontSize: "2rem",
    textAlign: "center",
  },
  text: {
    lineHeight: "2",
  },
  textContent: {
    textAlign: "center",
    maxWidth: "700px",
    marginLeft: "auto",
    marginRight: "auto",
    [theme.breakpoints.up("md")]: {
      height: "500px",
      display: "flex",
      flexDirection: "column",
      justifyContent: "center",
    },
  },
  laptopText: {
    display: "none",
    [theme.breakpoints.up("md")]: {
      display: "inline",
    },
  },
  list: {
    display: "flex",

    flexDirection: "column",
    alignItems: "center",
    padding: "0",
  },
  listItem: {},
  link: {
    color: theme.palette.secondary.main,
    textDecoration: "underline",
  },
  button: {
    margin: "16px auto",
  },
  comingSoon: {
    padding: "64px 8px",
    textAlign: "center",
    backgroundColor: theme.palette.secondary.light,
  },
}));

const OurStory = () => {
  const classes = useStyles();
  const ready = true;

  return (
    <>
      <Head>
        <title> Become a Sponsor | SoPlugged</title>
        <meta
          name="description"
          content="Our goal is to give black business a wider platform in Canada for free. Help us maintain this goal by donating."
        />
      </Head>
      <main className={classes.page}>
        <Typography variant="h1" className={classes.title}>
          Become a SoPlugged Sponsor
        </Typography>
        <Container maxWidth="lg" className={classes.container}>
          {ready ? (
            <>
              <Grid container spacing={2}>
                <Grid item xs={12} md={6} className={classes.textContent}>
                  <Typography className={classes.text}>
                    SoPlugged is an online platform that makes #buyingblack
                    easy! Our search-friendly platform helps end-users connect
                    to Black-owned businesses across Canada.{" "}
                    <span className={classes.laptopText}>
                      When you{" "}
                      <a href="/join" className={classes.link}>
                        register
                      </a>{" "}
                      your business on our platform, you increase your brand
                      visibility and get access to a thriving community of
                      people looking to support Black-owned businesses.{" "}
                      <br></br>At SoPlugged, our biggest inspiration is
                      supporting one another and growing our community. It’s
                      always a beautiful thing to see people join the movement
                      to support Black-owned businesses. That’s our story and we
                      hope you become a part of it!
                    </span>
                    <br></br>
                    We rely on amazing people like you to keep our platform free
                    and accessible to Black-owned businesses across Canada
                  </Typography>
                  <Link href="/">
                    <a
                      style={{
                        display: "flex",
                        justifyContent: "center",
                        marginTop: "16px",
                      }}
                    >
                      <Button variant="outlined" color="secondary">
                        Back to Directory
                      </Button>
                    </a>
                  </Link>
                </Grid>
                <Grid item xs={12} md={6}>
                  <iframe
                    src="https://kweeve.page/soplugged/embed"
                    style={{ border: "none" }}
                    width="100%"
                    height="700px"
                    allow="payment"
                  ></iframe>
                </Grid>
              </Grid>
            </>
          ) : (
            <>
              <Paper className={classes.comingSoon}>
                <Typography variant="h5" component="h2">
                  COMING SOON ...
                </Typography>
                <Typography>
                  You'll be able to support our journey in providing a free
                  platform for black businesses to thrive
                </Typography>
              </Paper>
              <Link href="/">
                <a
                  style={{
                    display: "flex",
                    justifyContent: "center",
                    marginTop: "16px",
                  }}
                >
                  <Button variant="contained" color="primary">
                    Back Home
                  </Button>
                </a>
              </Link>
            </>
          )}
        </Container>
      </main>
    </>
  );
};

export default OurStory;
