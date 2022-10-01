import { FC } from "react";

import { useBusinessFormContext } from "@/context/businessFormContext";

import styles from "./BusinessForm.module.scss";

interface Props {
  current?: number;
  skeleton?: boolean;
}

const BusinessForm: FC<Props> = ({ children, skeleton }) => {
  const { currentStep, formSteps } = useBusinessFormContext();

  const step = formSteps[currentStep];

  const renderStepInfo = () => {
    return (
      !skeleton && (
        <aside className={`${styles.stepInfo}`}>
          <h1 key={step.title} className="h1 roll-out mx-auto max-w-lg md:mx-0">
            {step.title}
          </h1>
          <h2 className={styles.stepDescription}>{step.description}</h2>
        </aside>
      )
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
          <div className={`${styles.content} flex flex-col`}>{children}</div>
        </aside>
      </section>
    </>
  );
};

export default BusinessForm;
