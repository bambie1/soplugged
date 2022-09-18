import { FC, useState } from "react";
import { useForm, SubmitHandler } from "react-hook-form";
import toast from "react-hot-toast";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheckCircle } from "@fortawesome/free-regular-svg-icons";
import { signIn, useSession } from "next-auth/react";

import { Button } from "@/styled/Button";
import { Input } from "@/styled/Input";
import TextArea from "@/styled/TextArea/TextArea";
import { sendEmail } from "@/utils/sendEmail";

import styles from "./ContactForm.module.scss";

interface IFormInput {
  message: string;
}

interface Props {
  businessEmail: string;
}

const ContactForm: FC<Props> = ({ businessEmail }) => {
  const { data: session } = useSession();

  const [messageSent, setMessageSent] = useState(false);
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<IFormInput>();

  const disabled =
    !session?.user || session?.user.email === businessEmail || messageSent;

  const onSubmit: SubmitHandler<IFormInput> = async (data) => {
    if (!session?.user?.email) return;

    const { email: userEmail } = session.user;

    const email = {
      from: "hello@soplugged.com",
      to: businessEmail,
      subject: `New Message on SoPlugged from ${userEmail || "a customer"}`,
      content: data.message,
      reply_to: userEmail,
    };

    const res = await sendEmail(email);

    if (res?.ok) {
      toast.success("Message sent");
      reset();
      setMessageSent(true);
    } else toast.error("An error occurred");
  };

  const renderButton = () => {
    if (session?.user?.email)
      return (
        <Button type="submit" disabled={disabled}>
          Send Message
        </Button>
      );

    return (
      <Button onClick={() => signIn()} variant="outlined">
        Sign in to send message
      </Button>
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
      <h3 className="center text-lg font-bold uppercase text-primary">
        Contact
      </h3>

      <Input
        label="Email address"
        value={session?.user?.email || ""}
        disabled
      />

      {renderContent()}
      {renderButton()}
    </form>
  );
};

export default ContactForm;
