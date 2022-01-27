import { FC } from "react";

import { Button } from "@/styled/Button";

import styles from "./ProHero.module.scss";

interface Props {
  ctaHandler: any;
}

const ProHero: FC<Props> = ({ ctaHandler }) => {
  return (
    <section className={styles.hero}>
      <div className={`container ${styles.hero_content}`}>
        <div className={styles.text}>
          <h3 className={styles.tagLine}>SoPlugged PRO</h3>
          <h1>Scale your business with ease</h1>
          <p className={styles.subTitle}>
            Professional help for your website design, marketing and overall
            growth needs.
          </p>
          <Button big onClick={ctaHandler}>
            Let's Talk
          </Button>
        </div>
        <aside className={styles.image}></aside>
      </div>
      <div className={styles.divider}>
        <svg
          data-name="Layer 1"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1200 120"
          preserveAspectRatio="none"
        >
          <path
            d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z"
            className={styles.shapeFill}
          ></path>
        </svg>
      </div>
    </section>
  );
};

export default ProHero;
