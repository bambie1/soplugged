import { FC } from "react";
import { useWindowSize } from "@reach/window-size";

import { useBusinessFormContext } from "@/context/businessFormContext";

import styles from "./BusinessForm.module.scss";

interface Props {
  current?: number;
}

const BusinessForm: FC<Props> = ({ children }) => {
  const { width } = useWindowSize();

  const { currentStep, formSteps } = useBusinessFormContext();

  const step = formSteps[currentStep];

  const isMobile = width < 768;

  const renderStepInfo = () => {
    return (
      <aside className={`${styles.stepInfo} my-container md:h-screen`}>
        <h1 className="h1 mx-auto max-w-lg md:mx-0">{step.title}</h1>
        <h2 className={styles.stepDescription}>{step.description}</h2>
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
          <div className={`${styles.content} flex flex-col items-center`}>
            {children}
          </div>
        </aside>
      </section>
    </>
  );
};

export default BusinessForm;
