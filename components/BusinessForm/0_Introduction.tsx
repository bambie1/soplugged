import { FC } from "react";
import { useForm } from "react-hook-form";
import { GlobeAltIcon, ScaleIcon } from "@heroicons/react/outline";

import { BusinessForm } from "layouts/BusinessForm";
import { useBusinessStore } from "@/scenes/MyBusinessPage/MyBusinessPage";

const features = [
  {
    name: "Competitive exchange rates",
    description: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. ",
    icon: GlobeAltIcon,
  },
  {
    name: "No hidden fees",
    description: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. ",
    icon: ScaleIcon,
  },
  {
    name: "Transfers are instant",
    description: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. ",
    icon: GlobeAltIcon,
  },
  {
    name: "Mobile notifications",
    description: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. ",
    icon: ScaleIcon,
  },
];

const Introduction: FC = () => {
  const { handleNextStep, steps } = useBusinessStore();

  const { handleSubmit } = useForm();

  const onSubmit = async () => {
    handleNextStep();
  };

  return (
    <form className="grid gap-4" onSubmit={handleSubmit(onSubmit)}>
      <BusinessForm
        title="Welcome aboard!"
        subtitle="List your business on our directory in 6 simple steps"
        isWide
        // fixedText="By proceeding, you've agreed to our Community Guidelines"
      >
        <div className="">
          <div className="grid grid-cols-1 gap-y-10 md:grid-cols-2 md:gap-x-12 md:gap-y-16">
            {features.map((feature) => (
              <div
                key={feature.name}
                className="relative flex flex-col gap-2 sm:flex-row md:flex-col lg:flex-row lg:gap-6"
              >
                <div className="flex h-12 w-12 items-center justify-center rounded-xl border border-primary text-primary sm:shrink-0">
                  <feature.icon
                    className="h-8 w-8"
                    aria-hidden="true"
                    strokeWidth={0.7}
                  />
                </div>
                <div className="sm:min-w-0 sm:flex-1">
                  <p className="text-lg font-semibold text-gray-900">
                    {feature.name}
                  </p>
                  <p className="mt-2 leading-7 text-gray-600 lg:text-base">
                    {feature.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </BusinessForm>
    </form>
  );
};

export default Introduction;
