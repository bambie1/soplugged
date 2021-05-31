import React from "react";
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
import SEO from "@components/SEO";
import dynamic from "next/dynamic";
import TopCategories from "@components/TopCategories";
import Image from "next/image";
import displayShopifyCollection from "../src/shopifyStore";

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

  shopMore: {
    display: "inline-flex",
    marginBottom: "20px",
    [theme.breakpoints.up("md")]: {
      marginTop: "-20px",
    },
  },
}));

export default function Home() {
  const classes = useStyles();

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

          <Box mt={4} mb={5} textAlign="center">
            <Typography variant="h5" align="center" gutterBottom={true}>
              Check out our merch collection
            </Typography>
            <Typography variant="body1" align="center" gutterBottom={true}>
              Normalize <b>#buyingblack</b>, but make it fashionable
            </Typography>
            <hr
              style={{ width: "40%", maxWidth: "170px", marginBottom: "30px" }}
            ></hr>
            <div id="collection-component-1622397719540">
              {displayShopifyCollection(
                "collection-component-1622397719540",
                "266521968830"
              )}
            </div>
            <Link href="/merch">
              <a className={classes.shopMore}>
                <Button variant="outlined" color="secondary">
                  Shop More
                </Button>
              </a>
            </Link>
          </Box>

          <Box mb={5}>
            <Typography variant="h5" align="center" gutterBottom={true}>
              Become a Sponsor
            </Typography>
            <div className="learn-more">
              <div className="learn-more-image">
                <Image
                  width={330}
                  height={330}
                  src="/images/winners_monochromatic.svg"
                  alt="trophy winners showing support"
                />
              </div>
              <Paper className="shortPaper" elevation={2}>
                <div
                  className={classes.shortPaperDiv}
                  style={{ marginLeft: "auto" }}
                >
                  <Typography>
                    At SoPlugged, our biggest inspiration is supporting one
                    another and growing our community. Our goal is to normalize
                    buying black and we rely on amazing people like you to keep
                    our platform free and accessible to Black-owned businesses
                    across Canada.
                  </Typography>
                  <Typography variant="body2">
                    All donations go towards maintaining our platform and
                    supporting Black-owned businesses across Canada.
                  </Typography>
                  <Link href="/sponsors">
                    <a style={{ marginRight: "auto", marginTop: "16px" }}>
                      <Button variant="outlined" color="secondary">
                        Show your support
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
