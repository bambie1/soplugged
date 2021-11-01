import { Container, Button, Grid, makeStyles } from "@material/mui-components";
import Link from "next/link";
import { SEO } from "@components/index";
import { NavigateBeforeIcon } from "@material/mui-icons";

const useStyles = makeStyles((theme) => ({
  page: {
    paddingTop: theme.spacing(2),
    textAlign: "center",
  },
  container: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    minHeight: "85vh",
    marginTop: "2rem",
  },
  textContent: {
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
        <h1 className="center">sponsors</h1>
        <Container maxWidth="lg" className={classes.container}>
          <>
            <Grid container spacing={2}>
              <Grid item xs={12} md={6} className={classes.textContent}>
                <p>
                  At SoPlugged, our biggest inspiration is supporting one
                  another and growing our community. Our goal is to normalize
                  buying black and we rely on amazing people like you to keep
                  our platform free and accessible to Black-owned businesses
                  across Canada.
                </p>
                <hr style={{ width: "100%", maxWidth: "150px" }}></hr>
                <p>
                  <em>
                    All donations go towards maintaining our platform and
                    supporting Black-owned businesses across Canada.
                  </em>
                </p>
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
            <Link href="/search" passHref>
              <Button
                variant="outlined"
                color="secondary"
                startIcon={<NavigateBeforeIcon />}
              >
                Back to Directory
              </Button>
            </Link>
          </>
        </Container>
      </main>
    </>
  );
};

export default Sponsors;
