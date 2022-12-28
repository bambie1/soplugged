import { FC } from "react";
import Link from "next/link";
import { useForm } from "react-hook-form";
import {
  ArrowRightIcon,
  HeartIcon,
  LightBulbIcon,
  OfficeBuildingIcon,
  QuestionMarkCircleIcon,
} from "@heroicons/react/outline";

import { BusinessForm } from "@/src/layouts/BusinessForm";
import { useBusinessStore } from "@/src/scenes/MyBusinessPage/MyBusinessPage";

const features = [
  {
    name: "Community guidelines",
    description: (
      <>
        By proceeding, you are confirming to abide by{" "}
        <Link href="/guidelines">
          <a className="underline" target="_blank">
            our community guidelines
          </a>
        </Link>
      </>
    ),
    icon: HeartIcon,
  },
  {
    name: "Your dashboard",
    description:
      "After registering your business, you can always update your info from your dashboard",
    icon: OfficeBuildingIcon,
  },
  {
    name: "Need a hand?",
    description:
      "If you run into any issues, please click the 'question-mark' icon at the top to let us know",
    icon: QuestionMarkCircleIcon,
  },
  {
    name: "Helpul tip",
    description:
      "To rank higher in our directory, make sure to upload sample images of your business",
    icon: LightBulbIcon,
  },
];

const Introduction: FC = () => {
  const { handleNextStep, steps, business, updateCurrentStep } =
    useBusinessStore();

  const isNewBusiness = !business?.slug;

  const { handleSubmit } = useForm();

  const onSubmit = async () => {
    handleNextStep();
  };

  const renderIntro = () => (
    <div className="grid grid-cols-1 gap-y-10 md:grid-cols-2 md:gap-x-12 md:gap-y-16">
      {features.map((feature) => (
        <div
          key={feature.name}
          className="relative flex flex-col gap-2 sm:flex-row md:flex-col lg:flex-row lg:gap-6"
        >
          <div className="flex h-8 w-8 items-center justify-center rounded-xl border border-primary text-primary sm:shrink-0 lg:h-12 lg:w-12">
            <feature.icon
              className="aspect-square h-5 lg:h-8"
              aria-hidden="true"
              strokeWidth={0.7}
            />
          </div>
          <div className="sm:min-w-0 sm:flex-1">
            <p className="font-medium text-gray-900 md:text-lg lg:font-semibold">
              {feature.name}
            </p>
            <p className="mt-1 leading-7 text-gray-600 lg:text-base">
              {feature.description}
            </p>
          </div>
        </div>
      ))}
    </div>
  );

  const renderSteps = () => {
    return (
      <div className="grid grid-cols-1 gap-y-7 md:grid-cols-2 md:gap-y-10 md:gap-x-10">
        {steps.map((step) => {
          const isDisabled = step.number === steps.length;
          return (
            <button
              key={step.number}
              onClick={() => updateCurrentStep(step.number)}
              className="group flex flex-col rounded-lg border-[.5px] border-primary/20 p-4 text-left transition duration-150 hover:border-primary hover:shadow-sm disabled:hover:shadow-none md:p-6"
              disabled={isDisabled}
            >
              <p className="flex items-center gap-3 text-lg font-semibold text-gray-700">
                {step.name}
                <ArrowRightIcon
                  className={`h-6 w-6 transition duration-150 ${
                    !isDisabled && "group-hover:translate-x-2"
                  }`}
                  strokeWidth={0.5}
                />
              </p>
              <p className="text-gray-600 lg:text-base">{step.description}</p>
            </button>
          );
        })}
      </div>
    );
  };

  return (
    <form className="grid gap-4" onSubmit={handleSubmit(onSubmit)}>
      <BusinessForm
        title={isNewBusiness ? "Welcome aboard!" : "Welcome back!"}
        subtitle={
          isNewBusiness
            ? "We're happy to have your business listed on our directory"
            : "Pick any step from below to edit, or just 'Get started'"
        }
        isWide
      >
        {isNewBusiness ? renderIntro() : renderSteps()}
      </BusinessForm>
    </form>
  );
};

export default Introduction;
