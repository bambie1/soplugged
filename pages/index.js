import {
  Typography,
  Button,
  Container,
  Grid,
  makeStyles,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Paper,
  Box,
} from "@/components/mui-components";
import { PowerIcon, SettingsInputSvideoIcon } from "@/components/mui-icons";
import Link from "next/link";
import HeroBanner from "@/components/HeroBanner";
import BusinessCarousel from "@/components/BusinessCarousel";
import SubscribeForm from "@/components/SubscribeForm";
import Image from "next/image";
import useSWR from "swr";
import { categoryIcons } from "../src/categoryIcons";
import { useSearch } from "../contexts/searchContext";
import { useRouter } from "next/router";
import SEO from "@/components/SEO";

const useStyles = makeStyles((theme) => ({
  media: {
    height: 140,
  },
  infoText: {
    textAlign: "Center",
  },
  gridContainer: {
    justifyContent: "center",
    maxWidth: "1100px",
    margin: "auto",
    "& > *": {
      marginTop: "8px",
      marginBottom: "8px",
    },
  },
  list: {
    flex: "1",
    display: "flex",
    flexDirection: "column",
  },
  paper: {
    height: "100%",
    display: "flex",
    flexDirection: "column",
  },
  shortPaperDiv: {
    display: "flex",
    flexDirection: "column",
    backgroundRepeat: "no-repeat",
    backgroundPosition: "center",
    "& > .MuiTypography-root": { lineHeight: "2rem" },
  },
}));

const fetcher = (url) =>
  fetch(url, {
    method: "GET",
  }).then((r) => r.json());

