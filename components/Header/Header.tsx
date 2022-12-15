import Link from "next/link";
import Image from "next/image";
import { useRouter } from "next/router";
import dynamic from "next/dynamic";
import { FC, useEffect, useState } from "react";

import { ButtonLink } from "@/styled/ButtonLink";

import MobileHeader from "./MobileHeader";

import styles from "../../styles/Header.module.scss";
import { ArrowRightIcon } from "@heroicons/react/outline";

const Searchbar = dynamic(() => import("../algolia/Searchbar"));
const SignOutButton = dynamic(() => import("../SignOutButton"));

const links = [
  { id: 1, text: "Find a business", link: "/search/all" },
  { id: 2, text: "PRO", link: "/pro", isNew: true },
  { id: 3, text: "Blog", link: "/blog" },
];

const nav = {
  main: {
    cta: { text: "I am an entrepreneur", link: "/dashboard" },
    links,
  },
  pro: {
    cta: { text: "Book a consult", link: "#book-consult" },
    links,
  },
  blog: {
    cta: { text: "I am an entrepreneur", link: "/dashboard" },
    links,
  },
  auth: {
    cta: { text: "Back to dashboard", link: "/dashboard" },
    links: [
      // { id: 1, text: "Find a business", link: "/search/all" },
      // { id: 2, text: "PRO", link: "/pro", isNew: true },
      // { id: 3, text: "Blog", link: "/blog" },
    ],
  },
};

interface Props {
  variant?: "main" | "pro" | "blog" | "auth";
  className?: string;
}

const Header: FC<Props> = ({ variant = "main", className }) => {
  const router = useRouter();
  const [isStyled, setIsStyled] = useState(false);

  const currentNav = nav[variant];

  useEffect(() => {
    if (typeof window !== "undefined") {
      window.addEventListener("scroll", () =>
        setIsStyled(window.pageYOffset > 40)
      );
    }
  }, []);

  const buildStyles = (href: string) => {
    if (router.asPath.startsWith(href))
      return `${styles.navLink} ${styles.active}`;

    return styles.navLink;
  };

  return (
    <>
      <nav
        className={`top-0 z-20 w-full overflow-hidden ${
          isStyled && "border-b"
        } ${
          variant === "auth" ? "fixed bg-transparent" : "sticky bg-white"
        } py-3 transition duration-100 md:py-0 ${className}`}
      >
        <div className="light-gradient -mt-3 border-b border-primary/5 p-2 md:mt-0">
          <div className="my-container flex items-center justify-center">
            <Link href="/pluggedin">
              <a className="group flex items-center justify-center gap-4">
                <span>Register for #PluggedIn 2023</span>
                <div className="flex gap-1 border-b border-secondary group-hover:border-transparent">
                  <span className="hidden transition duration-150 sm:inline">
                    Tickets here
                  </span>
                  <span className="">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      className="h-6 w-6 transition duration-150 group-hover:translate-x-2"
                      strokeWidth={0.8}
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3"
                      />
                    </svg>
                  </span>
                </div>
              </a>
            </Link>
          </div>
        </div>
        <MobileHeader currentNav={currentNav} />

        <div className="mx-auto hidden w-full max-w-7xl px-8 md:block">
          <div className="flex h-16 items-center justify-between">
            <div className="flex md:px-0">
              <Link href="/">
                <a className="flex flex-shrink-0 items-center">
                  <Image
                    src="/logos/logo-brown.svg"
                    alt="SoPlugged Logo"
                    width={40}
                    height={40}
                  />
                </a>
              </Link>
              <ul className={`ml-10 flex space-x-4`}>
                {currentNav.links.map(({ id, text, link, isNew }) => (
                  <li key={id} className={`lg:text-lg ${buildStyles(link)}`}>
                    <ButtonLink href={link}>
                      <span className="flex">
                        {text}
                        {isNew && (
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 24 24"
                            fill="currentColor"
                            className="top-1 h-3 w-3 text-accent-dark"
                          >
                            <path
                              fillRule="evenodd"
                              d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.007 5.404.433c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.433 2.082-5.006z"
                              clipRule="evenodd"
                            />
                          </svg>
                        )}
                      </span>
                    </ButtonLink>
                  </li>
                ))}
              </ul>
            </div>
            <div className="flex max-w-[65%] flex-1 items-center justify-center md:ml-6 md:max-w-none md:justify-end">
              <div className="w-full max-w-sm lg:mr-4">
                {router.asPath.startsWith("/search") && <Searchbar />}
              </div>
            </div>
            <ButtonLink href={currentNav.cta.link} variant="text" showArrow>
              {currentNav.cta.text}
            </ButtonLink>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Header;
