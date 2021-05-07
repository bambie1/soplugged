import React from "react";
import { Avatar, Typography, makeStyles } from "@material/mui-components";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";
import { CheckIcon } from "@material/mui-icons";
import Link from "next/link";
import BusinessHeader from "./BusinessHeader";

const useStyles = makeStyles((theme) => ({
  root: {
    border: `1px solid #f9f9f9`,
    boxShadow: "2px 2px 6px #888888",
    borderRadius: "5px",
    flex: "1",
    width: "100%",
    height: "100%",
    textAlign: "center",
    display: "flex",
    flexDirection: "column",
    background: "#f9f9f9",
    transition: "background 1s",
    padding: "8px",
    "&:hover": {
      background: "white",
      borderColor: `${theme.palette.primary.main}`,
      transition: "borderColor 3s",
    },
    "& > *": {
      margin: theme.spacing(1, 2),
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
    fixed_to_one_location,
    street_address,
    slug,
  } = props.dbObject;
  const images = sample_images.split(",");
  return (
    <Link href={`/business/${slug}`}>
      <a className={classes.root}>
        <BusinessHeader>
          <Avatar alt="Business Logo" src={logo_url} variant="square">
            {business_name.toUpperCase().charAt(0)}
          </Avatar>
          <Typography variant="h6" className={classes.businessName}>
            {business_name}
          </Typography>
        </BusinessHeader>

        <Typography variant="body1" style={{ fontWeight: "bold" }}>
          CATEGORY: {category}
        </Typography>
        <br></br>
        {!mini && (
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
        <Typography style={{ marginTop: "auto" }}>
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
      </a>
    </Link>
  );
};

export default BusinessCard;
