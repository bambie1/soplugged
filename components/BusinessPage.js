import {
  Grid,
  Typography,
  Avatar,
  Button,
  Paper,
  TextField,
} from "@material-ui/core";
import React from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";
import CheckIcon from "@material-ui/icons/Check";
import InstagramIcon from "@material-ui/icons/Instagram";
import MailOutlineIcon from "@material-ui/icons/MailOutline";
import LanguageIcon from "@material-ui/icons/Language";
import { makeStyles } from "@material-ui/core/styles";
import ImageGallery from "react-image-gallery";
import PanoramaIcon from "@material-ui/icons/Panorama";
import Form from "./Form";

const useStyles = makeStyles((theme) => ({
  root: {
    "& > *": {
      marginTop: "16px",
      marginBottom: "16px",
    },
  },
  businessName: {
    textTransform: "uppercase",
    fontWeight: "normal",
  },
  btnGroup: {
    display: "flex",
    justifyContent: "center",
    flexWrap: "wrap",
    "& > *": {
      margin: "8px 16px",
    },
  },
  sectionTitle: {
    width: "100%",
    textAlign: "center",
    margin: "8px auto",
    maxWidth: "500px",
    fontWeight: "bold",
  },
  paper: {
    padding: "8px",
    maxWidth: "500px",
    margin: "auto",
    "& > *": {
      width: "100%",
      margin: "5px 0px",
    },
  },
  filler: { background: "#fffaf2", flex: "1 1 auto" },
}));

const BusinessPage = ({ dbObject }) => {
  const classes = useStyles();
  const {
    business_name,
    business_location,
    logo_url,
    sample_images,
    category,
    business_description,
    business_url,
    email,
    fixed_to_one_location,
    street_address,
    ig_handle,
  } = dbObject;
  let images = sample_images.split(",");
  images = images.map((item) => ({ original: item, thumbnail: item }));

  return (
    <div className={classes.root}>
      <div
        className="business-header"
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          marginBottom: "16px",
          flexWrap: "wrap",
        }}
      >
        <Avatar
          alt="Business Logo"
          src={logo_url}
          style={{ margin: "0px 8px" }}
        >
          {business_name.charAt(0)}
        </Avatar>
        <Typography variant="h1" className={classes.businessName}>
          {business_name}
        </Typography>
      </div>
      <Typography variant="h6" style={{ fontWeight: "bold" }}>
        CATEGORY: {category}
      </Typography>
      <Typography>
        {street_address &&
          fixed_to_one_location &&
          `LOCATION: ${street_address}`}
        {street_address && fixed_to_one_location && <br></br>}
        {business_location}
        <br></br>
        {!fixed_to_one_location && (
          <span
            style={{
              fontWeight: "bold",
              fontSize: "0.9rem",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <CheckIcon fontSize="small" style={{ height: "0.9rem" }} />
            CANADA-WIDE
          </span>
        )}
      </Typography>
      <Grid container spacing={2}>
        <Grid item xs={12} sm={7}>
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              height: "100%",
            }}
          >
            <Typography variant="body2" className={classes.sectionTitle}>
              <span>ABOUT BUSINESS:</span>
            </Typography>
            {images.length !== 0 && images[0]?.original.length !== 0 ? (
              <div
                style={{
                  background: "grey",
                  height: "400px",
                  width: "100%",
                  // maxWidth: "500px",
                  margin: "auto",
                }}
              ></div>
            ) : (
              <div
                style={{
                  background: "#e0e0e0",
                  height: "40px",
                  width: "100%",
                  maxWidth: "500px",
                  margin: "auto",
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                <PanoramaIcon />
                <Typography style={{ marginLeft: "8px" }}>
                  No image preview
                </Typography>
              </div>
            )}
            <Typography variant="body2" className={classes.sectionTitle}>
              <span>ABOUT BUSINESS:</span>
            </Typography>
            <Typography variant="body1">{business_description}</Typography>
            <div className={classes.filler}></div>

            <div className={classes.filler}></div>
          </div>
        </Grid>
        <Grid item xs={12} sm={5}>
          <Typography variant="body2" className={classes.sectionTitle}>
            <span>CONTACT OWNER</span>
          </Typography>
          <form className={classes.paper}>
            <TextField name="userEmail" label="E-mail" variant="outlined" />
            <TextField name="userName" label="Full Name" variant="outlined" />
            <TextField
              name="userMessage"
              label="Message"
              variant="outlined"
              rows={5}
              rowsMax={Infinity}
              multiline
            />
            <Button variant="contained" color="primary" disabled={true}>
              Send Message
            </Button>
          </form>
          <Typography>
            You can reach out to the owner via any of these options to learn
            more, or inquire about costs.
          </Typography>
          <div className={classes.btnGroup}>
            {business_url && (
              <a href={`http://${business_url}`} target="_blank" rel="noopener">
                <Button
                  variant="contained"
                  color="default"
                  startIcon={<LanguageIcon />}
                >
                  Visit website
                </Button>
              </a>
            )}
            {ig_handle && (
              <a
                href={`https://www.instagram.com/${ig_handle}`}
                target="_blank"
                rel="noopener"
              >
                <Button
                  variant="contained"
                  color="default"
                  startIcon={<InstagramIcon />}
                >
                  IG Page
                </Button>
              </a>
            )}
          </div>
        </Grid>
      </Grid>
      <br></br>
    </div>
  );
};

export default BusinessPage;
