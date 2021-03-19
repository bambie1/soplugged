import {
  Container,
  Typography,
  Button,
  makeStyles,
} from "../components/mui-components";
import Head from "next/head";
import Link from "next/link";
import SubscribeForm from "../components/SubscribeForm";

const useStyles = makeStyles((theme) => ({
  page: {
    paddingTop: "60px",
    zIndex: "1",
    background: "white",
  },
  container: {
    display: "flex",
    flexDirection: "column",
    minHeight: "100vh",
    textAlign: "center",
  },
  title: {
    textAlign: "center",
    margin: "32px 0px",
  },
  text: {
    lineHeight: "2",
  },
  content: {
    marginBottom: "auto",
    marginTop: "auto",
  },
  link: {
    color: theme.palette.primary.main,
    textDecoration: "underline",
  },
  button: {
    margin: "16px auto",
  },
}));

const OurStory = () => {
  const classes = useStyles();

  return (
    <>
      <Head>
        <title> Our Story | SoPlugged</title>
        <meta
          name="description"
          content="Online platform connecting you to black-owned businesses across Canada. If you're an entrepreneur, register your business to be featured on our platform or join our mailing list to stay plugged in."
        />
      </Head>
      <main className={classes.page}>
        <Container maxWidth="lg" className={classes.container}>
          <Container className={classes.content} maxWidth="md">
            <Typography variant="h1" className={classes.title}>
              Our Story ...
            </Typography>
            <Typography className={classes.text}>
              SoPlugged is an online platform that makes #buyingblack easy! Our
              search-friendly platform helps end-users connect to Black-owned
              businesses across Canada. When you{" "}
              <a href="/join" className={classes.link}>
                register
              </a>{" "}
              your business on our platform, you increase your brand visibility
              and get access to a thriving community of people looking to
              support Black-owned businesses.<br></br> At SoPlugged, our biggest
              inspiration is supporting one another and growing our community.
              It’s always a beautiful thing to see people join the movement to
              support Black-owned businesses.<br></br> That’s our story and we
              hope you become a part of it!
            </Typography>
            <Link href="/search">
              <a>
                <Button
                  color="secondary"
                  variant="outlined"
                  className={classes.button}
                >
                  Visit our directory
                </Button>
              </a>
            </Link>
          </Container>
          <SubscribeForm />
        </Container>
      </main>
    </>
  );
};

export default OurStory;
