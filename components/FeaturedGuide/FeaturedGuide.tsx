import { FC } from "react";

import styles from "./FeaturedGuide.module.scss";

interface Props {
  feature: any;
}

const FeaturedGuide: FC<Props> = ({ feature }) => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.grid}>
        <div />
        <div className={styles.content}>
          <p>FEATURED</p>
          <h2>{feature.title}</h2>
          <p>{feature.excerpt}</p>
        </div>
      </div>
    </div>
  );
};

export default FeaturedGuide;
