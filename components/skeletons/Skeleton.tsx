import { FC } from "react";
import Animation from "./Animation";

import styles from "./Skeleton.module.scss";

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

export default Skeleton;
