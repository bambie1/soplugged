import Link from "next/link";
import Image from "next/image";
import { FC, useEffect, useState } from "react";
import classNames from "classnames";

import { ButtonLink } from "@/styled/ButtonLink";

import MobileHeader from "./MobileHeader";
import NavLink from "@/styled/NavLink";

const links = [
  { id: 4, text: "Our Story", link: "/our-story" },
  { id: 5, text: "Business Directory", link: "/search/all" },
  { id: 3, text: "Blog", link: "/blog" },
  { id: 1, text: "PluggedIn Conference", link: "/pluggedin" },
  { id: 2, text: "Partners", link: "/partners" },
];

const nav = {
  main: {
    cta: { text: "Join the Community", link: "/join" },
    links,
  },
  blog: {
    cta: { text: "Join the Community", link: "/join" },
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
  const [isStyled, setIsStyled] = useState(false);

  const currentNav = nav[variant];

  useEffect(() => {
    if (typeof window !== "undefined") {
      window.addEventListener("scroll", () =>
        setIsStyled(window.pageYOffset > 40)
      );
    }
  }, []);

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
            <ul className="flex items-center gap-4">
              {currentNav.links.map(({ id, text, link }) => (
                <li key={id}>
                  <NavLink href={link}>{text}</NavLink>
                </li>
              ))}
            </ul>

            <div className="flex items-center gap-2">
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
