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
        <aside className={styles.text}>
          <h3 className={styles.tagLine}>SoPlugged PRO</h3>
          <h1>Scale your business with ease</h1>
          <p className={styles.subTitle}>
            Professional help for your website design, marketing and overall
            growth needs.
          </p>
          <Button big onClick={ctaHandler}>
            Let's Talk
          </Button>
        </aside>
        <aside className={styles.image}></aside>
      </div>
    </section>
  );
};

export default ProHero;
