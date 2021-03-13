import { Container, Typography, Button, Grid, Paper } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
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
    [theme.breakpoints.up("md")]: {
      height: "500px",
      display: "flex",
      flexDirection: "column",
      justifyContent: "center",
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
    color: theme.palette.primary.main,
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
  const ready = false;

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
                  <Typography
                    variant="h5"
                    component="h2"
                    style={{ marginBottom: "10px" }}
                  >
                    How can you support?
                  </Typography>
                  <Typography className={classes.text}>
                    Our goal is to give black business a wider platform in
                    Canada for free. You can help us maintain this by:
                  </Typography>
                  <ul className={classes.list}>
                    <li className={classes.listItem}>
                      <Typography>Spreading the word!</Typography>
                    </li>
                    <li className={classes.listItem}>
                      <Typography>Supporting with a donation</Typography>
                    </li>
                  </ul>
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
