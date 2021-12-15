import { useRouter } from "next/router";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { useStateMachine } from "little-state-machine";
import toast from "react-hot-toast";
import slugify from "slugify";

import { Input } from "@/styled/Input";
import { IBusiness } from "@/types/Business";
import { updateBusiness } from "@/utils/updateBusiness";
import { useAuth } from "@/context/authContext";
import { useBusinessFormContext } from "@/context/businessFormContext";

import { updateAction } from "../littleStateMachine/updateAction";
import { BusinessForm } from "layouts/BusinessForm";

import styles from "../MyBusinessPage.module.scss";
import Success from "./7_Success";

const Review = () => {
  const router = useRouter();
  const { user } = useAuth();
  const { state, actions } = useStateMachine({ updateAction });
  const { handleSubmit, register } = useForm<IBusiness>({
    defaultValues: state.businessDetails,
  });
  const { isNew } = useBusinessFormContext();
  const [isSubmitted, setIsSubmitted] = useState(false);

  const onSubmit = async (data: any) => {
    const res = await updateBusiness(data, isNew);

    if (res.ok) {
      setIsSubmitted(true);
      actions.updateAction({
        businessDetails: {
          ...data,
          slug: slugify(data.business_name.trim(), {
            lower: true,
            remove: /[*+~.()'"!:@]/g,
          }),
        },
      });
    } else {
      toast.error("An error occurred");
    }
  };

  // if (isSubmitted) {
  return <Success />;
  // }

  return (
    <>
      <form onSubmit={handleSubmit(onSubmit)}>
        <BusinessForm current={6}>
          <section className={styles.form}>
            <Input
              disabled
              label="Business Name"
              {...register("business_name")}
            />
            <Input
              disabled
              label="Business Location"
              {...register("business_location")}
            />
            <Input
              disabled
              label="Street Address"
              {...register("street_address")}
            />
            <Input
              disabled
              label="Business Url"
              {...register("business_url")}
            />
            <Input disabled label="IG Handle" {...register("ig_handle")} />
            <Input
              disabled
              label="Phone number"
              {...register("phone_number")}
            />
          </section>
        </BusinessForm>
      </form>
    </>
  );
};

export default Review;
