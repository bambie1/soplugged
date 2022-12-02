import dynamic from "next/dynamic";
import { Controller, SubmitHandler, useForm } from "react-hook-form";

import "react-quill/dist/quill.snow.css";
import { useBusinessStore } from "@/scenes/MyBusinessPage/MyBusinessPage";
import { BusinessForm } from "layouts/BusinessForm";
import { ExclamationCircleIcon } from "@heroicons/react/solid";

const ReactQuill = dynamic(() => import("react-quill"), {
  ssr: false,
});

const toolbarOptions = [
  ["bold", "italic", "underline"],
  [{ list: "ordered" }, { list: "bullet" }],
];

interface IFormInput {
  business_description: string;
}

const Description = () => {
  const { handleNextStep, business, updateBusiness } = useBusinessStore();
  const {
    handleSubmit,
    formState: { errors },
    control,
    setValue,
  } = useForm<IFormInput>();

  const isError = false;

  const handleUpdate = (content: any) => {
    if (typeof content === "string") {
      const strippedContent = content
        .replace(/<h1>/, "<p>")
        .replace(/<\/h1>/, "</p>")
        .replace(/<h2>/, "<p>")
        .replace(/<\/h2>/, "</p>")
        .replace(/<h3>/, "<p>")
        .replace(/<\/h3>/, "</p>")
        .replace(/<h4>/, "<p>")
        .replace(/<\/h4>/, "</p>")
        .replace(/<h5>/, "<p>")
        .replace(/<\/h5>/, "</p>")
        .replace(/<h6>/, "<p>")
        .replace(/<\/h6>/, "</p>")
        .replace(/style="[^"]*"/g, "");
      setValue("business_description", strippedContent);
    }
  };

  const onSubmit: SubmitHandler<IFormInput> = async (data) => {
    updateBusiness({
      ...business,
      ...data,
    });

    handleNextStep();
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <BusinessForm>
        {errors.business_description && (
          <div className="mb-3 flex items-center justify-center gap-3 text-center font-medium text-red-500">
            <ExclamationCircleIcon
              className="h-5 w-5 text-red-500"
              aria-hidden="true"
            />
            <p>Please add a description for your business</p>
          </div>
        )}
        <div className="grid">
          <label
            htmlFor="business_description"
            className={`mb-1 text-sm font-bold uppercase ${
              isError && "text-red-500"
            }`}
          >
            Business Description
          </label>
          <Controller
            control={control}
            name="business_description"
            defaultValue={business.business_description}
            rules={{
              validate: (value) => {
                const plainText = value.replace(/<\/?[^>]+(>|$)/g, "");
                return plainText !== "";
              },
            }}
            render={({ field: { value } }) => (
              <ReactQuill
                value={value}
                onChange={handleUpdate}
                id="business_description"
                className={`${isError && "quillError"} flex max-w-full`}
                modules={{
                  clipboard: {
                    matchVisual: false,
                  },
                  toolbar: toolbarOptions,
                }}
              />
            )}
          />

          {isError && (
            <p className="text-xs text-red-500 lg:text-sm ">Error message</p>
          )}
        </div>
      </BusinessForm>
    </form>
  );
};

export default Description;