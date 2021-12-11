import { useRouter } from "next/router";
import { FC } from "react";
import { useWindowSize } from "@reach/window-size";

import { Button } from "@/styled/Button";
import { steps } from "@/lib/stepsObject";

import styles from "./BusinessForm.module.scss";

interface Props {
  current?: number;
}

const BusinessForm: FC<Props> = ({ current = 1, children }) => {
  const router = useRouter();
  const { width } = useWindowSize();

  const isMobile = width < 768;

  const handlePrevious = () => {
    router.push(`/my-business?step=${steps[current - 1]["step"]}`, undefined, {
      shallow: true,
    });
  };

  const buildStyle = () => `${styles.prevButton}  button`;

  const renderStepInfo = () => {
    return (
      <aside className={`${styles.stepInfo} container`}>
        <h1>{steps[current].name}</h1>
        <p>{steps[current].description}</p>
      </aside>
    );
  };

  if (isMobile)
    return (
      <div className={styles.mobileWrapper}>
        {renderStepInfo()}
        <aside className={styles.mobileContent}>{children}</aside>
        <div className={styles.navigation}>
          <button
            type="button"
            onClick={handlePrevious}
            className={buildStyle()}
            disabled={current <= 1}
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
      {renderStepInfo()}
      <section className={styles.grid}>
        <aside className={styles.container}>
          <div className={`${styles.content} column flex-center`}>
            {children}
          </div>

          <div className={styles.navigation}>
            <button
              type="button"
              onClick={handlePrevious}
              className={buildStyle()}
              disabled={current <= 1}
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
