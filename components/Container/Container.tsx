import { FC } from "react";
import styles from "./Container.module.scss";

const Container: FC = ({ children }) => {
  return <div className={`${styles.container} container`}>{children}</div>;
};

export default Container;
