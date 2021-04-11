import {
  Grid,
  Typography,
  Avatar,
  makeStyles,
  Box,
  SecondaryButton,
  Fab,
} from "./mui-components";
import React from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { CheckIcon, InstagramIcon, LanguageIcon, EditIcon } from "./mui-icons";
import ImageGallery from "react-image-gallery";
import { useSearch } from "@/contexts/searchContext";
import { useRouter } from "next/router";
import Link from "next/link";
import FavoriteButton from "./FavoriteButton";
import ContactForm from "./ContactForm";
import BusinessHeader from "./BusinessHeader";

const useStyles = makeStyles((theme) => ({
  root: {
    position: "relative",
    "& > *": {
      marginTop: "16px",
      marginBottom: "16px",
    },
  },
  businessName: {
    fontWeight: "normal",
  },
  button: {
    margin: "8px 16px",
  },
  sectionTitle: {
    width: "100%",
    textAlign: "center",
    margin: "8px auto",
    maxWidth: "500px",
    fontWeight: "bold",
  },
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
  favoriteDiv: {
    padding: "8px 40px 16px",
    background: "#fffaf2",
    display: "flex",
    flexDirection: "column",
  },
  remote: {
    fontWeight: "bold",
    fontSize: "0.9rem",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
}));

const BusinessPage = ({ business, user }) => {
  const classes = useStyles();
  const { setContextCategory } = useSearch();
  const router = useRouter();

  const {
    id,
    business_name,
    business_location,
    logo_url,
    sample_images,
    category,
    creator,
    business_description,
    business_url,
    fixed_to_one_location,
    street_address,
    ig_handle,
    number_of_likes,
  } = business;

  let images = sample_images.split(",");
  images = images.map((item) => ({ original: item, thumbnail: item }));
  let hasPreview = images.length !== 0 && images[0]?.original?.length !== 0;
  const pageOwner = user?.email === creator.email;

  const handleCategoryClick = () => {
    setContextCategory(category);
    router.push("/search");
  };

  return (
    <div className={classes.root}>
      <BusinessHeader wrap={true}>
        <Avatar
          alt="Business Logo"
          src={logo_url}
          style={{ margin: "0px 8px" }}
        >
          {business_name.toUpperCase().charAt(0)}
        </Avatar>
        <Typography variant="h1" className={classes.businessName}>
          {business_name.toUpperCase()}
        </Typography>
      </BusinessHeader>

      <Typography variant="h6">
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
          <span className={classes.remote}>
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
            <Box display="flex" justifyContent="center" flexWrap="wrap">
              {business_url && (
                <a
                  href={`http://${business_url}`}
                  target="_blank"
                  rel="noopener"
                  className={classes.button}
                >
                  <SecondaryButton startIcon={<LanguageIcon />}>
                    Visit Website
                  </SecondaryButton>
                </a>
              )}
              {ig_handle && (
                <a
                  href={`https://www.instagram.com/${ig_handle}`}
                  target="_blank"
                  rel="noopener"
                  className={classes.button}
                >
                  <SecondaryButton startIcon={<InstagramIcon />}>
                    Visit Instagram
                  </SecondaryButton>
                </a>
              )}
            </Box>
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
                <FavoriteButton
                  business_id={id}
                  user={user}
                  numberOfLikes={number_of_likes}
                  disabled={pageOwner}
                />
              </div>
            )}
          </div>
        </Grid>
        <Grid item xs={12} md={5}>
          <Typography variant="body2" className={classes.sectionTitle}>
            <span>CONTACT OWNER</span>
          </Typography>
          <ContactForm user={user} business_email={creator.email} />
          <div className={classes.filler}></div>
        </Grid>
      </Grid>
      {hasPreview && (
        <div className={classes.favoriteDiv}>
          <Typography>
            Would you recommend this business? Give it a like!
          </Typography>
          <FavoriteButton
            business_id={id}
            user={user}
            numberOfLikes={number_of_likes}
            disabled={pageOwner}
          />
        </div>
      )}
      {pageOwner && (
        <Link href="/my-business">
          <a style={{ position: "fixed", top: "65px", right: "16px" }}>
            <Fab variant="extended">
              <EditIcon style={{ marginRight: "8px" }} />
              Edit
            </Fab>
          </a>
        </Link>
      )}
    </div>
  );
};

export default BusinessPage;
