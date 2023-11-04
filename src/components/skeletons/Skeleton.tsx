import { FC } from "react";

import styles from "./Skeleton.module.css";

interface Props {
  type: string;
}

const Skeleton: FC<Props> = ({ type }) => {
  return (
    <div className={`${styles.skeleton} ${styles[type]}`}>
      <Animation />
    </div>
  );
};

const Animation = () => {
  return (
    <div className={styles.animationWrapper}>
      <div className={styles.animation}></div>
    </div>
  );
};

export default Skeleton;
