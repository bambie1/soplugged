import { useRouter } from "next/router";
import { FC } from "react";
import { useWindowSize } from "@reach/window-size";

import { Button } from "@/styled/Button";
import { steps, stepsObject } from "@/lib/stepsObject";

import styles from "./BusinessForm.module.scss";

interface Props {
  current?: number;
}

const BusinessForm: FC<Props> = ({ current = 1, children }) => {
  const { query } = useRouter();
  const { width } = useWindowSize();

  const step = typeof query.step == "string" ? query.step : "name_location";

  const currentStep = steps[stepsObject[step]];

  const isMobile = width < 768;

  const renderStepInfo = () => {
    return (
      <aside className={`${styles.stepInfo} container`}>
        {/* <h1>{steps[current].name}</h1>
        <p>{steps[current].description}</p> */}
        <h1>{currentStep.name}</h1>
        <p>{currentStep.description}</p>
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

export default BusinessForm;
