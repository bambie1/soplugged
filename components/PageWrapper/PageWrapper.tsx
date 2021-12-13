import { FC, ReactNode } from "react";

import styles from "./PageWrapper.module.scss";

interface Props {
  hasHero?: boolean;
  center?: boolean;
  isSlim?: boolean;
  children: ReactNode;
}

const PageWrapper: FC<Props> = ({ hasHero, center, children, isSlim }) => {
  const buildStyle = () => {
    return `${styles.page} ${hasHero ? styles.withHero : ""} ${
      center ? styles.center : ""
    } ${isSlim ? styles.slim : ""} container`;
  };

  return <div className={buildStyle()}>{children}</div>;
};

export default PageWrapper;
