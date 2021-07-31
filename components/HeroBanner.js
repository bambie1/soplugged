import { Typography, Button } from "@material/mui-components";
import { SearchIcon } from "@material/mui-icons";
import Image from "next/image";
import Link from "next/link";
import styles from "styles/Hero.module.scss";

const HeroBanner = () => {
  return (
    <section className={styles.hero}>
      {/* <div className={styles.hero_image}>
        <Image
          src="/images/plug_illustrations.svg"
          width={600}
          height={600}
          alt="Decorative plugs"
        />
      </div> */}
      {/* <svg
        viewBox="0 0 200 200"
        xmlns="http://www.w3.org/2000/svg"
        className={styles.hero_svg}
      >
        <path
          fill="#FFF"
          d="M28.4,-48.7C38.3,-43.4,48.9,-38.9,56.4,-30.9C63.9,-22.9,68.3,-11.5,66.5,-1.1C64.6,9.3,56.5,18.6,50.1,28.5C43.7,38.4,38.9,48.8,30.9,59.7C22.8,70.5,11.4,81.8,1.4,79.3C-8.5,76.8,-17.1,60.5,-24.9,49.6C-32.8,38.6,-40,33,-51.9,25.6C-63.7,18.2,-80.1,9.1,-85.9,-3.4C-91.8,-15.8,-87,-31.6,-75.5,-39.6C-64,-47.6,-45.8,-47.8,-32.1,-50.8C-18.4,-53.9,-9.2,-59.9,0,-59.9C9.2,-59.9,18.5,-53.9,28.4,-48.7Z"
          transform="translate(100 100)"
        />
      </svg> */}

      <div className={styles.hero_content}>
        <Typography variant="h1">
          You have needs,
          <br />
          We have <span className={styles.black_owned}>BLACK-OWNED</span>{" "}
          Businesses
        </Typography>

        <Link href="/search">
          <a className={styles.hero_cta_link}>
            <Button
              startIcon={<SearchIcon />}
              fullWidth
              disableRipple
              className={styles.hero_cta_button}
              size="large"
            >
              Try "hair", or "food"
            </Button>
          </a>
        </Link>
      </div>

      <div className={styles.custom_shape_divider_bottom_1626981879}>
        <svg
          data-name="Layer 1"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1200 120"
          preserveAspectRatio="none"
        >
          <path
            d="M985.66,92.83C906.67,72,823.78,31,743.84,14.19c-82.26-17.34-168.06-16.33-250.45.39-57.84,11.73-114,31.07-172,41.86A600.21,600.21,0,0,1,0,27.35V120H1200V95.8C1132.19,118.92,1055.71,111.31,985.66,92.83Z"
            className={styles.shape_fill}
          ></path>
        </svg>
      </div>
    </section>
  );
};

export default HeroBanner;
