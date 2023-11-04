import Link from "next/link";
import Image from "next/image";
import { useRouter } from "next/router";
import dynamic from "next/dynamic";
import { FC, useEffect, useState } from "react";
import classNames from "classnames";

import { ButtonLink } from "@/styled/ButtonLink";

import MobileHeader from "./MobileHeader";

import styles from "./Header.module.scss";

const Searchbar = dynamic(() => import("../algolia/Searchbar"));

const links = [
  { id: 4, text: "About Us", link: "/our-story" },
  { id: 3, text: "Blog", link: "/blog" },
  { id: 1, text: "PluggedIn Conference", link: "/pluggedin" },
  { id: 2, text: "Partners", link: "/partners" },
];

const nav = {
  main: {
    cta: { text: "Add your business", link: "/join" },
    subCta: { text: "Log in", link: "/dashboard" },
    links,
  },
  blog: {
    cta: { text: "Add your business", link: "/join" },
    subCta: { text: "Log in", link: "/dashboard" },
    links,
  },
  conf: {
    cta: { text: "Get your ticket", link: "#tickets" },
    subCta: { text: "Learn more", link: "#learn-more" },
    links,
  },
};

interface Props {
  variant?: "main" | "blog" | "conf";
  className?: string;
  isHomePage?: boolean;
}

const Header: FC<Props> = ({ variant = "main", isHomePage, className }) => {
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
        className={classNames(
          "sticky top-0 z-20 w-full overflow-hidden py-3 transition duration-100 md:py-0",
          {
            "border-b bg-white": isStyled,
            "bg-light": isHomePage && !isStyled,
          },
          className
        )}
      >
        <MobileHeader />

        <div className="mx-auto hidden w-full max-w-7xl px-8 lg:block 2xl:max-w-screen-2xl">
          <div className="flex h-16 items-center justify-between">
            <div className="flex md:px-0">
              <Link href="/">
                <a className="flex flex-shrink-0 items-center gap-2">
                  <Image
                    src="/logos/logo-brown.svg"
                    alt="SoPlugged Logo"
                    width={40}
                    height={40}
                  />
                  <span className="text-2xl font-medium tracking-tight text-primary">
                    SoPlugged
                  </span>
                </a>
              </Link>
              <ul className={`ml-10 flex`}>
                {currentNav.links.map(({ id, text, link }) => (
                  <li key={id} className={`lg:text-lg ${buildStyles(link)}`}>
                    <ButtonLink href={link}>{text}</ButtonLink>
                  </li>
                ))}
              </ul>
            </div>
            <div className="flex max-w-[65%] flex-1 items-center justify-center md:ml-6 md:max-w-none md:justify-end">
              <div className="w-full max-w-sm md:hidden lg:mr-4 lg:block">
                {router.asPath.startsWith("/search") && <Searchbar />}
              </div>
            </div>

            <div className="flex items-center gap-2">
              {!router.asPath.startsWith("/search") && (
                <ButtonLink href={currentNav.subCta.link} variant="text">
                  {currentNav.subCta.text}
                </ButtonLink>
              )}

              <ButtonLink
                href={currentNav.cta.link}
                variant={isStyled ? "filled" : "outlined"}
                showArrow
              >
                {currentNav.cta.text}
              </ButtonLink>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Header;
