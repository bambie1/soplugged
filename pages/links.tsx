import { FC } from "react";
import Link from "next/link";
import Image from "next/image";

import { SEO } from "@/components/SEO";
import {
  HeartIcon,
  PencilIcon,
  PlusIcon,
  SearchIcon,
  StarIcon,
} from "@heroicons/react/outline";

const linksArray = [
  {
    title: "Find black-owned businesses",
    href: "/search",
    icon: (
      <SearchIcon
        className="h-6 w-6 flex-shrink-0 text-primary/70"
        strokeWidth={0.5}
      />
    ),
  },
  {
    title: "Add your business to our directory",
    href: "/my-business",
    icon: (
      <PlusIcon
        className="h-6 w-6 flex-shrink-0 text-primary/70"
        strokeWidth={0.5}
      />
    ),
  },
  {
    title: "Grow your brand with SoPlugged PRO",
    href: "/pro",
    icon: (
      <StarIcon
        className="h-6 w-6 flex-shrink-0 text-primary/70"
        strokeWidth={0.5}
      />
    ),
  },
  {
    title: "Become a SoPlugged sponsor",
    href: "/sponsors",
    icon: (
      <HeartIcon
        className="h-6 w-6 flex-shrink-0 text-primary/70"
        strokeWidth={0.5}
      />
    ),
  },
  {
    title: "Read our monthly blog",
    href: "/blog",
    icon: (
      <PencilIcon
        className="h-6 w-6 flex-shrink-0 text-primary/70"
        strokeWidth={0.5}
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

      <div className="flex min-h-screen flex-col items-center justify-center bg-gradient-to-b from-white to-secondary/50 px-4">
        <div className="mx-auto mt-10 flex max-w-3xl flex-1 flex-col items-center py-10">
          <Link href="/">
            <a className="mb-10 flex flex-shrink-0 items-center">
              <Image
                src="/logos/circled-brown.svg"
                alt="SoPlugged Logo"
                width={80}
                height={80}
              />
            </a>
          </Link>

          <ul className="mb-20 grid gap-5 divide-y divide-secondary">
            {linksArray.map(({ title, href, icon }) => (
              <li key={href}>
                <Link href={href}>
                  <a className="mt-5 flex items-center gap-2 text-xl transition duration-150 hover:font-medium">
                    {icon}
                    {title}
                  </a>
                </Link>
              </li>
            ))}
          </ul>
          <footer className="mt-auto text-gray-600">Copyright. 2022</footer>
        </div>
      </div>
    </>
  );
};

export default Links;
