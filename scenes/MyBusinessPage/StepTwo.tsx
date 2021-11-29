import { Fragment } from "react";
import { useRouter } from "next/router";
import Image from "next/image";
import { useForm } from "react-hook-form";
import { useStateMachine } from "little-state-machine";
import Tooltip from "@reach/tooltip";

import { categories } from "@/lib/categoryList";
import { Button } from "@/styled/Button";
import { IBusiness } from "@/types/Business";

import { updateAction } from "./littleStateMachine/updateAction";
import styles from "./MyBusinessPage.module.scss";

const StepTwoPage = () => {
  const router = useRouter();

  const { state, actions } = useStateMachine({ updateAction });
  const { handleSubmit, register } = useForm<IBusiness>({
    defaultValues: state.businessDetails,
  });

  const onSubmit = (data: any) => {
    actions.updateAction({
      businessDetails: data,
    });
    router.push("/my-business?step=three", undefined, { shallow: true });
  };

  return (
    <>
      <form onSubmit={handleSubmit(onSubmit)} className={styles.form}>
        <div className={`${styles.categories}`}>
          {categories.map(({ tags, label, imageSrc }) => (
            <Fragment key={label}>
              <label key={label} className={styles.label}>
                <input
                  type="radio"
                  value={label}
                  aria-label={label}
                  className={styles.input}
                  {...register("category")}
                />
                <Tooltip label={label}>
                  <div className={styles.categoryImage}>
                    <Image src={imageSrc} width={20} height={20} alt={label} />
                    <p>{label}</p>
                  </div>
                </Tooltip>
              </label>
            </Fragment>
          ))}
        </div>
        <Button type="submit">Next</Button>
      </form>
    </>
  );
};

export default StepTwoPage;
