import {
  Grid,
  Typography,
  Avatar,
  Button,
  TextField,
  makeStyles,
  SecondaryButton,
} from "./mui-components";
import React from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import {
  CheckIcon,
  InstagramIcon,
  LanguageIcon,
  PanoramaIcon,
  FavoriteBorderIcon,
  FavoriteIcon,
} from "./mui-icons";
import ImageGallery from "react-image-gallery";
import { useSearch } from "@/contexts/searchContext";
import { useRouter } from "next/router";

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
  categorySpan: {
    cursor: "pointer",
    borderBottom: "1px solid",
    borderRadius: "5px",
    padding: "1px",
    color: theme.palette.secondary.main,
    "&:hover": {
      borderBottom: "none",
    },
  },
}));

const BusinessPage = ({ dbObject }) => {
  const classes = useStyles();
  const { setContextCategory } = useSearch();
  const router = useRouter();
  let dbObject2 = {
    id: 4,
    owner_name: "Margaret Ajibola",
    email: "wigsbymagss@gmail.com",
    phone_number: "4444444444",
    business_name: "Wigsbymagss ",
    business_url: "",
    ig_handle: "",
    street_address: "",
    business_location: "Ottawa, ON, Canada",
    fixed_to_one_location: true,
    business_description:
      "I’m a hair stylist in Ottawa that makes wigs and provides installation services.",
    logo_url:
      "https://firebasestorage.googleapis.com/v0/b/app-soplugged.appspot.com/o/AE431D8B-20FA-442E-BBC5-484C05B5932D.jpeg?alt=media&token=1189f2b8-e020-41e6-aee2-22a02aeda93c",
    sample_images: "",
    category: "Hair / Beauty",
    tags: "",
    services: [],
  };
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
  // images = [];
  let hasPreview = images.length !== 0 && images[0]?.original?.length !== 0;
  const handleCategoryClick = () => {
    setContextCategory(category);
    router.push("/search");
  };

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
        CATEGORY:{" "}
        <span className={classes.categorySpan} onClick={handleCategoryClick}>
          {category}
        </span>
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
        <Grid item xs={12} md={7}>
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              height: "100%",
              maxWidth: "700px",
              margin: "auto",
            }}
          >
            {hasPreview && (
              <>
                <ImageGallery items={images} showPlayButton={false} />
                <br></br>
              </>
            )}
            <Typography variant="body2" className={classes.sectionTitle}>
              <span>ABOUT BUSINESS:</span>
            </Typography>
            <Typography variant="body1">{business_description}</Typography>
            <br></br>
            <div className={classes.btnGroup}>
              {business_url && (
                <a
                  href={`http://${business_url}`}
                  target="_blank"
                  rel="noopener"
                >
                  <SecondaryButton startIcon={<LanguageIcon />}>
                    Visit website
                  </SecondaryButton>
                </a>
              )}
              {ig_handle && (
                <a
                  href={`https://www.instagram.com/${ig_handle}`}
                  target="_blank"
                  rel="noopener"
                >
                  <SecondaryButton startIcon={<InstagramIcon />}>
                    Visit Instagram
                  </SecondaryButton>
                </a>
              )}
            </div>
            {!hasPreview && (
              <div
                style={{
                  marginTop: "40px",
                  padding: "8px 40px 16px",
                  borderRadius: "5px",
                  background: "#fffaf2",
                }}
              >
                <Typography>
                  Would you recommend this business? Give it a like!
                </Typography>
                <br></br>
                <Button
                  variant="contained"
                  color="primary"
                  startIcon={<FavoriteBorderIcon />}
                >
                  Like
                </Button>
              </div>
            )}
            {/* <div className={classes.filler}></div> */}
          </div>
        </Grid>
        <Grid item xs={12} md={5}>
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
          <div className={classes.filler}></div>
        </Grid>
      </Grid>
      {hasPreview && (
        <div
          style={{
            marginTop: "40px",
            padding: "8px 40px 16px",
            borderRadius: "5px",
            background: "#fffaf2",
          }}
        >
          <Typography>
            Would you recommend this business? Give it a like!
          </Typography>
          <br></br>
          <Button
            variant="contained"
            color="primary"
            startIcon={<FavoriteBorderIcon />}
          >
            Like
          </Button>
        </div>
      )}
    </div>
  );
};

export default BusinessPage;
