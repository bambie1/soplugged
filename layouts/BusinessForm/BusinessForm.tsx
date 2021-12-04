import { useRouter } from "next/router";
import { FC } from "react";
import { useWindowSize } from "@reach/window-size";

import { Button } from "@/styled/Button";
import { steps } from "@/lib/stepsObject";

import styles from "./BusinessForm.module.scss";

const BusinessForm: FC = ({ children }) => {
  const router = useRouter();
  const { width } = useWindowSize();

  const queryStep = router.query.step || "one";
  const current = steps.findIndex(({ step }) => step == queryStep) || 0;

  const isMobile = width < 768;

  const handlePrevious = () => {
    router.push(`/my-business?step=${steps[current - 1]["step"]}`, undefined, {
      shallow: true,
    });
  };

  const renderStyle = () =>
    `${styles.prevButton} ${current === 0 && styles.disabled} button`;

  if (isMobile)
    return (
      <div className={styles.mobileWrapper}>
        <aside className={`${styles.stepInfo} container`}>
          <h1>{steps[current].name}</h1>
          <p>{steps[current].description}</p>
        </aside>

        <aside className={styles.mobileContent}>{children}</aside>
        <div className={styles.navigation}>
          <button
            type="button"
            onClick={handlePrevious}
            className={renderStyle()}
          >
            Go Back
          </button>
          <Button type="submit">Next</Button>
        </div>
      </div>
    );

  return (
    <>
      <div className={styles.background}></div>
      <aside className={`${styles.stepInfo} container`}>
        <h1>{steps[current].name}</h1>
        <p>{steps[current].description}</p>
      </aside>
      <section className={styles.grid}>
        <aside className={styles.container}>
          <div className={`${styles.content} column flex-center`}>
            {children}
          </div>

          <div className={styles.navigation}>
            <button
              type="button"
              onClick={handlePrevious}
              className={renderStyle()}
            >
              Go Back
            </button>
            <Button type="submit">Next</Button>
          </div>
        </aside>
      </section>
    </>
  );
};

export default BusinessForm;
