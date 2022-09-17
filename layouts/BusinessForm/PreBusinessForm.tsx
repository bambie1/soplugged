import { FC } from "react";
import { useSession } from "next-auth/react";

import styles from "./BusinessForm.module.scss";

interface Props {
  current?: number;
}

const PreBusinessForm: FC<Props> = ({ children }) => {
  const { data: session } = useSession();

  const renderStepInfo = () => {
    return (
      <aside className={`${styles.stepInfo}`}>
        <h1 className="h1">
          Hi {session?.user?.name?.split(" ")[0] || "there"},
        </h1>
        <h2 className={styles.stepDescription}>
          Welcome to your SoPlugged business page builder{" "}
        </h2>
      </aside>
    );
  };

  return (
    <>
      {/* mobile view */}
      <div className={styles.mobileWrapper}>
        {renderStepInfo()}
        <aside className={styles.mobileContent}>{children}</aside>
      </div>

      {/* tablet+ view */}
      <div className={styles.background}></div>
      <section className={`${styles.grid} my-container`}>
        {renderStepInfo()}
        <aside className={styles.container}>
          <div className={`${styles.content} `}>{children}</div>
        </aside>
      </section>
    </>
  );
};

export { PreBusinessForm };
