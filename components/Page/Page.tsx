import { FC } from "react";
import styles from "./Page.module.scss";

const Page: FC = ({ children }) => {
  return <div className={styles.page}>{children}</div>;
};

export default Page;
