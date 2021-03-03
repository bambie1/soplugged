import React from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import BusinessCard from "./BusinessCard";

const responsive = {
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 3,
    slidesToSlide: 2, // optional, default to 1.
    partialVisibilityGutter: 30,
  },
  tablet: {
    breakpoint: { max: 1024, min: 800 },
    items: 2,
    slidesToSlide: 1, // optional, default to 1.
    partialVisibilityGutter: 30,
  },
  mobile: {
    breakpoint: { max: 800, min: 0 },
    items: 1,
    slidesToSlide: 1, // optional, default to 1.
    partialVisibilityGutter: 30,
  },
};

const BusinessCarousel = ({ businessList }) => {
  return (
    <Carousel partialVisible itemClass="carousel-item" responsive={responsive}>
      {businessList.map((item) => (
        <BusinessCard key={item.id} dbObject={item} mini={true} />
      ))}
    </Carousel>
  );
};

export default BusinessCarousel;
