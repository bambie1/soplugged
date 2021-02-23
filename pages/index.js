import Head from "next/head";
import { Typography, Button, Container, Grid } from "@material-ui/core";
import Link from "next/link";
import HeroBanner from "../components/HeroBanner";
import CategoriesCarousel from "../components/CategoriesCarousel";
import SubscribeForm from "../components/SubscribeForm";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  media: {
    height: 140,
  },
  undraw: {
    maxWidth: "90%",
  },
  infoText: {
    textAlign: "Center",
  },
}));

export default function Home() {
  const classes = useStyles();

  return (
    <>
      <Head>
        <meta
          name="description"
          content="Online platform connecting you to black-owned businesses across Canada. If you're an entrepreneur, register your business to be featured on our platform or join our mailing list to stay plugged in."
        />
        <title>
          Find the perfect black-owned business for your needs | SoPlugged
        </title>
      </Head>
      <div>
        <HeroBanner />
        <div className="body-content">
          <br></br>
          <Typography variant="h6">Popular Categories:</Typography>
          <CategoriesCarousel />
          <br></br>
          <Link href="/search">
            <a>
              <Button
                color="secondary"
                variant="contained"
                style={{ margin: "16px auto 0px", display: "flex" }}
              >
                View All Businesses
              </Button>
            </a>
          </Link>
          <br></br>
          <br></br>
          <hr style={{ width: "70%" }} />
          <Container maxWidth="lg">
            <Grid container className="home-info">
              <Grid item xs={12} sm={6}>
                <img
                  src="/images/undraw_Web_search.png"
                  alt="Browse illustration"
                  className={classes.undraw}
                />
              </Grid>
              <Grid item xs={12} sm={5} className={classes.infoText}>
                <Typography style={{ fontSize: "1.2rem" }}>
                  Browse our directory to find and connect with the perfect
                  black-owned business for your needs
                </Typography>
                <Link href="/search">
                  <a>
                    <Button
                      variant="contained"
                      color="secondary"
                      style={{ margin: "16px 0px", fontSize: "1.1rem" }}
                    >
                      BROWSE
                    </Button>
                  </a>
                </Link>
              </Grid>
              <Grid item sm={1}></Grid>
            </Grid>
            <Grid container className="home-info second-grid">
              <Grid item sm={1}></Grid>
              <Grid item xs={12} sm={5} className={classes.infoText}>
                <Typography style={{ fontSize: "1.2rem" }}>
                  Register your business to have your services featured on our
                  platform and join a community of black entrepreneurs.
                </Typography>
                <Link href="/join">
                  <a>
                    <Button
                      variant="contained"
                      color="secondary"
                      style={{ margin: "16px 0px", fontSize: "1.1rem" }}
                    >
                      REGISTER
                    </Button>
                  </a>
                </Link>
              </Grid>
              <Grid item xs={12} sm={6}>
                <img
                  src="/images/undraw_Portfolio.png"
                  alt="undraw portfolio"
                  className={classes.undraw}
                />
              </Grid>
            </Grid>
          </Container>
          <br></br>
          <br></br>
          <SubscribeForm />
        </div>
      </div>
    </>
  );
}
