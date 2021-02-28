import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import { Avatar, IconButton } from "@material-ui/core";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";
import { textTruncate } from "../utils/truncateText";
import CheckIcon from "@material-ui/icons/Check";
import InstagramIcon from "@material-ui/icons/Instagram";
import MailOutlineIcon from "@material-ui/icons/MailOutline";
import LanguageIcon from "@material-ui/icons/Language";

const useStyles = makeStyles((theme) => ({
  root: {
    margin: `${theme.spacing(2)}px auto 0px`,
    border: `1px solid ${theme.palette.primary.main}`,
    boxShadow: "2px 2px 6px #888888",
    borderRadius: "5px",
    maxWidth: "444px",
    textAlign: "center",
    "& > *": {
      margin: theme.spacing(1, 2),
      // width: `calc(100% - ${theme.spacing(2)}px)`,
    },
  },
  tagsDiv: {
    display: "flex",
    flexWrap: "wrap",
    justifyContent: "center",
  },
  businessName: {
    textTransform: "uppercase",
    fontWeight: "normal",
    marginLeft: theme.spacing(1),
  },
  btnGroup: {
    display: "flex",
    justifyContent: "center",
    flexWrap: "wrap",
    borderTop: `1px solid ${theme.palette.primary.main}`,
  },
}));

const BusinessCard = ({ mini, average, ...props }) => {
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
  } = props.dbObject;
  const images = sample_images.split(",");
  return (
    <div
      className={classes.root}
      style={{ cursor: (mini || average) && "pointer" }}
      onClick={(mini || average) && props.handleClick}
    >
      <div
        className="business-header"
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <Avatar alt="Business Logo" src={logo_url} variant="square">
          {business_name.charAt(0)}
        </Avatar>
        <Typography variant="h6" className={classes.businessName}>
          {business_name}
        </Typography>
      </div>

      {/* <br></br> */}
      <Typography variant="body1" style={{ fontWeight: "bold" }}>
        CATEGORY: {category}
      </Typography>
      <Typography variant="body2">
        {mini || average
          ? textTruncate(business_description || "")
          : business_description}
      </Typography>
      <br></br>
      {!(mini || average) && (
        <>
          {images.length !== 0 && images[0].length !== 0 && (
            <Carousel dynamicHeight={true}>
              {images.map((img, index) => (
                <img
                  key={index}
                  className="business-image"
                  src={img}
                  alt="business-display"
                />
              ))}
            </Carousel>
          )}
        </>
      )}
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

      {!mini && (
        <div className={classes.btnGroup}>
          <a href={`mailto:${email}`}>
            <IconButton aria-label="email">
              <MailOutlineIcon />
            </IconButton>
          </a>
          {business_url && (
            <a href={`http://${business_url}`} target="__blank">
              <IconButton aria-label="website">
                <LanguageIcon />
              </IconButton>
            </a>
          )}
          {ig_handle && (
            <a href={`https://www.instagram.com/${ig_handle}`}>
              <IconButton aria-label="instagram">
                <InstagramIcon />
              </IconButton>
            </a>
          )}
        </div>
      )}
    </div>
  );
};

export default BusinessCard;
