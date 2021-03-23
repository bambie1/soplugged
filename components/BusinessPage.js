import {
  Grid,
  Typography,
  Avatar,
  Button,
  TextField,
  makeStyles,
  SecondaryButton,
  Fab,
} from "./mui-components";
import React, { useState } from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import {
  CheckIcon,
  InstagramIcon,
  LanguageIcon,
  PanoramaIcon,
  FavoriteBorderIcon,
  FavoriteIcon,
  EditIcon,
} from "./mui-icons";
import ImageGallery from "react-image-gallery";
import { useSearch } from "@/contexts/searchContext";
import { useRouter } from "next/router";
import Link from "next/link";

const useStyles = makeStyles((theme) => ({
  root: {
    position: "relative",
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
  favoriteDiv: {
    marginTop: "40px",
    padding: "8px 40px 16px",
    borderRadius: "5px",
    background: "#fffaf2",
    display: "flex",
    flexDirection: "column",
    "& > *": {
      display: "flex",
      alignSelf: "center",
      marginBottom: "8px",
    },
  },
}));

const BusinessPage = ({ dbObject, user }) => {
  const classes = useStyles();
  const { setContextCategory } = useSearch();
  const [liked, setLiked] = useState(false);
  const router = useRouter();
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
  let hasPreview = images.length !== 0 && images[0]?.original?.length !== 0;
  const pageOwner = user?.email === email;

  const handleCategoryClick = () => {
    setContextCategory(category);
    router.push("/search");
  };
  const handleFavorite = () => {
    setLiked(!liked);
    //back-end query
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
          {business_name.toUpperCase().charAt(0)}
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
                  startIcon={liked ? <FavoriteIcon /> : <FavoriteBorderIcon />}
                  onClick={handleFavorite}
                  disabled={!user?.email}
                >
                  {liked ? "Liked" : "Like"}
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
            <TextField
              name="userEmail"
              label="E-mail"
              variant="outlined"
              defaultValue={user?.email}
              disabled
            />
            <TextField
              name="userName"
              label="Full Name"
              variant="outlined"
              disabled={!user?.email}
            />
            <TextField
              name="userMessage"
              label="Message"
              variant="outlined"
              rows={5}
              rowsMax={Infinity}
              multiline
              disabled={!user?.email}
            />
            {user.email ? (
              <Button variant="contained" color="secondary">
                Send Message
              </Button>
            ) : (
              <Link href="/join">
                <a target="_blank">
                  <Button variant="outlined" color="secondary">
                    Sign In to send Message
                  </Button>
                </a>
              </Link>
            )}
          </form>
          <div className={classes.filler}></div>
        </Grid>
      </Grid>
      {hasPreview && (
        <div className={classes.favoriteDiv}>
          <Typography>
            Would you recommend this business? Give it a like!
          </Typography>
          <Button
            variant="contained"
            color="primary"
            startIcon={liked ? <FavoriteIcon /> : <FavoriteBorderIcon />}
            onClick={handleFavorite}
            disabled={!user?.email}
          >
            {liked ? "Liked" : "Like"}
          </Button>

          {!user?.email && (
            <a
              target="_blank"
              href="/join"
              style={{
                textDecoration: "underline",
              }}
            >
              <Typography variant="caption">
                Please sign in to add business to your favorites
              </Typography>
            </a>
          )}
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
