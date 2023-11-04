import { FC } from "react";
import { useForm, SubmitHandler } from "react-hook-form";
import toast from "react-hot-toast";

import { Button } from "@/styled/Button";

interface IFormInput {
  email: string;
  message: string;
}

interface Props {
  businessEmail: string;
  businessName: string;
  phoneNumber?: string;
}

const ContactForm: FC<Props> = ({ businessEmail }) => {
  const { register, handleSubmit, reset } = useForm<IFormInput>();

  const onSubmit: SubmitHandler<IFormInput> = async (data) => {
    const email = {
      From: "hello@soplugged.com",
      To: businessEmail,
      ReplyTo: businessEmail,
      TemplateId: "30186364",
      TemplateModel: {
        product_name: "SoPlugged Business",
        body: data.message,
        user_email: data.email,
      },
    };

    const res = await fetch("/api/sendEmail", {
      method: "POST",
      body: JSON.stringify({ email }),
    });

    if (res?.ok) {
      toast.success("Message sent");
      reset();
    } else toast.error("An error occurred");
  };

  return (
    <form
      className="grid gap-4 pt-4 text-left"
      onSubmit={handleSubmit(onSubmit)}
    >
      <h3 className="center text-lg font-semibold uppercase text-primary">
        Contact owner
      </h3>

      <div className="grid">
        <label htmlFor="message" className="mb-1 block text-sm font-medium">
          Message
        </label>
        <textarea
          placeholder="Begin your message..."
          id="message"
          className="rounded-lg shadow-sm placeholder:text-gray-300 focus:border-primary focus:ring-transparent"
          rows={10}
          {...register("message", { required: true })}
        />
      </div>
      <Button type="submit">Send Message</Button>
    </form>
  );
};

export default ContactForm;
