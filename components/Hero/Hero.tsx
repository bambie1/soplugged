import Link from "next/link";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import { Stats } from "../Stats";

import styles from "./Hero.module.scss";

const Hero = () => {
  return (
    <>
      <section className={styles.hero}>
        <div className={styles.hero_content}>
          <h1>
            Find <span>black-owned</span>
            <br></br> businesses in Canada
          </h1>
          <p className={styles.subtitle}>
            We are bringing #buyingblack to your doorstep
          </p>

          <div className={styles.cta_box}>
            <Link href="/search">
              <a className={styles.hero_cta_link}>
                <div className={styles.hero_cta_button}>
                  <FontAwesomeIcon icon={faSearch} />
                  <p>Search by business name, category, or location</p>
                </div>
              </a>
            </Link>

            <Link href="/dashboard">
              <a>I am an entrepreneur</a>
            </Link>
          </div>
        </div>
      </section>
      <Stats />
    </>
  );
};

export default Hero;
