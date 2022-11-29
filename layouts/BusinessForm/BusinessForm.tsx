import { FC } from "react";

import Skeleton from "@/components/skeletons/Skeleton";
import { useBusinessStore } from "@/scenes/MyBusinessPage/MyBusinessPage";
import { Button } from "@/styled/Button";

interface Props {
  skeleton?: boolean;
  title: string;
  subtitle: string;
  isWide?: boolean;
}

const BusinessForm: FC<Props> = ({
  children,
  title,
  isWide,
  subtitle,
  skeleton,
}) => {
  const { currentStep, steps, handlePreviousStep } = useBusinessStore();

  const percentage = (currentStep / (steps.length - 1)) * 100;

  const renderSteps = () => {
    return (
      <aside className="flex items-center">
        <ul className="flex flex-1 flex-col gap-4">
          {steps.map((step: any) => (
            <li
              key={step.title}
              className={`${
                step.number === currentStep ? "font-bold" : "text-gray-600"
              } transition duration-150 lg:text-lg`}
            >
              {step.title}
            </li>
          ))}
        </ul>
      </aside>
    );
  };

  const renderStepInfo = () => {
    if (skeleton)
      return (
        <div className="flex justify-center">
          <Skeleton type="title" />
        </div>
      );

    return (
      <>
        <h1 className="mx-auto mt-12 max-w-lg text-center text-4xl font-bold text-primary lg:text-5xl">
          {title}
        </h1>
        <h2 className="mb-4 mt-2 text-center md:text-lg lg:mb-10 lg:text-xl">
          {subtitle}
        </h2>
      </>
    );
  };

  return (
    <>
      <div className="relative flex min-h-screen flex-col">
        <div className="absolute top-0 left-0 -z-[1] h-1/3 w-full bg-gradient-to-b from-secondary/40"></div>
        <div className={`my-container px-4 pt-20 pb-20 lg:max-w-3xl lg:pt-24`}>
          <div className="mx-auto flex w-[90%] max-w-2xl flex-col bg-white">
            <progress value={percentage} max="100" className="progress">
              {percentage}%
            </progress>
          </div>

          <Button
            variant="text"
            onClick={handlePreviousStep}
            disabled={currentStep === 0}
          >
            Back
          </Button>
          <div className="pb-10">{renderStepInfo()}</div>
          {children}
        </div>
      </div>
    </>
  );
};

export default BusinessForm;
