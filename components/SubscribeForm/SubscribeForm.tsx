import { FC } from "react";
import { useForm, SubmitHandler } from "react-hook-form";
import toast from "react-hot-toast";

import { Input } from "@/styled/Input";
import { Button } from "@/styled/Button";
import { handleSubscription } from "@/utils/handleSubscription";

import styles from "./SubscribeForm.module.scss";

interface IFormInput {
  email: string;
}

const SubscribeForm: FC = () => {
  const {
    handleSubmit,
    register,
    reset,
    formState: { errors },
  } = useForm<IFormInput>();

  const onSubmit: SubmitHandler<IFormInput> = async (data) => {
    const res = await handleSubscription(
      { ...data, first_name: "", last_name: "" },
      "newsletter"
    );

    if (res.ok) {
      toast.success("Successfully subscribed");
    } else toast.error("An error occurred");

    reset();
  };

  return (
    <div className={styles.wrapper}>
      <h3>Stay Plugged-in</h3>
      <p>
        Join our mailing list to receive news and updates on new service
        features, blog posts, and be in the know!
      </p>
      <form onSubmit={handleSubmit(onSubmit)} className={styles.subscribeForm}>
        <Input
          placeholder="john@doe.com"
          label="Email address"
          type="email"
          {...register("email", { required: true })}
          error={errors.email && "Please enter your email address"}
        />
        <Button type="submit">Keep me updated!</Button>
      </form>
    </div>
  );
};

export default SubscribeForm;
