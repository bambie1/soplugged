import {
  Container,
  Typography,
  Button,
  Grid,
  makeStyles,
} from "../components/mui-components";
import Link from "next/link";
import SEO from "@/components/SEO";

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
  link: {
    color: theme.palette.secondary.main,
    textDecoration: "underline",
  },
}));

const Sponsors = () => {
  const classes = useStyles();

  return (
    <>
      <SEO
        title="Become a Sponsor | SoPlugged"
        description="Our goal is to give black business a wider platform in Canada for free. Help us maintain this goal by donating."
      />
      <main className={classes.page}>
        <Typography variant="h1" className={classes.title}>
          Become a SoPlugged Sponsor
        </Typography>
        <Container maxWidth="lg" className={classes.container}>
          <>
            <Grid container spacing={2}>
              <Grid item xs={12} md={6} className={classes.textContent}>
                <Typography className={classes.text}>
                  SoPlugged is an online platform that makes #buyingblack easy!
                  Our search-friendly platform helps end-users connect to
                  Black-owned businesses across Canada.{" "}
                  <span className={classes.laptopText}>
                    When you{" "}
                    <a href="/join" className={classes.link}>
                      register
                    </a>{" "}
                    your business on our platform, you increase your brand
                    visibility and get access to a thriving community of people
                    looking to support Black-owned businesses. <br></br>At
                    SoPlugged, our biggest inspiration is supporting one another
                    and growing our community. It’s always a beautiful thing to
                    see people join the movement to support Black-owned
                    businesses. That’s our story and we hope you become a part
                    of it!
                  </span>
                  <br></br>
                  We rely on amazing people like you to keep our platform free
                  and accessible to Black-owned businesses across Canada
                </Typography>
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
            <Link href="/">
              <a
                style={{
                  display: "flex",
                  justifyContent: "center",
                  margin: "16px",
                }}
              >
                <Button variant="outlined" color="secondary">
                  Back to Directory
                </Button>
              </a>
            </Link>
          </>
        </Container>
      </main>
    </>
  );
};

export default Sponsors;