export default function Home() {
  const classes = useStyles();
  const { data, error } = useSWR(
    `${process.env.NEXT_PUBLIC_SERVER_BASE_URL}/businesses`,
    fetcher
  );
  function compare(a, b) {
    if (a.id < b.id) {
      return -1;
    }
    if (a.id > b.id) {
      return 1;
    }
    return 0;
  }
  let filteredData =
    data?.filter(
      (business) =>
        business?.logo_url !== "" &&
        business?.sample_images !== "" &&
        business?.business_description?.length > 30
    ) || [];
  let displayBusinesses = filteredData.sort(compare).slice(0, 7);
  const { setContextCategory } = useSearch();
  const router = useRouter();
  const handleClick = (label) => {
    setContextCategory(label);
    router.push("/search");
  };

  return (
    <>
      <SEO
        description="Online platform connecting you to black-owned businesses across Canada. If you're an entrepreneur, register your business to be featured on our platform or join our mailing list to stay plugged in."
        title="We have the Black-Owned Businesses for your needs | SoPlugged"
      />
      <main style={{ zIndex: "1", background: "white" }}>
        <HeroBanner />
        <div className="body-content">
          {filteredData.length > 0 && (
            <section>
              <Typography variant="h5" gutterBottom={true} align="center">
                Featured Businesses:
              </Typography>
              <Box my={3}>
                <BusinessCarousel businesses={displayBusinesses} />
              </Box>
            </section>
          )}
          <Box my={3}>
            <Typography variant="h5" align="center" gutterBottom={true}>
              Why SoPlugged?
            </Typography>
            <Typography align="center" gutterBottom={true}>
              Whether you have a need, provide solutions, or both, SoPlugged is
              for you
            </Typography>
            <Container
              maxWidth="md"
              style={{ marginTop: "24px", padding: "0" }}
            >
              <Grid container spacing={2}>
                <Grid item xs={12} sm={6}>
                  <Paper className={classes.paper} elevation={2}>
                    <Typography
                      variant="h6"
                      style={{ textAlign: "center", paddingTop: "8px" }}
                    >
                      Consumers
                    </Typography>
                    <List className={classes.list}>
                      <ListItem>
                        <ListItemIcon>
                          <PowerIcon />
                        </ListItemIcon>
                        <ListItemText primary="Find the perfect black-owned businesses for your needs." />
                      </ListItem>
                      <ListItem>
                        <ListItemIcon>
                          <PowerIcon />
                        </ListItemIcon>
                        <ListItemText primary="Connect with businesses, send messages and request a quote from our platform." />
                      </ListItem>
                      <ListItem>
                        <ListItemIcon>
                          <PowerIcon />
                        </ListItemIcon>
                        <ListItemText primary="Save businesses to your favorites, and come back to them later" />
                      </ListItem>
                      <ListItem>
                        <ListItemIcon>
                          <PowerIcon />
                        </ListItemIcon>
                        <ListItemText primary="Hassle-FREE" />
                      </ListItem>
                      <ListItem style={{ marginTop: "auto" }}>
                        <Link href="/search">
                          <a>
                            <Button variant="outlined" color="secondary">
                              Browse Directory
                            </Button>
                          </a>
                        </Link>
                      </ListItem>
                    </List>
                  </Paper>
                </Grid>
                <Grid item xs={12} sm={6}>
                  <Paper
                    style={{ background: "#fffaf2" }}
                    className={classes.paper}
                    elevation={2}
                  >
                    <Typography
                      variant="h6"
                      style={{ textAlign: "center", paddingTop: "8px" }}
                    >
                      Business Owners
                    </Typography>
                    <List className={classes.list}>
                      <ListItem>
                        <ListItemIcon>
                          <SettingsInputSvideoIcon />
                        </ListItemIcon>
                        <ListItemText primary="Increase your brand visibility" />
                      </ListItem>
                      <ListItem>
                        <ListItemIcon>
                          <SettingsInputSvideoIcon />
                        </ListItemIcon>
                        <ListItemText primary="Connect with fellow entrepreneurs across Canada" />
                      </ListItem>
                      <ListItem>
                        <ListItemIcon>
                          <SettingsInputSvideoIcon />
                        </ListItemIcon>
                        <ListItemText primary="Tap into a growing community of people looking to #buyblack" />
                      </ListItem>
                      <ListItem>
                        <ListItemIcon>
                          <SettingsInputSvideoIcon />
                        </ListItemIcon>
                        <ListItemText primary="It's all FREE" />
                      </ListItem>
                      <ListItem style={{ marginTop: "auto" }}>
                        <Link href="/my-business">
                          <a>
                            <Button variant="contained" color="secondary">
                              Register your Business
                            </Button>
                          </a>
                        </Link>
                      </ListItem>
                    </List>
                  </Paper>
                </Grid>
              </Grid>
            </Container>
          </Box>

          <Box
            textAlign="center"
            py={2}
            px={1}
            my={3}
            style={{ background: "#fffaf2" }}
          >
            <Typography variant="h5">We've got you covered</Typography>
            <br></br>
            <Grid container spacing={2} className={classes.gridContainer}>
              {categoryIcons.map((icon) => (
                <Grid
                  item
                  xs={6}
                  sm={4}
                  md={3}
                  key={icon.imageSrc}
                  className="categoryIcon"
                  onClick={() => handleClick(icon.categoryText)}
                >
                  <Image src={icon.imageSrc} width={40} height={40} />
                  <Typography>{icon.categoryText}</Typography>
                </Grid>
              ))}
            </Grid>
            <Link href="/search">
              <a>
                <Button variant="outlined" color="secondary">
                  ... and more
                </Button>
              </a>
            </Link>
          </Box>

          <Box mt={3} mb={5}>
            <Typography variant="h5" align="center" gutterBottom={true}>
              Learn more about our community
            </Typography>
            <Typography align="center" gutterBottom={true}>
              Did we mention that we love, and support Black-owned businesses?
            </Typography>
            <Typography align="center">Cause, we DO!!</Typography>
            <div className="learn-more">
              <div className="learn-more-image">
                <Image
                  width={400}
                  height={400}
                  src="/images/buy_black_illustration2.svg"
                />
              </div>

              <Paper className="shortPaper" elevation={2}>
                <div
                  className={classes.shortPaperDiv}
                  style={{ marginLeft: "auto" }}
                >
                  <Typography variant="h6">
                    What does #BuyBlack mean?
                  </Typography>
                  <Typography>
                    The #buyblack movement started out as a way to circulate
                    wealth within the Black community by supporting Black-owned
                    businesses. No doubt, this movement has gained a lot of
                    traction due to the tragic events of 2020 and how they
                    impacted small businesses. Our goal is to make buying black
                    easy by connecting you with the right business for your
                    needs.
                  </Typography>
                  <Link href="https://soplugged.medium.com/">
                    <a
                      style={{ marginRight: "auto", marginTop: "16px" }}
                      target="_blank"
                    >
                      <Button variant="outlined" color="secondary">
                        Read more on our blog
                      </Button>
                    </a>
                  </Link>
                </div>
              </Paper>
            </div>
          </Box>
          <SubscribeForm />
        </div>
      </main>
    </>
  );
}
