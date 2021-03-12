import { categories } from "../src/ListOfCategories";
import CategoryCard from "./CategoryCard";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

const responsive = {
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 4,
    slidesToSlide: 3, // optional, default to 1.
    partialVisibilityGutter: 30,
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
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

const popularCategories = [
  "baking-and-catering",
  "entertainment",
  "event-planning",
  "hair-and-beauty",
  "handcraft-gifting",
  "media-services",
];
const filteredList = categories.filter((item) =>
  popularCategories.includes(item.value)
);
const CategoriesCarousel = () => {
  return (
    <Carousel partialVisible itemClass="carousel-item" responsive={responsive}>
      {filteredList.map((category, index) => (
        <CategoryCard key={index} {...category} />
      ))}
    </Carousel>
  );
};

export default CategoriesCarousel;
