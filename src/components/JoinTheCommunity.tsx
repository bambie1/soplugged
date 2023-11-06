import { useState } from "react";
import {
  faInstagram,
  faLinkedin,
  faTiktok,
  faTwitter,
} from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Image from "next/image";
import toast from "react-hot-toast";

import { Button } from "@/styled/Button";
import { Input } from "@/styled/Input";

const socialsArray = [
  {
    name: "Twitter",
    href: "https://twitter.com/sopluggd",
    icon: <FontAwesomeIcon icon={faTwitter} size="lg" />,
  },
  {
    name: "Tiktok",
    href: "https://www.tiktok.com/@tbm_pod",
    icon: <FontAwesomeIcon icon={faTiktok} size="lg" />,
  },
  {
    name: "LinkedIn",
    href: "https://ca.linkedin.com/company/soplugged",
    icon: <FontAwesomeIcon icon={faLinkedin} size="lg" />,
  },
];

const JoinTheCommunity = () => {
  const [email, setEmail] = useState("");

  const handleSubscribe = async (e: React.FormEvent) => {
    e.preventDefault();

    await fetch("/api/subscribe", {
      method: "POST",
      body: JSON.stringify({ email, first_name: "", last_name: "" }),
    });

    toast.success("Successfully subscribed!", {
      position: "top-center",
    });

    setEmail("");
  };

  return (
    <div className="relative flex min-h-[10rem] bg-light lg:min-h-[40rem]">
      <div className="mx-auto grid w-full gap-8 lg:max-w-7xl lg:px-8 2xl:max-w-screen-2xl">
        <div className="relative aspect-video w-full lg:hidden">
          <Image
            src="/nina_and_ben.jpeg"
            alt=""
            layout="fill"
            objectFit="cover"
          />
        </div>
        <div className="flex h-full max-w-xl flex-col justify-center px-4 pb-8 sm:px-6 lg:py-10 xl:py-20 2xl:max-w-3xl">
          <h2 className="mb-4 text-3xl font-semibold text-primary xl:text-4xl">
            AMPLIFYING the voices of Black entrepreneurs in Canada
          </h2>
          <p className="mb-2">
            We started SoPlugged in 2021 to empower Black entrepreneurs by
            sharing inspiring stories, practical tips, and valuable insights
            from successful Black entrepreneurs in Canada.
          </p>
          <p>
            Since then, we've empower Black entrepreneurs by sharing inspiring
            stories, practical tips, and value.
          </p>
        </div>
      </div>
      <div className="absolute right-0 top-0 bottom-0 hidden w-[45%] lg:block">
        <Image
          src="/nina_and_ben.jpeg"
          alt=""
          layout="fill"
          objectFit="cover"
        />
      </div>
    </div>
  );
};

export default JoinTheCommunity;
