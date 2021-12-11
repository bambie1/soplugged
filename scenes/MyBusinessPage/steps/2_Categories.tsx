import { Fragment } from "react";
import { useRouter } from "next/router";
import Image from "next/image";
import { useForm } from "react-hook-form";
import { useStateMachine } from "little-state-machine";

import { categories } from "@/lib/categoryList";
import { IBusiness } from "@/types/Business";

import { BusinessForm } from "layouts/BusinessForm";
import { updateAction } from "../littleStateMachine/updateAction";

import styles from "../MyBusinessPage.module.scss";

const Categories = () => {
  const router = useRouter();

  const { state, actions } = useStateMachine({ updateAction });
  const { handleSubmit, register } = useForm<IBusiness>({
    defaultValues: state.businessDetails,
  });

  const onSubmit = (data: any) => {
    actions.updateAction({
      businessDetails: data,
    });
    router.push("/my-business?step=description_contact", undefined, {
      shallow: true,
    });
  };

  return (
    <>
      <form onSubmit={handleSubmit(onSubmit)}>
        <BusinessForm current={2}>
          <div className={`${styles.categories}`}>
            {categories.map(({ tags, label, value, imageSrc }) => (
              <Fragment key={label}>
                <label htmlFor={value} key={label} className={styles.label}>
                  <input
                    type="radio"
                    value={label}
                    aria-label={label}
                    id={value}
                    className={styles.input}
                    {...register("category")}
                  />
                  <div className={styles.categoryImage}>
                    <Image src={imageSrc} width={20} height={20} alt={label} />
                    <p>{label}</p>
                  </div>
                </label>
              </Fragment>
            ))}
          </div>
        </BusinessForm>
      </form>
    </>
  );
};

export default Categories;
