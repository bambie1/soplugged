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
  section: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    marginTop: "16px",
    marginBottom: "16px",
    "& > *": {
      marginTop: "4px",
      marginBottom: "4px",
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
  shortPaper: {
    maxWidth: "700px",
    padding: "16px",
    marginTop: "8px",
    marginBottom: "8px",
    "&:last-child": {
      background: theme.palette.primary.main,
      marginLeft: "auto",
      color: "white",
      "& > div": {
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center",
      },
    },
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
              <BusinessCarousel businesses={data} />
            </section>
          )}
          <section className={classes.section}>
            <Typography variant="h5">Why SoPlugged?</Typography>
            <Typography>
              Whether you have a need, provide solutions, or both, SoPlugged is
              for you
            </Typography>
            <Container maxWidth="md" style={{ marginTop: "16px" }}>
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
          </section>
          <br></br>
          <br></br>
          <section
            style={{
              textAlign: "center",
              background: "#fffaf2",
              padding: "16px 8px",
            }}
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
          </section>
          <br></br>
          <br></br>
          <section className={classes.section}>
            <Typography variant="h5" align="center">
              Learn more about our community
            </Typography>
            <Typography align="center">
              Did we mention that we love, and support Black-owned businesses?
            </Typography>
            <Typography align="center">Cause, we DO!!</Typography>
            <Container maxWidth="md" style={{ padding: "0" }}>
              <Paper className={classes.shortPaper} elevation={2}>
                <div
                  className={classes.shortPaperDiv}
                  style={{ marginLeft: "auto" }}
                >
                  <Typography variant="h6">
                    What does #BuyBlack mean?
                  </Typography>
                  <Typography>
                    Buy Black is a movement that started out as a way to
                    circulate wealth within the Black community by supporting
                    Black-owned businesses. No doubt, this movement gained a lot
                    of traction this year because of the tragic events of 2020
                    and how they impacted members of this community, especially
                    small business owners.
                  </Typography>
                  <Link href="/blog">
                    <a style={{ marginRight: "auto", marginTop: "16px" }}>
                      <Button variant="outlined" color="secondary">
                        Read more on our blog
                      </Button>
                    </a>
                  </Link>
                </div>
              </Paper>
              <Paper className={classes.shortPaper} elevation={2}>
                <div className={classes.shortPaperDiv}>
                  <Typography variant="h6">Where we come in</Typography>
                  <Typography>
                    If you're a #BuyBlack enthusiast like we are, you might
                    agree that finding the right business for your needs might
                    be quite an ordeal. Endlessly scrolling through Instagram
                    pages just to find an event planner is less than ideal.{" "}
                    <br /> We provide an easy-to-use platform that eliminates
                    the head-ache, and improves brand visibility for business
                    owners.
                  </Typography>
                  <Link href="/join">
                    <a style={{ marginRight: "auto", marginTop: "16px" }}>
                      <Button variant="contained" color="secondary">
                        Join SoPlugged
                      </Button>
                    </a>
                  </Link>
                </div>
              </Paper>
            </Container>
          </section>
          <br></br>
          <br></br>
          {/* </Container> */}
          <br></br>
          <br></br>
          <SubscribeForm />
        </div>
      </main>
    </>
  );
}
