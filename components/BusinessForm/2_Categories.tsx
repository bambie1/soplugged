import Image from "next/image";
import { useForm, SubmitHandler, Controller } from "react-hook-form";
import { RadioGroup } from "@headlessui/react";
import { CheckIcon, ExclamationCircleIcon } from "@heroicons/react/solid";

import { categories } from "@/lib/categoryList";
import { BusinessForm } from "layouts/BusinessForm";
import { useBusinessStore } from "@/scenes/MyBusinessPage/MyBusinessPage";

interface IFormInput {
  category: string;
}

const Categories = () => {
  const { handleNextStep, business, updateBusiness } = useBusinessStore();

  const {
    handleSubmit,
    formState: { errors },
    control,
  } = useForm<IFormInput>();

  const onSubmit: SubmitHandler<IFormInput> = async (data) => {
    updateBusiness({
      ...business,
      ...data,
    });

    handleNextStep();
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <BusinessForm isWide>
        {errors.category && (
          <div className="mb-3 flex items-center justify-center gap-3 text-center font-medium text-red-500">
            <ExclamationCircleIcon
              className="h-5 w-5 text-red-500"
              aria-hidden="true"
            />
            <p>Please select a category to proceed</p>
          </div>
        )}
        <div className="grid gap-4">
          <Controller
            control={control}
            name="category"
            defaultValue={business.category}
            rules={{ required: true }}
            render={({ field: { onChange, value } }) => (
              <RadioGroup
                value={value}
                onChange={onChange}
                className="grid gap-4 lg:grid-cols-2"
              >
                {categories.map(({ label, imageSrc }) => (
                  <RadioGroup.Option
                    key={label}
                    value={label}
                    className={({ active, checked }) =>
                      `${
                        active
                          ? "ring-1 ring-white ring-opacity-60 ring-offset-1 ring-offset-primary"
                          : ""
                      }
                  ${checked ? "bg-secondary bg-opacity-75" : ""}
                    relative flex cursor-pointer rounded-lg border px-5 py-4 shadow-sm transition duration-100 hover:border-primary/40 hover:shadow-none focus:outline-none`
                    }
                  >
                    {({ checked }) => (
                      <>
                        <div className="flex w-full items-center justify-between">
                          <div className="flex items-center gap-2">
                            <div className="relative h-5 w-5 shrink-0">
                              <Image
                                src={imageSrc}
                                objectFit="cover"
                                layout="fill"
                                alt={label}
                              />
                            </div>
                            <div className="">
                              <RadioGroup.Label
                                as="p"
                                className="text-gray-900"
                              >
                                {label}
                              </RadioGroup.Label>
                            </div>
                          </div>
                          {checked && (
                            <div className="shrink-0">
                              <CheckIcon
                                className="h-6 w-6"
                                strokeWidth={0.5}
                              />
                            </div>
                          )}
                        </div>
                      </>
                    )}
                  </RadioGroup.Option>
                ))}
              </RadioGroup>
            )}
          />
        </div>
      </BusinessForm>
    </form>
  );
};

export default Categories;