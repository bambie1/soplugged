import Link from "next/link";
import Image from "next/image";
import { useRouter } from "next/router";
import dynamic from "next/dynamic";
import { FC, useEffect, useState } from "react";

import { ButtonLink } from "@/styled/ButtonLink";

import { ArrowButton } from "@/styled/ArrowButton";
import MobileHeader from "./MobileHeader";

import styles from "../../styles/Header.module.scss";

const Searchbar = dynamic(() => import("../algolia/Searchbar"));

const mainNav = [
  { id: 1, text: "Find a business", link: "/search" },
  { id: 2, text: "PRO", link: "/pro" },
  { id: 3, text: "Blog", link: "/blog" },
];

interface Props {
  hideSearch?: boolean;
  showBanner?: boolean;
}

const Header: FC<Props> = () => {
  const router = useRouter();
  const [isStyled, setIsStyled] = useState(false);

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
        className={`sticky top-0 z-20 w-full overflow-hidden ${
          isStyled && "border-b"
        } bg-white py-3 transition duration-100 md:py-0`}
      >
        <MobileHeader mainNav={mainNav} />

        <div className="mx-auto hidden w-full max-w-7xl px-8 md:block">
          <div className="flex h-16 items-center justify-between">
            <div className="flex md:px-0">
              <Link href="/">
                <a className="flex flex-shrink-0 items-center">
                  <Image
                    src="/soplugged-logo.png"
                    alt="SoPlugged Logo"
                    width={40}
                    height={40}
                  />
                </a>
              </Link>
              <ul className={`ml-10 flex space-x-4`}>
                {mainNav.map(({ id, text, link }) => (
                  <li key={id} className={`lg:text-lg ${buildStyles(link)}`}>
                    <ButtonLink href={link}>{text}</ButtonLink>
                  </li>
                ))}
              </ul>
            </div>
            <div className="flex max-w-[65%] flex-1 items-center justify-center md:ml-6 md:max-w-none md:justify-end">
              <div className="w-full max-w-sm lg:mr-4">
                {router.asPath.startsWith("/search") && <Searchbar />}
              </div>
            </div>
            <ArrowButton href="/dashboard">Go to dashboard</ArrowButton>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Header;
