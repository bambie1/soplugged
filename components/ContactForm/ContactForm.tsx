import { FC, useState } from "react";
import { useForm, SubmitHandler } from "react-hook-form";
import toast from "react-hot-toast";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheckCircle } from "@fortawesome/free-regular-svg-icons";

import { useAuth } from "@/context/authContext";
import { Button } from "@/styled/Button";
import { ButtonLink } from "@/styled/ButtonLink";
import { Input } from "@/styled/Input";
import TextArea from "@/styled/TextArea/TextArea";

import styles from "./ContactForm.module.scss";
import { sendEmail } from "@/utils/sendEmail";

interface IFormInput {
  message: string;
}

interface Props {
  businessEmail: string;
}

const ContactForm: FC<Props> = ({ businessEmail }) => {
  const { user } = useAuth();
  const [showError, setShowError] = useState(false);
  const [messageSent, setMessageSent] = useState(false);
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<IFormInput>();

  const disabled = !user || user.email === businessEmail;

  const onSubmit: SubmitHandler<IFormInput> = async (data) => {
    const email = {
      from: "hello@soplugged.com",
      to: businessEmail,
      subject: `New Message on SoPlugged from ${user.email || "a customer"}`,
      content: data.message,
      reply_to: user.email,
    };

    const res = await sendEmail(email);

    if (res?.ok) {
      toast.success("Message sent");
      reset();
      setMessageSent(true);
    } else toast.error("An error occurred");
  };

  const renderButton = () => {
    if (user)
      return (
        <Button type="submit" disabled={disabled}>
          Send Message
        </Button>
      );

    return (
      <ButtonLink href="/join" variant="outlined">
        Sign in to send message
      </ButtonLink>
    );
  };

  const renderContent = () => {
    if (messageSent)
      return (
        <div className={`${styles.successDiv} flex-center column`}>
          <FontAwesomeIcon icon={faCheckCircle} className={styles.icon} />
          <p>Your message is on it's way!</p>
        </div>
      );

    return (
      <TextArea
        placeholder="Hi there! I would like to employ your services"
        label="Message"
        rows={7}
        disabled={disabled}
        {...register("message", { required: true })}
      />
    );
  };

  return (
    <form className={styles.form} onSubmit={handleSubmit(onSubmit)}>
      <h3 className="center">Contact</h3>

      <Input label="Email address" value={user?.email || ""} disabled />

      {renderContent()}
      {renderButton()}
    </form>
  );
};

export default ContactForm;
