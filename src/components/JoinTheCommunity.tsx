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
    <div id="newsletter" className="relative min-h-[10rem] bg-light">
      <div className="mx-auto grid w-full gap-8 lg:max-w-7xl lg:px-8 2xl:max-w-screen-2xl">
        <div className="relative aspect-video w-full lg:hidden">
          <Image
            src="/nina_and_ben.jpeg"
            alt=""
            layout="fill"
            objectFit="cover"
          />
        </div>
        <div className="max-w-4xl px-4 pb-8 sm:px-6 lg:py-10 xl:py-20">
          <h2 className="mb-2 text-3xl font-semibold text-primary xl:text-4xl">
            AMPLIFYING the voices of Black entrepreneurs in Canada
          </h2>
          <div className="mt-4 flex items-center">
            <a
              href="https://www.instagram.com/sopluggd/"
              className="flex items-center gap-2 lg:text-lg"
            >
              <FontAwesomeIcon icon={faInstagram} size="2x" />
              <p className="underline">Follow us on IG</p>
            </a>

            <div className="ml-5 flex gap-4 border-l border-primary pl-5">
              {socialsArray.map((item) => (
                <a
                  key={item.name}
                  target="_blank"
                  rel="noreferrer"
                  href={item.href}
                  className="text-primary/40 transition duration-150 hover:text-primary"
                >
                  <span className="sr-only">{item.name}</span>
                  {item.icon}
                </a>
              ))}
            </div>
          </div>

          <hr className="my-6 lg:mb-12" />

          <p className="mb-2 text-lg font-semibold lg:text-xl">
            Subscribe to our monthly newsletter
          </p>
          <p className="text-gray-600">
            Entrepreneurial tips, Black-owned business highlights, and SoPlugged
            updates sent straight to your inbox every month!
          </p>

          <form
            onSubmit={handleSubscribe}
            className="mt-8 grid max-w-lg flex-col items-start lg:flex"
          >
            <Input
              label="Email address"
              autoComplete="off"
              required
              placeholder="your@email.com"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <Button>Subscribe</Button>
          </form>
        </div>
      </div>
      <div className="absolute right-0 top-0 bottom-0 hidden w-[35%] lg:block">
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
