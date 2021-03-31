import React from "react";
import {
  Grid,
  Paper,
  List,
  ListItemIcon,
  ListItemText,
  ListItem,
  AccordionDetails,
  AccordionSummary,
  Accordion,
  Typography,
  Button,
  makeStyles,
} from "./mui-components";
import {
  EditIcon,
  CameraAltOutlinedIcon,
  ExpandMoreIcon,
  TextFormatOutlinedIcon,
  FavoriteIcon,
  FavoriteBorderIcon,
  MailOutlineIcon,
} from "./mui-icons";
import Link from "next/link";

import Image from "next/image";
import { greetFunction } from "src/greeting";
import BusinessCard from "./BusinessCard";

const useStyles = makeStyles((theme) => ({
  activity: {
    textAlign: "center",
    padding: "16px",
    cursor: "default",
  },
  activityDiv: {
    [theme.breakpoints.up("sm")]: {
      display: "flex",
      width: "50%",
      flexDirection: "column",
      "& > div": {
        display: "flex",
      },
    },
  },
  businessDiv: {
    display: "flex",
    justifyContent: "center",
    flexDirection: "column",
    marginBottom: "8px",
    height: "200px",
  },
  grid: {
    overflowY: "auto",
    padding: "8px",
    display: "flex",
    flexDirection: "column",
    [theme.breakpoints.up("sm")]: {
      flexDirection: "row",
      flexWrap: "wrap",
    },
  },
  accordion: { padding: "0px" },
  noBusiness: {
    padding: "16px",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    textAlign: "center",
    "& > *": {
      margin: "8px 0px",
    },
  },
}));

const Dashboard = ({ data }) => {
  const classes = useStyles();
  const hasLogo = data?.logo_url !== "";
  const hasGoodDescription = data?.business_description.length > 150;
  const hasThreeImages = data?.sample_images.split(",").length === 3;
  const hasIG = data?.ig_handle !== "";
  let suggestionsCount = [
    hasLogo,
    hasGoodDescription,
    hasThreeImages,
    hasIG,
  ].filter(Boolean).length;

  return (
    <>
      <Typography variant="h1" gutterBottom={true} align="center">
        Home
      </Typography>
      {data ? (
        <>
          <Typography variant="h5" gutterBottom={true} align="center">
            {greetFunction()}
          </Typography>
          <Typography gutterBottom={true} align="center">
            Here's some important stuff we've outlined for you
          </Typography>
          <div className={classes.grid}>
            <Grid container spacing={2}>
              <Grid item xs={12} sm={6}>
                <Typography variant="body2" gutterBottom={true}>
                  YOUR BUSINESS:
                </Typography>
                <div className={classes.businessDiv}>
                  <BusinessCard dbObject={data} mini={true} />
                </div>
                <Link href="/my-business" className={classes.buttonLink}>
                  <a>
                    <Button
                      variant="outlined"
                      color="secondary"
                      startIcon={<EditIcon />}
                    >
                      Edit Business
                    </Button>
                  </a>
                </Link>
              </Grid>
              <Grid item xs={12} sm={6}>
                <Typography variant="body2" gutterBottom={true}>
                  ACTIVITY:
                </Typography>
                <Grid container spacing={2}>
                  <Grid item xs={6}>
                    <Paper className={classes.activity}>
                      <Typography>Favorites</Typography>
                      <Typography variant="h1" component="span">
                        {data.number_of_likes}
                      </Typography>
                      <FavoriteBorderIcon />
                    </Paper>
                  </Grid>
                  <Grid item xs={6}>
                    <Paper className={classes.activity}>
                      <Typography>Total Messages</Typography>
                      <Typography variant="h1" component="span">
                        1
                      </Typography>
                      <MailOutlineIcon />
                    </Paper>
                  </Grid>
                </Grid>
              </Grid>
              {!(hasLogo && hasGoodDescription && hasThreeImages && hasIG) && (
                <Grid item xs={12} sm={6} id="suggestions">
                  <Typography variant="body2" gutterBottom={true}>
                    SUGGESTIONS FOR YOUR PAGE ({4 - suggestionsCount}):
                  </Typography>
                  <Paper elevation={2}>
                    <Accordion className={classes.accordion}>
                      <AccordionSummary
                        expandIcon={<ExpandMoreIcon />}
                        aria-controls="panel1a-content"
                        id="panel1a-header"
                      >
                        <Typography className={classes.heading}>
                          View Suggestions
                        </Typography>
                      </AccordionSummary>
                      <AccordionDetails>
                        <List aria-label="business page suggestions">
                          {!hasLogo && (
                            <ListItem>
                              <ListItemIcon>
                                <CameraAltOutlinedIcon />
                              </ListItemIcon>
                              <ListItemText
                                primary="Add a logo"
                                secondary={
                                  "Improves the authenticity of your brand"
                                }
                              />
                            </ListItem>
                          )}

                          {!hasThreeImages && (
                            <ListItem>
                              <ListItemIcon>
                                <CameraAltOutlinedIcon />
                              </ListItemIcon>
                              <ListItemText
                                primary="Add more sample images"
                                secondary={"You can add up to 3"}
                              />
                            </ListItem>
                          )}

                          {!hasGoodDescription && (
                            <ListItem>
                              <ListItemIcon>
                                <TextFormatOutlinedIcon />
                              </ListItemIcon>
                              <ListItemText
                                primary="Talk more about your business"
                                secondary={
                                  "Users tend to connect more when they can learn more from your description"
                                }
                              />
                            </ListItem>
                          )}
                        </List>
                      </AccordionDetails>
                    </Accordion>
                  </Paper>
                </Grid>
              )}
              <Grid item xs={12} sm={6}>
                <Paper elevation={2} className={classes.activity}>
                  <Typography variant="h6" gutterBottom={true}>
                    Feature Request?
                  </Typography>
                  <Typography>
                    Your wish is our command. Let us know what changes you'd
                    like to see on this platform
                  </Typography>
                  <a href="https://soplugged.kampsite.co/" target="_blank">
                    <Button variant="outlined" color="secondary">
                      Make a suggestion
                    </Button>
                  </a>
                </Paper>
              </Grid>
            </Grid>
          </div>
        </>
      ) : (
        <div className={classes.noBusiness}>
          <Image
            src="/images/undraw_no_data.png"
            alt="empty clipboard"
            width={200}
            height={200}
          />
          <Typography variant="body1">No business found</Typography>
          <Typography variant="body1">Want to create a business?</Typography>
        </div>
      )}
    </>
  );
};

export default Dashboard;
