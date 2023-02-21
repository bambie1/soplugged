import { FC } from "react";
import Link from "next/link";
import {
  BookOpenIcon,
  PlusIcon,
  SearchIcon,
  StarIcon,
} from "@heroicons/react/outline";
import Image from "next/image";

import SEO from "@/src/components/SEO";

const linksArray = [
  {
    title: "Explore our directory",
    href: "/search/all",
    icon: (
      <SearchIcon
        className="h-6 w-6 flex-shrink-0 text-primary"
        strokeWidth={0.75}
      />
    ),
  },
  {
    title: "Add your business",
    href: "/my-business",
    icon: (
      <PlusIcon
        className="h-6 w-6 flex-shrink-0 text-primary"
        strokeWidth={0.75}
      />
    ),
  },
  {
    title: "Try SoPlugged PRO",
    href: "/pro",
    icon: (
      <StarIcon
        className="h-6 w-6 flex-shrink-0 text-primary"
        strokeWidth={0.75}
      />
    ),
  },
  {
    title: "Read our monthly blog",
    href: "/blog",
    icon: (
      <BookOpenIcon
        className="h-6 w-6 flex-shrink-0 text-primary"
        strokeWidth={0.75}
      />
    ),
  },
];

const socialsArray = [
  {
    name: "Instagram",
    href: "https://www.instagram.com/sopluggd/",
    icon: () => (
      <Image
        src="/logos/instagram.svg"
        alt="Instagram Logo"
        width={24}
        height={24}
      />
    ),
  },
  {
    name: "Twitter",
    href: "https://twitter.com/sopluggd",
    icon: () => (
      <Image
        src="/logos/twitter.svg"
        alt="Twitter Logo"
        width={24}
        height={24}
      />
    ),
  },
  {
    name: "Tiktok",
    href: "https://www.tiktok.com/@soplugged",
    icon: () => (
      <Image src="/logos/tiktok.svg" alt="Tiktok Logo" width={24} height={24} />
    ),
  },
  {
    name: "LinkedIn",
    href: "https://ca.linkedin.com/company/soplugged",
    icon: () => (
      <Image
        src="/logos/linkedin.svg"
        alt="LinkedIn Logo"
        width={24}
        height={24}
      />
    ),
  },
];

const Links: FC = () => {
  return (
    <>
      <SEO
        description="Online platform connecting you to black-owned businesses across Canada. If you're an entrepreneur, register your business to be featured on our platform."
        title="SoPlugged | Discover black-owned businesses in Canada"
      />

      <div className="flex min-h-screen flex-col items-center justify-center bg-gradient-to-b from-white to-secondary">
        <div className="mx-auto mt-10 flex w-full max-w-md flex-1 flex-col items-center p-4 text-center">
          <Link href="/">
            <a className="flex flex-shrink-0 rounded-full border border-primary p-3">
              <Image
                src="/logos/logo-black.svg"
                alt="SoPlugged Logo"
                width={40}
                height={40}
              />
            </a>
          </Link>
          <h1 className="mt-2 text-3xl font-bold text-primary lg:text-4xl">
            SoPlugged
          </h1>
          <p className="text-neutral-400">@sopluggd</p>
          <p className="mt-3 text-neutral-500">
            The FREE online platform connecting you to black-owned businesses across Canada
          </p>
          <div className="mt-8 flex justify-center space-x-6">
            {socialsArray.map((item) => (
              <a
                key={item.name}
                target="_blank"
                rel="noreferrer"
                href={item.href}
              >
                <span className="sr-only">{item.name}</span>
                <item.icon aria-hidden="true" />
              </a>
            ))}
          </div>
          <hr className="my-10 w-[70%] border border-primary/50" />
          <ul className="mb-20 w-full space-y-5">
            {linksArray.map(({ title, href, icon }) => (
              <li key={href}>
                <Link href={href}>
                  <a className="flex w-full gap-2 rounded-md border border-primary/40 bg-white p-4 text-xl opacity-60 shadow-md transition duration-150 hover:border-primary hover:shadow-none">
                    {icon}
                    <span className="flex-1 text-center">{title}</span>
                  </a>
                </Link>
              </li>
            ))}
          </ul>
          <p className="mt-auto text-neutral-500">
            &copy; {new Date().getFullYear()}, SoPlugged
          </p>
        </div>
      </div>
    </>
  );
};

export default Links;
