import { FC } from "react";
import Link from "next/link";
import Image from "next/image";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faInstagram,
  faLinkedin,
  faTiktok,
  faTwitter,
} from "@fortawesome/free-brands-svg-icons";

import SEO from "@/src/components/SEO";

const linksArray = [
  {
    title: "Explore our directory",
    href: "/search/all",
  },
  {
    title: "Add your business for FREE",
    href: "/my-business",
  },
  {
    title: "Need a website for your business?",
    href: "/pro",
  },
  {
    title: "Read our monthly blog",
    href: "/blog",
  },
];

const socialsArray = [
  {
    name: "Instagram",
    href: "https://www.instagram.com/sopluggd/",
    icon: <FontAwesomeIcon icon={faInstagram} size="2x" />,
  },
  {
    name: "Twitter",
    href: "https://twitter.com/sopluggd",
    icon: <FontAwesomeIcon icon={faTwitter} size="2x" />,
  },
  {
    name: "Tiktok",
    href: "https://www.tiktok.com/@soplugged",
    icon: <FontAwesomeIcon icon={faTiktok} size="2x" />,
  },
  {
    name: "LinkedIn",
    href: "https://ca.linkedin.com/company/soplugged",
    icon: <FontAwesomeIcon icon={faLinkedin} size="2x" />,
  },
];

const Links: FC = () => {
  return (
    <>
      <SEO
        description="Explore a collection of helpful links to Black-owned businesses across Canada with SoPlugged. Our free online directory connects you with local Black-owned businesses in your city. Browse our links page today and discover even more businesses to support."
        title="SoPlugged | Discover Black-owned businesses in Canada"
      />

      <div className="relative flex min-h-screen flex-col items-center justify-center bg-[url('/nina_and_ben.jpeg')] from-white to-secondary bg-cover bg-center lg:bg-gradient-to-b">
        <div className="absolute inset-0 bg-primary/30 backdrop-blur-[2px]"></div>
        <div className="z-10 mx-auto mt-10 flex w-full max-w-md flex-1 flex-col items-center p-4 text-center text-white lg:text-primary">
          <Link href="/">
            <a className="flex flex-shrink-0 rounded-full bg-white p-4">
              <Image
                src="/logos/logo-black.svg"
                alt="SoPlugged Logo"
                width={40}
                height={40}
              />
            </a>
          </Link>
          <h1 className="mt-2 text-2xl font-semibold lg:text-4xl">SoPlugged</h1>
          <p className="text-gray-200 lg:text-primary">@sopluggd</p>
          <p className="mt-3 font-medium">
            The FREE online platform connecting you to Black-owned businesses
            across Canada
          </p>
          <div className="mt-8 flex justify-center space-x-8">
            {socialsArray.map((item) => (
              <a
                key={item.name}
                target="_blank"
                rel="noreferrer"
                href={item.href}
              >
                <span className="sr-only">{item.name}</span>
                {item.icon}
              </a>
            ))}
          </div>
          <hr className="my-10 w-[70%] border border-white/50" />
          <ul className="mb-20 w-full space-y-5">
            {linksArray.map(({ title, href }) => (
              <li key={href}>
                <Link href={href}>
                  <a className="inline-block w-full rounded-md border border-primary/40 bg-white/80 p-4 text-center text-lg text-primary shadow-md backdrop-blur-sm transition duration-150 hover:border-primary hover:shadow-none">
                    {title}
                  </a>
                </Link>
              </li>
            ))}
          </ul>
          <p className="mt-auto">
            &copy; {new Date().getFullYear()}, SoPlugged
          </p>
        </div>
      </div>
    </>
  );
};

export default Links;
