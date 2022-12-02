import { FC } from "react";

import Skeleton from "@/components/skeletons/Skeleton";
import { useBusinessStore } from "@/scenes/MyBusinessPage/MyBusinessPage";
import { Button } from "@/styled/Button";

interface Props {
  skeleton?: boolean;
  title?: string;
  subtitle?: string;
  isWide?: boolean;
}

const BusinessForm: FC<Props> = ({
  children,
  title,
  isWide,
  subtitle,
  skeleton,
}) => {
  const { currentStep, steps } = useBusinessStore();

  const renderStepInfo = () => {
    if (skeleton)
      return (
        <div className="flex justify-center">
          <Skeleton type="title" />
        </div>
      );

    return (
      <>
        <h1 className="mx-auto mt-12 max-w-xl text-center text-4xl font-bold text-primary lg:text-5xl">
          {steps[currentStep - 1]?.name || title}
        </h1>
        <h2 className="mb-4 mt-3 text-center md:text-lg lg:mb-10 lg:text-xl">
          {steps[currentStep - 1]?.description || subtitle}
        </h2>
      </>
    );
  };

  return (
    <>
      <div className="relative flex min-h-screen flex-col">
        <div className="my-container px-4 pt-8 pb-20 lg:pt-12">
          <div className="pb-10 pt-10">{renderStepInfo()}</div>

          <div className={`mx-auto ${isWide ? "max-w-3xl" : "max-w-xl"}`}>
            {children}
          </div>
        </div>
      </div>

      <div className="fixed bottom-0 left-0 flex w-full justify-center border-primary/20 bg-white p-2 shadow-bottom-nav lg:border-t lg:shadow-none">
        <div className="grid w-full max-w-xl">
          <Button type="submit">
            {currentStep === 0
              ? "Get started"
              : currentStep === steps.length
              ? "Submit"
              : "Next"}
          </Button>
        </div>
      </div>
    </>
  );
};

export default BusinessForm;
