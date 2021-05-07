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
  WhiteOutlinedButton,
} from "@material/mui-components";
import { PowerIcon, SettingsInputSvideoIcon } from "@material/mui-icons";
import Link from "next/link";
import HeroBanner from "@components/HeroBanner";
import Image from "next/image";
import { categoryIcons } from "../src/categoryIcons";
import { useSearch } from "@contexts/searchContext";
import { useRouter } from "next/router";
import SEO from "@components/SEO";
import dynamic from "next/dynamic";
import TopCategories from "@components/TopCategories";

const DynamicSubscribe = dynamic(() => import("@components/SubscribeForm"));

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
    paddingTop: "16px",
  },
  consumerPaper: {
    color: theme.palette.secondary.main,
    "& .MuiListItemIcon-root": {
      color: theme.palette.secondary.main,
    },
  },
  ownerPaper: {
    background: theme.palette.tertiary.main,
    color: "white",
    "& .MuiListItemIcon-root": {
      color: "white",
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

export default function Home() {
  const classes = useStyles();

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
          <TopCategories />
          <Box my={3}>
            <Typography variant="h5" align="center" gutterBottom={true}>
              Why SoPlugged?
            </Typography>
            <Typography variant="body1" align="center" gutterBottom={true}>
              Whether you have a need, provide solutions, or both, SoPlugged is
              for you
            </Typography>
            <Container
              maxWidth="md"
              style={{ marginTop: "24px", padding: "0" }}
            >
              <Grid container spacing={2}>
                <Grid item xs={12} sm={6}>
                  <Paper
                    className={`${classes.paper} ${classes.consumerPaper}`}
                    elevation={2}
                  >
                    <Typography variant="h6" align="center">
                      Consumers
                    </Typography>
                    <List className={classes.list}>
                      <ListItem>
                        <ListItemIcon>
                          <PowerIcon />
                        </ListItemIcon>
                        <ListItemText primary="Buy Black easily" />
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
                      <ListItem style={{ marginBottom: "16px" }}>
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
                    className={`${classes.paper} ${classes.ownerPaper}`}
                    elevation={2}
                  >
                    <Typography variant="h6" align="center">
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
                      <ListItem style={{ marginBottom: "16px" }}>
                        <ListItemIcon>
                          <SettingsInputSvideoIcon />
                        </ListItemIcon>
                        <ListItemText primary="It's all FREE" />
                      </ListItem>
                      <ListItem style={{ marginTop: "auto" }}>
                        <Link href="/my-business">
                          <a>
                            {/* <Button variant="outlined" color="inherit">
                              Register your Business
                            </Button> */}
                            <WhiteOutlinedButton>
                              Register your Business
                            </WhiteOutlinedButton>
                          </a>
                        </Link>
                      </ListItem>
                    </List>
                  </Paper>
                </Grid>
              </Grid>
            </Container>
          </Box>

          <Box mt={4} mb={5}>
            <Typography variant="h5" align="center" gutterBottom={true}>
              Learn more about our community
            </Typography>
            <Typography variant="body1" align="center" gutterBottom={true}>
              Did we mention that we love, and support Black-owned businesses?
            </Typography>
            <Typography variant="body1" align="center">
              Cause, we DO!!
            </Typography>
            <div className="learn-more">
              <div className="learn-more-image">
                <Image
                  width={400}
                  height={400}
                  src="/images/buy_black_illustration2.svg"
                  alt="black lady tracking finances"
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
                      rel="noopener"
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
        </div>
        <DynamicSubscribe />
      </main>
    </>
  );
}
