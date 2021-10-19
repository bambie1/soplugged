import React from "react";
import dynamic from "next/dynamic";

import {
  Grid,
  Typography,
  Avatar,
  Box,
  Fab,
  Button,
  useMediaQuery,
} from "@material/mui-components";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import {
  CheckIcon,
  EditIcon,
  TelegramIcon,
  ErrorOutlineIcon,
} from "@material/mui-icons";
import ImageGallery from "react-image-gallery";
import { useSearch } from "@contexts/searchContext";
import { useRouter } from "next/router";
import Link from "next/link";
import BusinessHeader from "../BusinessHeader/BusinessHeader";

import styles from "./BusinessPage.module.scss";
import ContactLinks from "./ContactLinks";

const DynamicFavorite = dynamic(() =>
  import("../FavoriteButton/FavoriteButton")
);

const BusinessPage = ({ business, user, userLikedBusiness }) => {
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
    fixed_to_one_location,
    street_address,
    number_of_likes,
    verified,
  } = business;

  let images = sample_images?.split(",") || [];
  images = images.map((item) => ({ original: item, thumbnail: item }));
  let hasPreview = images.length !== 0 && images[0]?.original?.length !== 0;
  const pageOwner = user?.email === creator.email;

  const matches = useMediaQuery("(min-width:960px)");
  const fullView = hasPreview && verified && matches;

  const handleCategoryClick = () => {
    setContextCategory(category);
    router.push("/search");
  };

  const renderFullView = () => (
    <Grid container spacing={3} style={{ marginTop: "30px" }}>
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
          <ImageGallery items={images} showPlayButton={false} />

          <Typography variant="h6" color="secondary" align="left" gutterBottom>
            About
          </Typography>
          <div
            style={{ textAlign: "left" }}
            dangerouslySetInnerHTML={{ __html: business_description }}
          ></div>
          <br></br>
        </div>
      </Grid>
      <Grid id="contact" item xs={12} md={5}>
        <ContactLinks business={business} user={user} />

        {verified && (
          <div className={styles.favoriteDiv}>
            <DynamicFavorite
              business_id={id}
              user={user}
              numberOfLikes={number_of_likes}
              disabled={pageOwner}
              userLikedBusiness={userLikedBusiness}
            />
          </div>
        )}
      </Grid>
    </Grid>
  );

  const renderStackedView = () => (
    <>
      <Box className={styles.stackedView}>
        {hasPreview && (
          <>
            <ImageGallery items={images} showPlayButton={false} />
            <br></br>
          </>
        )}
        {business_description && (
          <>
            <Typography
              variant="h6"
              color="secondary"
              align="center"
              gutterBottom
            >
              About
            </Typography>
            <div
              className={styles.description}
              dangerouslySetInnerHTML={{ __html: business_description }}
            ></div>
            <br></br>
          </>
        )}
      </Box>
      {verified && (
        <DynamicFavorite
          business_id={id}
          user={user}
          numberOfLikes={number_of_likes}
          disabled={pageOwner}
          userLikedBusiness={userLikedBusiness}
        />
      )}
      <Box id="contact" mb={4} mt={3}>
        <ContactLinks business={business} user={user} />
      </Box>
    </>
  );

  return (
    <div className={styles.root}>
      <BusinessHeader wrap={true}>
        <Avatar
          alt="Business Logo"
          src={logo_url}
          style={{ margin: "0px 8px" }}
        >
          {business_name.toUpperCase().charAt(0)}
        </Avatar>
        <div>
          <Typography variant="h1" className={styles.businessName}>
            {business_name.toUpperCase()}
          </Typography>
        </div>
      </BusinessHeader>
      <br />
      {!verified && (
        <span className={styles.unverified}>
          <ErrorOutlineIcon fontSize="small" style={{ height: "0.9rem" }} />
          This business hasn't been claimed by it's owner
        </span>
      )}

      {category && (
        <Typography variant="h6" gutterBottom={true}>
          CATEGORY:{" "}
          <span className={styles.categorySpan} onClick={handleCategoryClick}>
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
          <span className={styles.remote}>
            <CheckIcon fontSize="small" style={{ height: "0.9rem" }} />
            CANADA-WIDE
          </span>
        )}
      </Typography>

      {fullView ? renderFullView() : renderStackedView()}

      {!verified && (
        <div className={styles.claimBusiness}>
          <Typography>Are you the owner of this business?</Typography>
          <a href="mailto:hello@soplugged.com">
            <Button color="secondary">Let us know</Button>
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
