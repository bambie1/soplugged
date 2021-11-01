import React from "react";
import {
  Grid,
  Paper,
  Button,
  makeStyles,
  Box,
  Menu,
  MenuItem,
} from "@material/mui-components";
import { EditIcon, FavoriteIcon } from "@material/mui-icons";
import Link from "next/link";
import Image from "next/image";
import { greetFunction } from "src/greeting";
import BusinessCard from "../../BusinessCard/BusinessCard";
import { CircularProgressbar, buildStyles } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";
import { useRouter } from "next/router";
import { useBusinessFormContext } from "@contexts/businessFormContext";

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
  favorites: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    marginTop: "0.5rem",

    "& > *": {
      marginInline: "0.25rem",
    },
    "& > p": {
      fontWeight: "bold",
      fontSize: "3rem",
      marginBlock: 0,
    },
  },
}));

const DashboardHome = ({ business }) => {
  const classes = useStyles();
  const [anchorEl, setAnchorEl] = React.useState(null);
  const router = useRouter();
  const { setCurrentStep } = useBusinessFormContext();

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };
  const handleSuggestions = (step) => {
    setCurrentStep(step);
    router.push("/my-business");
  };

  const hasLogo = business?.logo_url !== "";
  const hasGoodDescription = business?.business_description.length > 150;
  const hasImages = !!business?.sample_images.split(",")[0];
  const hasContact =
    business?.business_url !== "" &&
    (business?.ig_handle !== "" || business?.phone_number !== "");
  const suggestionsCount = [
    hasLogo,
    hasGoodDescription,
    hasImages,
    hasContact,
  ].filter(Boolean).length;
  const percentage = (6 + suggestionsCount) * 10;

  return (
    <>
      <h1>Home</h1>
      {business ? (
        <>
          <h3>{greetFunction(business.creator.full_name)}</h3>
          <p>Here's some important stuff we've outlined for you</p>
          <div className={classes.grid}>
            <Grid container spacing={2}>
              <Grid item xs={12} sm={6}>
                <p style={{ fontWeight: "bold" }}>YOUR BUSINESS:</p>
                <div className={classes.businessDiv}>
                  <BusinessCard dbObject={business} mini={true} />
                </div>
                <Link href="/my-business" passHref>
                  <Button
                    variant="outlined"
                    color="secondary"
                    startIcon={<EditIcon />}
                  >
                    Edit Business
                  </Button>
                </Link>
              </Grid>

              <Grid item xs={12} sm={6} id="suggestions">
                <p style={{ fontWeight: "bold" }}>BUSINESS COMPLETION:</p>
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
                      <p>Looking great, Boss!</p>
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
                  <MenuItem onClick={() => handleSuggestions(3)}>
                    Add a logo
                  </MenuItem>
                )}
                {!hasImages && (
                  <MenuItem onClick={() => handleSuggestions(3)}>
                    <p>Upload some images</p>
                  </MenuItem>
                )}
                {!hasGoodDescription && (
                  <MenuItem onClick={() => handleSuggestions(2)}>
                    Describe your business more
                  </MenuItem>
                )}
                {!hasContact && (
                  <MenuItem onClick={() => handleSuggestions(2)}>
                    Add another means of contact
                  </MenuItem>
                )}
              </Menu>

              <Grid item xs={12}>
                <p style={{ fontWeight: "bold" }}>BUSINESS NUMBERS:</p>
                <Box display="flex" justifyContent="center" flexWrap="wrap">
                  <Paper className={classes.activity}>
                    <p className="noMargin">Favorites</p>
                    <div className={classes.favorites}>
                      <p>{business.number_of_likes}</p>
                      <FavoriteIcon color="secondary" />
                    </div>
                  </Paper>
                  <Paper
                    className={classes.activity}
                    style={{ opacity: "0.5" }}
                  >
                    <p className="noMargin">Messages</p>
                    <p>COMING SOON</p>
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
          <h6>No business found</h6>
          <h6>Just a nice beverage</h6>
          <p>Are you an entrepreneur?</p>
          <Link href="/my-business" passHref>
            <Button variant="outlined">Add your business</Button>
          </Link>
        </div>
      )}
    </>
  );
};

export default DashboardHome;
