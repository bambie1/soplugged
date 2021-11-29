import { FC, ReactNode } from "react";

import styles from "./PageWrapper.module.scss";

interface Props {
  hasHero?: boolean;
  center?: boolean;
  children: ReactNode;
}

const PageWrapper: FC<Props> = ({ hasHero, center, children }) => {
  const buildStyle = () => {
    return `${styles.page} ${hasHero ? styles.withHero : ""} ${
      center ? styles.center : ""
    } container`;
  };

  return <div className={buildStyle()}>{children}</div>;
};

export default PageWrapper;
