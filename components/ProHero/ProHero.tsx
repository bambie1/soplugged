import { FC } from "react";

import { Button } from "@/styled/Button";

import styles from "./ProHero.module.scss";
import { ButtonLink } from "@/styled/ButtonLink";

interface Props {
  ctaHandler: any;
}

const ProHero: FC<Props> = ({ ctaHandler }) => {
  return (
    <section className={styles.hero}>
      <div className={`container ${styles.hero_content}`}>
        <h3 className={styles.tagLine}>SoPlugged PRO</h3>
        <h1>Scale your business with ease</h1>
        <p className={styles.subTitle}>
          From strategic recommendations to professional services, our team of
          experts is ready to work with you and provide all the support you need
          to grow your business.
        </p>
        <div className={styles.btnGroup}>
          <ButtonLink big href="#how-it-works" variant="filled">
            Learn More
          </ButtonLink>
          <Button big onClick={ctaHandler} variant="outlined">
            Let's Talk
          </Button>
        </div>
      </div>
    </section>
  );
};

export default ProHero;
