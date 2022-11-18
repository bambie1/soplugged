import { FC, useState } from "react";
import { useForm, SubmitHandler } from "react-hook-form";
import toast from "react-hot-toast";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheckCircle } from "@fortawesome/free-regular-svg-icons";
import { signIn, useSession } from "next-auth/react";
import { usePlausible } from "next-plausible";

import { MyEvents } from "@/types/Plausible";
import { Button } from "@/styled/Button";
import { Input } from "@/styled/Input";
import { sendEmail } from "@/utils/sendEmail";

import styles from "./ContactForm.module.scss";

interface IFormInput {
  message: string;
}

interface Props {
  businessEmail: string;
  businessName: string;
  phoneNumber?: string;
}

const ContactForm: FC<Props> = ({ businessEmail, phoneNumber }) => {
  const { data: session } = useSession();
  const plausible = usePlausible<MyEvents>();

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
        <div className="grid">
          <Button type="submit" disabled={disabled}>
            Send Message
          </Button>
          <p className="mt-1 text-center text-xs text-gray-500 lg:text-sm">
            Signed in as{" "}
            <span className="font-medium underline">{session.user.email}</span>
          </p>
        </div>
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
      <div className="grid">
        <label htmlFor="message" className="mb-1 block text-sm font-medium">
          Message
        </label>
        <textarea
          placeholder="Hi there! I would like to employ your services"
          id="message"
          className="rounded-lg shadow-sm focus:border-primary focus:ring-transparent"
          rows={10}
          disabled={disabled}
          {...register("message", { required: true })}
        />
      </div>
    );
  };

  return (
    <form className={styles.form} onSubmit={handleSubmit(onSubmit)}>
      <div className="flex items-center justify-between gap-2">
        <h3 className="center text-lg font-bold uppercase text-primary">
          Contact owner
        </h3>
        {phoneNumber && (
          <a className="text-gray-500 underline" href={`tel:${phoneNumber}`}>
            Phone number
          </a>
        )}
      </div>

      {renderContent()}
      {renderButton()}
    </form>
  );
};

export default ContactForm;
