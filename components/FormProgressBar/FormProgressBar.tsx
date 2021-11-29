import { stepsObject } from "@/lib/stepsObject";
import { useRouter } from "next/router";
import { FC } from "react";

import styles from "./FormProgressBar.module.scss";

interface Step {
  number: number;
  step: string;
  name: string;
}
interface Props {
  steps: Step[];
}

const FormProgressBar: FC<Props> = ({ steps }) => {
  const router = useRouter();
  const currentStep =
    !router.query || typeof router.query.step != "string"
      ? "one"
      : router.query.step;

  const currentNumber = stepsObject[currentStep];

  const handleStepClick = (step: Step) => {
    router.push(`/my-business?step=${step.step}`, undefined, { shallow: true });
  };

  const buildStyles = (step: Step) => {
    let styleStr = `${styles.formStep}`;

    if (step.step == currentStep) styleStr += ` ${styles.active}`;
    if (step.number < currentNumber) styleStr += ` ${styles.completed}`;

    return styleStr;
  };

  return (
    <div className={styles.wrapper}>
      {steps.map((step: Step) => (
        <div
          key={step.number}
          className={buildStyles(step)}
          onClick={() => handleStepClick(step)}
        >
          <div className={styles.formStepNumber}>{step.number}</div>
          <div className={styles.formStepName}>{step.name}</div>
        </div>
      ))}
    </div>
  );
};

export default FormProgressBar;
