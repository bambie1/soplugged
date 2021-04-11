import React from "react";
import {
  Grid,
  Paper,
  Typography,
  Button,
  makeStyles,
  Box,
  Menu,
  MenuItem,
} from "./mui-components";
import { EditIcon, FavoriteIcon } from "./mui-icons";
import Link from "next/link";
import Image from "next/image";
import { greetFunction } from "src/greeting";
import BusinessCard from "./BusinessCard";
import { CircularProgressbar, buildStyles } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";
import { useRouter } from "next/router";

const useStyles = makeStyles((theme) => ({
  activity: {
    textAlign: "center",
    padding: "8px",
    cursor: "default",
    margin: "5px",
    width: "calc(50% - 10px)",
    background:
      "linear-gradient(90deg, hsla(37, 100%, 97%, 1) 32%, hsla(0, 0%, 100%, 0.7) 84%, hsla(0, 0%, 100%, 1) 100%)",
    [theme.breakpoints.up("md")]: {
      width: "200px",
    },
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
    minHeight: "200px",
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
  noBusiness: {
    padding: "16px",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
  emptyImage: {
    opacity: "0.5",
  },
}));

const Dashboard = ({ business }) => {
  const classes = useStyles();
  const [anchorEl, setAnchorEl] = React.useState(null);
  const router = useRouter();

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };
  const handleSuggestions = () => {
    router.push("/my-business");
  };

  const hasLogo = business?.logo_url !== "";
  const hasGoodDescription = business?.business_description.length > 150;
  const hasThreeImages = business?.sample_images.split(",").length === 3;
  const hasIG = business?.ig_handle !== "";
  const suggestionsCount = [
    hasLogo,
    hasGoodDescription,
    hasThreeImages,
    hasIG,
  ].filter(Boolean).length;
  // const percentage = 100;
  const percentage = (6 + suggestionsCount) * 10;

  return (
    <>
      <Typography variant="h1" gutterBottom={true} align="center">
        Home
      </Typography>
      {business ? (
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
                <Typography
                  variant="body1"
                  gutterBottom={true}
                  align="center"
                  style={{ fontWeight: "bold" }}
                >
                  YOUR BUSINESS:
                </Typography>
                <div className={classes.businessDiv}>
                  <BusinessCard dbObject={business} mini={true} />
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

              <Grid item xs={12} sm={6} id="suggestions">
                <Typography
                  variant="body1"
                  gutterBottom={true}
                  align="center"
                  style={{ fontWeight: "bold" }}
                >
                  BUSINESS COMPLETION:
                </Typography>
                <Box
                  display="flex"
                  alignItems="center"
                  justifyContent="center"
                  flexWrap="wrap"
                >
                  <div
                    style={{
                      width: 200,
                      fontFamily: "Montserrat",
                    }}
                  >
                    <CircularProgressbar
                      value={percentage}
                      text={`${percentage}%`}
                      styles={buildStyles({
                        rotation: 0.25,
                        pathTransitionDuration: 0.5,
                        pathColor: "rgb(205 182 147)",
                        textColor: "rgb(205 182 147)",
                        trailColor: "#d6d6d6",
                        backgroundColor: "#3e98c7",
                      })}
                    />
                  </div>
                  <Box margin="8px">
                    {percentage === 100 ? (
                      <Typography variant="body1">
                        Looking great, Boss!
                      </Typography>
                    ) : (
                      <Button
                        variant="outlined"
                        aria-controls="business-suggestions"
                        aria-haspopup="true"
                        onClick={handleClick}
                      >
                        See suggestions ({4 - suggestionsCount})
                      </Button>
                    )}
                  </Box>
                </Box>
              </Grid>
              <Menu
                id="business-suggestions"
                anchorEl={anchorEl}
                keepMounted
                open={Boolean(anchorEl)}
                onClose={handleClose}
              >
                {!hasLogo && (
                  <MenuItem onClick={handleSuggestions}>Add a logo</MenuItem>
                )}
                {!hasThreeImages && (
                  <MenuItem onClick={handleSuggestions}>
                    <Typography noWrap>Upload 3 images</Typography>
                  </MenuItem>
                )}
                {!hasGoodDescription && (
                  <MenuItem onClick={handleSuggestions}>
                    Describe your business more
                  </MenuItem>
                )}
                {!hasIG && (
                  <MenuItem onClick={handleSuggestions}>
                    Add your IG account
                  </MenuItem>
                )}
              </Menu>

              <Grid item xs={12}>
                <Typography
                  variant="body1"
                  gutterBottom={true}
                  align="center"
                  style={{ fontWeight: "bold" }}
                >
                  BUSINESS NUMBERS:
                </Typography>
                <Box display="flex" justifyContent="center" flexWrap="wrap">
                  <Paper className={classes.activity}>
                    <Typography variant="body1">Favorites</Typography>
                    <Typography variant="h1" component="span">
                      {business.number_of_likes}
                    </Typography>
                    <FavoriteIcon />
                  </Paper>
                  <Paper
                    className={classes.activity}
                    style={{ opacity: "0.5" }}
                  >
                    <Typography variant="body1" gutterBottom={true}>
                      Messages
                    </Typography>
                    <Typography variant="body2">COMING SOON</Typography>
                  </Paper>
                </Box>
              </Grid>
            </Grid>
          </div>
        </>
      ) : (
        <div className={classes.noBusiness}>
          <Image
            src="/images/Cocktail_Monochromatic.svg"
            alt="empty clipboard"
            width={300}
            height={300}
            className={classes.emptyImage}
          />
          <Typography variant="h6">No business found</Typography>
          <Typography variant="caption" gutterBottom={true}>
            Just a nice beverage
          </Typography>
          <Typography variant="body1" gutterBottom={true}>
            Are you an entrepreneur?
          </Typography>
          <Link href="/my-business">
            <a>
              <Button variant="outlined">Add your business</Button>
            </a>
          </Link>
        </div>
      )}
    </>
  );
};

export default Dashboard;
