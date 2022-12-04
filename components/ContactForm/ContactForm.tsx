import { FC, useState } from "react";
import { useForm, SubmitHandler } from "react-hook-form";
import toast from "react-hot-toast";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheckCircle } from "@fortawesome/free-regular-svg-icons";
import { signIn, useSession } from "next-auth/react";
import { usePlausible } from "next-plausible";

import { MyEvents } from "@/types/Plausible";
import { Button } from "@/styled/Button";

import styles from "./ContactForm.module.scss";

interface IFormInput {
  message: string;
}

interface Props {
  businessEmail: string;
  businessName: string;
  phoneNumber?: string;
}

const ContactForm: FC<Props> = ({ businessEmail }) => {
  const { data: session } = useSession();
  const plausible = usePlausible<MyEvents>();

  const [messageSent, setMessageSent] = useState(false);
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<IFormInput>();

  const disabled = !session?.user || session?.user.email === businessEmail;

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

    const res = await fetch("/api/sendEmail", {
      method: "POST",
      body: JSON.stringify({ email }),
    });

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

    return <Button onClick={() => signIn()}>Sign in to send message</Button>;
  };

  const renderContent = () => {
    return (
      <div className="grid">
        <label htmlFor="message" className="mb-1 block text-sm font-medium">
          Message
        </label>
        <textarea
          placeholder="Begin your message..."
          id="message"
          className="rounded-lg shadow-sm placeholder:text-gray-300 focus:border-primary focus:ring-transparent"
          rows={10}
          disabled={disabled}
          {...register("message", { required: true })}
        />
      </div>
    );
  };

  return (
    <form className={styles.form} onSubmit={handleSubmit(onSubmit)}>
      <h3 className="center text-lg font-bold uppercase text-primary">
        Contact owner
      </h3>

      {renderContent()}
      {renderButton()}
    </form>
  );
};

export default ContactForm;
