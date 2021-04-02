import { Typography } from "./mui-components";
import AlgoliaAutoComplete from "./algolia/AlgoliaAutoComplete";
import Image from "next/image";

const HeroBanner = () => {
  return (
    <header className="hero" style={{ backgroundColor: "#ff914d" }}>
      <div className="hero-side-image">
        <Image
          src="/images/black_woman_hair_tiny.png"
          alt="Black woman with ponytail"
          width={310}
          height={450}
        />
      </div>

      <section className="hero-text-overlay">
        <Typography variant="h1" style={{ color: "white" }}>
          You have needs,
          <br />
          We have{" "}
          <span
            style={{
              fontFamily: ["Permanent Marker", "cursive"].join(","),
              color: "black",
              fontWeight: "normal",
            }}
          >
            BLACK-OWNED
          </span>{" "}
          Businesses
        </Typography>
        <AlgoliaAutoComplete />
      </section>
      <div className="custom-shape-divider-bottom-1615430493">
        <svg
          data-name="Layer 1"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1200 120"
          preserveAspectRatio="none"
        >
          <path
            d="M985.66,92.83C906.67,72,823.78,31,743.84,14.19c-82.26-17.34-168.06-16.33-250.45.39-57.84,11.73-114,31.07-172,41.86A600.21,600.21,0,0,1,0,27.35V120H1200V95.8C1132.19,118.92,1055.71,111.31,985.66,92.83Z"
            className="shape-fill"
          ></path>
        </svg>
      </div>
    </header>
  );
};

export default HeroBanner;
