import { useForm, SubmitHandler } from "react-hook-form";
import { CheckIcon, ExclamationCircleIcon } from "@heroicons/react/solid";

import { categories } from "@/lib/categoryList";
import { BusinessForm } from "@/src/layouts/BusinessForm";
import { useBusinessStore } from "@/src/scenes/MyBusinessPage/MyBusinessPage";

interface IFormInput {
  tags: string[];
}

const Tags = () => {
  const { handleNextStep, business, updateBusiness } = useBusinessStore();

  const {
    handleSubmit,
    formState: { errors },
    register,
  } = useForm<IFormInput>();

  const onSubmit: SubmitHandler<IFormInput> = async (data) => {
    const tags = data.tags?.join(",");

    updateBusiness({
      ...business,
      tags,
    });

    handleNextStep();
  };

  const categoryTags = categories
    .find((category) => category.label === business.category)
    ?.tags.split(",");

  const defaultBusinessTags = business.tags?.split(", ");

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <BusinessForm isWide>
        {errors.tags && (
          <div className="mb-3 flex items-center justify-center gap-3 text-center font-medium text-red-500">
            <ExclamationCircleIcon
              className="h-5 w-5 text-red-500"
              aria-hidden="true"
            />
            <p>Please select at least one tag to proceed</p>
          </div>
        )}
        <ul className="grid w-full gap-4 md:grid-cols-3">
          {categoryTags?.map((tag) => (
            <li key={tag} className="relative">
              <input
                type="checkbox"
                id={`${tag}-tag`}
                value={tag}
                className="peer hidden"
                defaultChecked={defaultBusinessTags?.includes(tag)}
                {...register("tags", { required: true })}
                // onChange={(e) => console.log(e.target.value)}
              />
              <label
                htmlFor={`${tag}-tag`}
                className="inline-flex w-full cursor-pointer items-center justify-between rounded-lg border-2 border-gray-200 bg-white p-5 transition duration-100 hover:border-primary/40 hover:bg-gray-50 peer-checked:border-primary peer-checked:bg-secondary peer-checked:bg-opacity-75"
              >
                <div className="flex items-center gap-2">
                  <div className="w-full text-lg first-letter:uppercase">
                    {tag}
                  </div>
                </div>
              </label>
              <div className="absolute top-1/2 right-2 hidden shrink-0 -translate-y-1/2 peer-checked:block">
                <CheckIcon className="h-6 w-6" strokeWidth={0.5} />
              </div>
            </li>
          ))}
        </ul>
      </BusinessForm>
    </form>
  );
};

export default Tags;
