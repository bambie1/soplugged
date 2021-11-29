import { useRouter } from "next/router";
import Image from "next/image";
import { FC } from "react";
import { FormProgressBar } from "@/components/FormProgressBar";

import styles from "./BusinessForm.module.scss";
import { Button } from "@/styled/Button";

const steps = [
  { number: 1, step: "one", name: "Name & Location" },
  { number: 2, step: "two", name: "Category" },
  { number: 3, step: "three", name: "Description & Contact" },
  { number: 4, step: "four", name: "Images" },
  { number: 5, step: "review", name: "Review" },
];

const BusinessForm: FC = ({ children }) => {
  const router = useRouter();
  const queryStep = router.query.step || "one";
  const current = steps.findIndex(({ step }) => step == queryStep) || 0;

  const handlePrevious = () => {
    router.push(`/my-business?step=${steps[current - 1]["step"]}`, undefined, {
      shallow: true,
    });
  };

  const renderGoBack = () => {
    const renderStyle = () =>
      `${styles.prevButton} ${current === 0 && styles.disabled}`;

    return (
      <p onClick={handlePrevious} className={renderStyle()}>
        Go back
      </p>
    );
  };

  return (
    <section className={styles.pageWrapper}>
      <div className={styles.bgLeft} />
      <h1 className="center">My Business</h1>
      <div className={`${styles.grid} container`}>
        <aside className={styles.stepInfo}>
          <FormProgressBar steps={steps} />
        </aside>
        <aside>
          {renderGoBack()}
          {children}
        </aside>
      </div>
    </section>
  );
};

export default BusinessForm;
