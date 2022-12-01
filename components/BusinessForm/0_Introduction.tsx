import { FC } from "react";
import { useForm } from "react-hook-form";

import { BusinessForm } from "layouts/BusinessForm";
import { useBusinessStore } from "@/scenes/MyBusinessPage/MyBusinessPage";

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
      >
        <ul className="grid gap-8 md:grid-cols-2 lg:gap-10">
          {steps.map((step) => (
            <li key={step.number}>
              <p className="font-medium">{step.name}</p>
              <p className="font-light text-gray-600">{step.description}</p>
            </li>
          ))}
        </ul>
      </BusinessForm>
    </form>
  );
};

export default Introduction;
