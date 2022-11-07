import { FC } from "react";

import { useBusinessFormContext } from "@/context/businessFormContext";
import Skeleton from "@/components/skeletons/Skeleton";

interface Props {
  skeleton?: boolean;
  business?: any;
}

const BusinessForm: FC<Props> = ({ children, business, skeleton }) => {
  const { currentStep, formSteps, agreementSigned } = useBusinessFormContext();

  const step = formSteps[currentStep];

  const renderSteps = () => {
    return (
      <aside className="flex items-center">
        <ul className="flex flex-1 flex-col gap-4">
          {formSteps.map((step: any) => (
            <li
              key={step.title}
              className={`${
                step.number === currentStep && (agreementSigned || !!business)
                  ? "font-bold"
                  : "text-gray-600"
              } transition duration-150 lg:text-lg`}
            >
              {step.title}
            </li>
          ))}
          <li></li>
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
          {agreementSigned || !!business ? step.title : "Welcome aboard!"}
        </h1>
        <h2 className="mb-4 mt-2 text-center md:text-lg lg:mb-10 lg:text-xl">
          {agreementSigned || !!business
            ? step.description
            : "Please confirm the following to get started"}
        </h2>
      </>
    );
  };

  return (
    <>
      {/* mobile view */}
      <div className="relative flex min-h-screen flex-col md:hidden">
        <div className="absolute top-0 left-0 -z-[1] h-1/3 w-full bg-gradient-to-b from-secondary/40"></div>
        <div className="px-4 pt-10 pb-10 lg:pt-24">{renderStepInfo()}</div>
        <div className={`${skeleton && "px-2"} pb-20`}>{children}</div>
      </div>

      {/* tablet+ view */}
      <div className="absolute left-0 -z-[1] hidden min-h-screen w-[30%] bg-gradient-to-b from-secondary to-accent md:block"></div>
      <section className="my-container hidden min-h-screen grid-cols-3 pt-24 md:grid">
        {renderSteps()}
        <div className="relative col-span-2 col-start-2 mx-auto flex w-full justify-center">
          <div className="flex w-full flex-col">
            {renderStepInfo()}
            {children}
          </div>
        </div>
      </section>
    </>
  );
};

export default BusinessForm;
