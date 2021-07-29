import {
  Grid,
  Typography,
  Avatar,
  makeStyles,
  Box,
  Fab,
  IconButton,
  Tooltip,
  Button,
} from "@material/mui-components";
import React from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import {
  CheckIcon,
  InstagramIcon,
  LanguageIcon,
  EditIcon,
  TelegramIcon,
  CallIcon,
  ErrorOutlineIcon,
} from "@material/mui-icons";
import ImageGallery from "react-image-gallery";
import { useSearch } from "@contexts/searchContext";
import { useRouter } from "next/router";
import Link from "next/link";
import BusinessHeader from "./BusinessHeader";
import dynamic from "next/dynamic";

const DynamicContact = dynamic(() => import("./ContactForm"));
const DynamicFavorite = dynamic(() => import("./FavoriteButton"));

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
    wordBreak: "break-word",
    margin: 0,
  },
  button: {
    margin: "8px 16px",
    border: `1px solid ${theme.palette.secondary.main}`,
    borderRadius: "50%",
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
    padding: "8px 40px 0px",
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
  unverified: {
    marginTop: "8px",
    fontSize: "0.9rem",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    color: "grey",
  },
  description: {
    lineHeight: "1.5",
    "& > ul": {
      display: "table",
      margin: "auto",
    },
    "& > ol": {
      display: "table",
      margin: "auto",
    },
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
    phone_number,
    verified,
  } = business;

  let images = sample_images?.split(",") || [];
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
        <div>
          <Typography variant="h1" className={classes.businessName}>
            {business_name.toUpperCase()}
          </Typography>
          {!verified && (
            <span className={classes.unverified}>
              <ErrorOutlineIcon fontSize="small" style={{ height: "0.9rem" }} />
              This business hasn't been claimed by it's owner
            </span>
          )}
        </div>
      </BusinessHeader>

      {category && (
        <Typography variant="h6" gutterBottom={true}>
          CATEGORY:{" "}
          <span className={classes.categorySpan} onClick={handleCategoryClick}>
            {category}
          </span>
        </Typography>
      )}

      <Typography variant="body1">
        {street_address &&
          fixed_to_one_location &&
          `LOCATION: ${street_address}`}
        {street_address && fixed_to_one_location && <br></br>}
        {business_location}
        {!fixed_to_one_location && (
          <span className={classes.remote}>
            <CheckIcon fontSize="small" style={{ height: "0.9rem" }} />
            CANADA-WIDE
          </span>
        )}
      </Typography>
      <Grid container spacing={2} style={{ marginTop: "30px" }}>
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
            {business_description && (
              <>
                <Typography variant="body1" className={classes.sectionTitle}>
                  <span>ABOUT BUSINESS:</span>
                </Typography>
                <div
                  className={classes.description}
                  dangerouslySetInnerHTML={{ __html: business_description }}
                ></div>
                <br></br>
              </>
            )}

            {!hasPreview && verified && (
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
                <DynamicFavorite
                  business_id={id}
                  user={user}
                  numberOfLikes={number_of_likes}
                  disabled={pageOwner}
                />
              </div>
            )}
          </div>
        </Grid>
        <Grid id="contact" item xs={12} md={5}>
          <Typography variant="body1" className={classes.sectionTitle}>
            <span>CONTACT BUSINESS</span>
          </Typography>
          <Box display="flex" justifyContent="center" flexWrap="wrap">
            {phone_number && (
              <a href={`tel:${phone_number}`} className={classes.button}>
                <Tooltip title="Call Business" aria-label="call business">
                  <IconButton>
                    <CallIcon />
                  </IconButton>
                </Tooltip>
              </a>
            )}
            {business_url && (
              <a
                href={business_url}
                target="_blank"
                rel="noopener"
                className={classes.button}
              >
                <Tooltip title="Visit Website" aria-label="visit website">
                  <IconButton>
                    <LanguageIcon />
                  </IconButton>
                </Tooltip>
              </a>
            )}
            {ig_handle && (
              <a
                href={`https://www.instagram.com/${ig_handle}`}
                target="_blank"
                rel="noopener"
                className={classes.button}
              >
                <Tooltip title="View IG page" aria-label="view IG page">
                  <IconButton>
                    <InstagramIcon />
                  </IconButton>
                </Tooltip>
              </a>
            )}
          </Box>
          {verified && (
            <DynamicContact user={user} business_email={creator.email} />
          )}
        </Grid>
      </Grid>
      {hasPreview && verified && (
        <div className={classes.favoriteDiv}>
          <Typography>
            Would you recommend this business? Give it a like!
          </Typography>
          <DynamicFavorite
            business_id={id}
            user={user}
            numberOfLikes={number_of_likes}
            disabled={pageOwner}
          />
        </div>
      )}
      {!verified && (
        <div
          style={{
            padding: "16px 40px",
            borderRadius: "5px",
            background: "#fffaf2",
          }}
        >
          <Typography>Are you the owner of this business?</Typography>
          <br></br>
          <a href="mailto:hello@soplugged.com">
            <Button variant="contained" color="secondary">
              Let us know
            </Button>
          </a>
        </div>
      )}
      {pageOwner ? (
        <Link href="/my-business">
          <a style={{ position: "fixed", top: "65px", right: "16px" }}>
            <Fab variant="extended">
              <EditIcon style={{ marginRight: "8px" }} />
              Edit
            </Fab>
          </a>
        </Link>
      ) : (
        <a
          href="#contact"
          style={{ position: "fixed", bottom: "0px", right: "16px" }}
        >
          <Fab color="secondary">
            <TelegramIcon style={{ marginRight: "8px" }} />
          </Fab>
        </a>
      )}
    </div>
  );
};

export default BusinessPage;
