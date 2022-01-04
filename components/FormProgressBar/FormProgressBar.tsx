import { useBusinessFormContext } from "@/context/businessFormContext";
import { useRouter } from "next/router";
import { FC } from "react";

import styles from "./FormProgressBar.module.scss";

interface Step {
  number: number;
  step: string;
  title: string;
}
interface Props {
  steps: Step[];
}

const FormProgressBar: FC<Props> = () => {
  const router = useRouter();
  const { currentStep, formSteps } = useBusinessFormContext();

  const handleStepClick = (step: Step) => {
    router.push(`/my-business?step=${step.step}`, undefined, { shallow: true });
  };

  const buildStyles = (step: Step) => {
    let styleStr = `${styles.formStep}`;

    if (step.number === currentStep) styleStr += ` ${styles.active}`;
    if (step.number < currentStep) styleStr += ` ${styles.completed}`;

    return styleStr;
  };

  return (
    <div className={styles.wrapper}>
      {formSteps.map((step: Step) => (
        <div
          key={step.number}
          className={buildStyles(step)}
          onClick={() => handleStepClick(step)}
        >
          <div className={styles.formStepNumber}>{step.number + 1}</div>
          <div className={styles.formStepName}>{step.title}</div>
        </div>
      ))}
    </div>
  );
};

export default FormProgressBar;
