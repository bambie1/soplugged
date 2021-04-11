import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import BusinessCard from "./BusinessCard";

const responsive = {
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 4,
    slidesToSlide: 3, // optional, default to 1.
    partialVisibilityGutter: 30,
  },
  tablet: {
    breakpoint: { max: 1024, min: 800 },
    items: 3,
    slidesToSlide: 1, // optional, default to 1.
    partialVisibilityGutter: 30,
  },
  midTablet: {
    breakpoint: { max: 800, min: 464 },
    items: 2,
    slidesToSlide: 1, // optional, default to 1.
    partialVisibilityGutter: 30,
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1,
    slidesToSlide: 1, // optional, default to 1.
    partialVisibilityGutter: 30,
  },
};

const BusinessCarousel = ({ businesses }) => {
  return (
    <Carousel partialVisible itemClass="carousel-item" responsive={responsive}>
      {businesses.map((business, index) => (
        <BusinessCard dbObject={business} key={index} mini={true} />
      ))}
    </Carousel>
  );
};

export default BusinessCarousel;
