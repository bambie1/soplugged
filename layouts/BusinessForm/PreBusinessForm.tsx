import { FC } from "react";
import { useWindowSize } from "@reach/window-size";

import styles from "./BusinessForm.module.scss";

interface Props {
  current?: number;
}

const PreBusinessForm: FC<Props> = ({ children }) => {
  const { user } = {
    user: {
      email: "",
      displayName: "",
    },
  };
  const { width } = useWindowSize();

  const isMobile = width < 768;

  const renderStepInfo = () => {
    return (
      <aside className={`${styles.stepInfo} container`}>
        <h1 className={styles.stepName}>
          Hi {user?.displayName?.split(" ")[0] || "there"},
        </h1>
        <h2 className={styles.stepDescription}>
          Welcome to your SoPlugged business page builder{" "}
        </h2>
      </aside>
    );
  };

  if (isMobile)
    return (
      <div className={styles.mobileWrapper}>
        {renderStepInfo()}
        <aside className={styles.mobileContent}>{children}</aside>
      </div>
    );

  return (
    <>
      <div className={styles.background}></div>
      {renderStepInfo()}
      <section className={styles.grid}>
        <aside className={styles.container}>
          <div className={`${styles.content} column flex-center`}>
            {children}
          </div>
        </aside>
      </section>
    </>
  );
};

export { PreBusinessForm };
