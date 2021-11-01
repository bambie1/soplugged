import React from "react";
import { Avatar } from "@material/mui-components";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";
import { CheckIcon } from "@material/mui-icons";
import Link from "next/link";
import BusinessHeader from "../BusinessHeader/BusinessHeader";

import styles from "./BusinessCard.module.scss";

const BusinessCard = ({ mini, average, ...props }) => {
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
  const images = sample_images?.split(",") || [];

  return (
    <Link href={`/business/${slug}`}>
      <a className={styles.root}>
        <BusinessHeader>
          <Avatar alt="Business Logo" src={logo_url} variant="square">
            {business_name.toUpperCase().charAt(0)}
          </Avatar>
          <h3 className={styles.businessName}>{business_name}</h3>
        </BusinessHeader>

        <h4 className={styles.category}>{category}</h4>
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

        <p>{business_location}</p>

        {!fixed_to_one_location && (
          <p className={styles.canadaWide}>
            <CheckIcon fontSize="small" style={{ height: "0.9rem" }} />
            CANADA-WIDE
          </p>
        )}
      </a>
    </Link>
  );
};

export default BusinessCard;
