import { Typography, Button } from "@material/mui-components";
import { NavigateNextIcon } from "@material/mui-icons";
import Image from "next/image";
import Link from "next/link";
import styles from "../styles/Hero.module.scss";

const HeroBanner = () => {
  return (
    <section className={styles.hero}>
      <svg
        className={styles.svg_left}
        viewBox="0 0 200 200"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          fill="rgb(255,255,255, 0.2)"
          d="M63.1,-22.9C68.9,-2.5,52,22.9,36.1,29.7C20.2,36.5,5.4,24.7,-10.1,13.5C-25.7,2.3,-41.9,-8.3,-40.3,-22.8C-38.7,-37.3,-19.4,-55.8,4.6,-57.3C28.6,-58.8,57.2,-43.3,63.1,-22.9Z"
          transform="translate(100 100)"
        />
      </svg>
      <svg
        className={styles.svg_right}
        viewBox="0 0 200 200"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          fill="rgb(255,255,255, 0.2)"
          d="M52.7,-70.3C68.5,-61,81.7,-45.9,85.1,-29.2C88.4,-12.4,81.9,6.1,70.5,17.3C59.1,28.5,42.8,32.5,30.3,36.7C17.7,40.8,8.9,45,-0.4,45.6C-9.7,46.2,-19.4,43.1,-25.1,36.7C-30.9,30.4,-32.7,20.8,-40.2,10.1C-47.7,-0.6,-61,-12.3,-59.1,-19.5C-57.2,-26.7,-40.2,-29.3,-27.8,-39.7C-15.4,-50.1,-7.7,-68.4,5.4,-75.7C18.4,-83.1,36.9,-79.6,52.7,-70.3Z"
          transform="translate(100 100)"
        />
      </svg>

      <div className={styles.hero_content}>
        <Typography variant="h1">
          You have needs,
          <br />
          We have <span className={styles.black_owned}>BLACK-OWNED</span>{" "}
          Businesses
        </Typography>
        <Link href="/search" className={styles.hero_cta_white}>
          <a>
            <Button
              variant="contained"
              size="large"
              className={styles.hero_cta_white}
            >
              Begin your search
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
