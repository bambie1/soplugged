import { FC } from "react";
import { useForm, SubmitHandler } from "react-hook-form";

import { Input } from "@/styled/Input";
import { Button } from "@/styled/Button";
import { handleSubscription } from "@/utils/handleSubscription";

import styles from "./SubscribeForm.module.scss";

interface IFormInput {
  first_name: string;
  last_name: string;
  email: string;
}

const SubscribeForm: FC = () => {
  const {
    handleSubmit,
    register,
    formState: { errors },
  } = useForm<IFormInput>();

  const onSubmit: SubmitHandler<IFormInput> = async (data) => {
    const response = await handleSubscription(data, "newsletter");

    if (response.error) console.log("an error occured");
    else console.log({ response });
  };

  return (
    <div className={styles.wrapper}>
      <h3>Stay Plugged-in</h3>
      <p>
        Join our mailing list to receive news and updates on new service
        features, blog posts, and be in the know!
      </p>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className={styles.subscribeForm}>
          <Input
            placeholder="John"
            label="First Name"
            {...register("first_name", { required: true })}
            error={errors.first_name && "Please enter your first name"}
          />
          <Input
            placeholder="Doe"
            label="Last Name"
            {...register("last_name", { required: true })}
            error={errors.last_name && "Please enter your last name"}
          />
          <Input
            placeholder="john@doe.com"
            label="Email address"
            type="email"
            {...register("email", { required: true })}
            error={errors.email && "Please enter your email address"}
          />
        </div>
        <div className="mb-1">
          <Button type="submit">Keep me updated!</Button>
        </div>
      </form>
    </div>
  );
};

export default SubscribeForm;
