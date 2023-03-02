import { FormEvent, useState } from "react";
import Image from "next/image";
import toast from "react-hot-toast";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faInstagram } from "@fortawesome/free-brands-svg-icons";

import PageWrapper from "@/src/layouts/PageWrapper";
import TextArea from "@/styled/TextArea/TextArea";
import { Button } from "@/styled/Button";

const SoRandomPage = () => {
  const [message, setMessage] = useState("");

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();

    const email = {
      From: "hello@soplugged.com",
      To: "hello@soplugged.com",
      TemplateId: "30186082",
      TemplateModel: {
        product_name: "SoRandom",
        body: message,
      },
    };

    await fetch("/api/sendEmail", {
      method: "POST",
      body: JSON.stringify({ email }),
    });

    setMessage("");
    toast.success("Your message was sent successfully!");
  };

  return (
    <PageWrapper whiteFooter>
      <div className="mx-auto w-full max-w-3xl text-center">
        <h1 className="mb-6 text-5xl font-semibold text-primary sm:text-6xl">
          So random!
        </h1>
        <p>
          A talk-show about everything related to buying black and running a
          small business as a black entrepreneur.
        </p>

        <img
          src="/latest_episode_lg.svg"
          alt="Squigly arrow pointing to the next episode"
          className="max-h-32"
        />
      </div>

      <div className="grid gap-8 lg:grid-cols-2 lg:gap-14 lg:pt-10">
        <a
          className="group relative inline-flex self-start transition duration-150"
          href="https://www.instagram.com/reel/ClrEpSEpwiV/?igshid=YmMyMTA2M2Y="
          rel="noreferrer"
          target="_blank"
        >
          <div className="relative aspect-[16/9] w-full overflow-hidden rounded-lg grayscale-[.6] group-hover:grayscale lg:-mt-10">
            <Image
              src="/reel_thumbnail.jpeg"
              alt="Screenshot of SoPlugged's latest Instagram post"
              objectFit="cover"
              layout="fill"
            />
          </div>
          <FontAwesomeIcon
            icon={faInstagram}
            className="inset-center absolute !h-14 !w-full text-gray-200 opacity-0 transition duration-150 group-hover:opacity-100"
          />
        </a>

        <div className="absolute left-0 -z-10 h-96 w-full -skew-y-6 bg-secondary/10"></div>

        <div>
          <hr className="bg-secondary lg:hidden" />
          <h2 className="pt-4 text-2xl font-semibold uppercase lg:pt-6">
            Got a question?
          </h2>
          <p>Let us know!</p>

          <form className="mt-4 lg:mt-10" onSubmit={handleSubmit}>
            <TextArea
              label="Message"
              name="message"
              rows={10}
              value={message}
              onChange={(e) => setMessage(e.target.value)}
            />
            <br />
            <Button disabled={!message}>Submit message</Button>
          </form>
        </div>
      </div>
    </PageWrapper>
  );
};

export default SoRandomPage;
