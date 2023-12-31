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
    title: "PluggedIn Early-Bird Tickets",
    href: "https://lu.ma/2ru2h6ak",
    isNew: true,
  },
  {
    title: "Become a PluggedIn Partner",
    href: "https://docs.google.com/forms/d/e/1FAIpQLSeTDtSgvUq1sswjZr2c65QqQsDLc1brNCjGblWL1YbPpJq8Gg/viewform",
    isNew: true,
  },
  {
    title: "Listen to TBM podcast",
    href: "https://tbmpodcast.soplugged.com",
  },
  {
    title: "Subscribe to our newsletter",
    href: "/newsletter",
  },

  {
    title: "Need a website for your business?",
    href: "https://studio.soplugged.com",
  },
  {
    title: "Check out our latest blog post",
    href: "/blog",
  },
  {
    title: "Explore our directory",
    href: "/directory",
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
    href: "https://www.tiktok.com/@tbm_pod",
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
        <div className="absolute top-0 left-0 right-0 h-1/2 bg-primary/30 backdrop-blur-sm lg:hidden"></div>
        <div className="z-10 mx-auto mt-10 flex w-full max-w-md flex-1 flex-col items-center p-4 text-center text-white lg:text-primary">
          <Link href="/">
            <a className="flex flex-shrink-0 rounded-full border-primary bg-white p-4 lg:border lg:bg-transparent">
              <Image
                src="/logos/logo-black.svg"
                alt="SoPlugged Logo"
                width={40}
                height={40}
              />
            </a>
          </Link>
          <h1 className="mt-2 text-2xl font-semibold lg:text-4xl">SoPlugged</h1>
          <p className="text-gray-300 lg:text-primary">@sopluggd</p>
          <p className="mt-3 text-lg leading-snug">
            Empowering Black entrepreneurs across Canada!
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
          <hr className="my-8 w-[70%] border border-white/50" />
          <ul className="mb-20 w-full space-y-5">
            {linksArray.map(({ title, href, isNew }) => (
              <li key={href}>
                <Link href={href}>
                  <a className="relative inline-flex w-full shrink-0 items-center justify-center gap-2 overflow-hidden rounded-md border border-primary/40 bg-white/80 p-4 pl-6 text-center text-lg font-medium text-primary shadow-md backdrop-blur-sm transition duration-150 hover:border-primary hover:shadow-none">
                    {title}
                    {isNew && (
                      <span className="flex items-center justify-center rounded-lg bg-primary p-1 text-xs text-white">
                        NEW
                      </span>
                    )}
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
