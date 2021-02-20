import { Typography } from "@material-ui/core";
import AlgoliaAutoComplete from "./algolia/AlgoliaAutoComplete";

const HeroBanner = () => {
  return (
    <header className="hero" style={{ backgroundColor: "#ff914d" }}>
      <div className="hero-side-image">
        <img
          src="/images/black_woman_hair.png"
          alt="Black woman with ponytail"
        />
      </div>
      <section className="hero-text-overlay">
        <Typography
          variant="h1"
          style={{ fontWeight: "700", fontSize: "2.5rem" }}
        >
          Find the perfect <em>black-owned</em> business for your needs.
        </Typography>
        <AlgoliaAutoComplete />
      </section>
    </header>
  );
};

export default HeroBanner;
