import {
  Container,
  Typography,
  Button,
  Grid,
  makeStyles,
} from "@material/mui-components";
import Link from "next/link";
import SEO from "@components/SEO";
import { NavigateBeforeIcon } from "@material/mui-icons";

const useStyles = makeStyles((theme) => ({
  page: {
    zIndex: "1",
    background: "white",
    paddingTop: theme.spacing(2),
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
        <Typography variant="h1" align="center">
          sponsors
        </Typography>
        <Container maxWidth="lg" className={classes.container}>
          <>
            <Grid container spacing={2}>
              <Grid item xs={12} md={6} className={classes.textContent}>
                <Typography className={classes.text}>
                  At SoPlugged, our biggest inspiration is supporting one
                  another and growing our community. Our goal is to normalize
                  buying black and we rely on amazing people like you to keep
                  our platform free and accessible to Black-owned businesses
                  across Canada.
                </Typography>
                <hr style={{ width: "100%", maxWidth: "150px" }}></hr>
                <Typography
                  // style={{ width: "80%", margin: "0 auto" }}
                  className={classes.text}
                >
                  <em>
                    All donations go towards maintaining our platform and
                    supporting Black-owned businesses across Canada.
                  </em>
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
            <Link href="/search">
              <a
                style={{
                  alignSelf: "center",
                  margin: "16px",
                }}
              >
                <Button
                  variant="outlined"
                  color="secondary"
                  startIcon={<NavigateBeforeIcon />}
                >
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
