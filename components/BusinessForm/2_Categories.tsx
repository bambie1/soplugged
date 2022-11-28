import Image from "next/image";
import { useForm, SubmitHandler } from "react-hook-form";

import { categories } from "@/lib/categoryList";
import { BusinessForm } from "layouts/BusinessForm";
import { Button } from "@/styled/Button";
import { useBusinessStore } from "@/scenes/MyBusinessPage/MyBusinessPage";

import styles from "./BusinessForm.module.scss";

interface IFormInput {
  category: string;
}

const Categories = () => {
  const { handleNextStep, business, updateBusiness } = useBusinessStore();

  const {
    handleSubmit,
    register,
    formState: { errors },
  } = useForm<IFormInput>();

  console.log({ business });

  const onSubmit: SubmitHandler<IFormInput> = async (data) => {
    updateBusiness({
      ...business,
      ...data,
    });

    handleNextStep();
  };

  return (
    <BusinessForm
      title="Category"
      subtitle="Select the most-fitting category for your business"
      isWide
    >
      <form className="grid gap-4" onSubmit={handleSubmit(onSubmit)}>
        <div
          role="group"
          aria-labelledby="categories-group"
          className="grid gap-3 md:grid-cols-2 lg:grid-cols-3 lg:gap-4"
        >
          {categories.map(({ label, imageSrc }) => (
            <label key={label} htmlFor={label}>
              <input
                {...(register("category"), { required: true })}
                id={label}
                value={label}
                type="radio"
                className={styles.input}
              />

              <div
                className={`flex w-full cursor-pointer items-center gap-2 truncate rounded-lg border border-primary p-4 text-center text-primary hover:border-secondary ${
                  business.category === label && "bg-secondary"
                }`}
              >
                <div className="relative h-5 w-5 shrink-0">
                  <Image
                    src={imageSrc}
                    objectFit="cover"
                    layout="fill"
                    alt={label}
                  />
                </div>
                <p>{label}</p>
              </div>
            </label>
          ))}
        </div>
        <div className="fixed bottom-0 left-0 flex w-full justify-center bg-white p-2 shadow-bottom-nav">
          <div className="grid w-full max-w-xl">
            <Button type="submit">Next</Button>
          </div>
        </div>
      </form>
    </BusinessForm>
  );
};

export default Categories;
