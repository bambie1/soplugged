import { FC } from "react";
import Link from "next/link";
import {
  HeartIcon,
  PencilIcon,
  PlusIcon,
  SearchIcon,
  StarIcon,
  VideoCameraIcon,
} from "@heroicons/react/outline";

import SEO from "@/src/components/SEO";
import Header from "@/src/components/Header/Header";
import Footer from "@/src/components/Footer";

const linksArray = [
  {
    title: "Find black-owned businesses",
    href: "/search",
    icon: (
      <SearchIcon
        className="h-6 w-6 flex-shrink-0 text-primary"
        strokeWidth={0.75}
      />
    ),
  },
  {
    title: "Add your business to our directory",
    href: "/my-business",
    icon: (
      <PlusIcon
        className="h-6 w-6 flex-shrink-0 text-primary"
        strokeWidth={0.75}
      />
    ),
  },
  {
    title: "Grow your brand with SoPlugged PRO",
    href: "/pro",
    icon: (
      <StarIcon
        className="h-6 w-6 flex-shrink-0 text-primary"
        strokeWidth={0.75}
      />
    ),
  },
  {
    title: "Submit a question",
    href: "/so-random",
    icon: (
      <VideoCameraIcon
        className="h-6 w-6 flex-shrink-0 text-primary"
        strokeWidth={0.75}
      />
    ),
  },
  {
    title: "Read our monthly blog",
    href: "/blog",
    icon: (
      <PencilIcon
        className="h-6 w-6 flex-shrink-0 text-primary"
        strokeWidth={0.75}
      />
    ),
  },
  {
    title: "Become a SoPlugged sponsor",
    href: "/sponsors",
    icon: (
      <HeartIcon
        className="h-6 w-6 flex-shrink-0 text-primary"
        strokeWidth={0.75}
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

      <Header />
      <div className="flex min-h-screen flex-col items-center justify-center px-4">
        <div className="mx-auto mt-10 flex max-w-3xl flex-1 flex-col items-center py-10">
          <h1 className="text-3xl font-bold text-primary lg:text-4xl">
            <span className="relative text-primary">
              Welcome to SoPlugged
              <span className="absolute left-0 -bottom-1 h-3 w-full -rotate-2 bg-secondary/40" />
            </span>{" "}
          </h1>
          <ul className="mb-20 mt-10 grid gap-5">
            {linksArray.map(({ title, href, icon }) => (
              <li key={href}>
                <Link href={href}>
                  <a className="group relative mt-5 flex items-center gap-2 overflow-hidden rounded-md border border-primary/40 p-4 text-xl shadow-md transition duration-150 hover:border-primary hover:shadow-none">
                    {icon}
                    {title}
                  </a>
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Links;
