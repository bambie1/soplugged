import Link from "next/link";
import Image from "next/image";
import { useRouter } from "next/router";
import dynamic from "next/dynamic";
import { FC } from "react";

import { ButtonLink } from "@/styled/ButtonLink";

import styles from "../../styles/Header.module.scss";
import { ArrowButton } from "@/styled/ArrowButton";
import MobileHeader from "./MobileHeader";

const Searchbar = dynamic(() => import("../algolia/Searchbar"));

const mainNav = [
  { id: 1, text: "Directory", link: "/search" },
  { id: 2, text: "PRO", link: "/pro" },
  { id: 3, text: "Blog", link: "/blog" },
];

interface Props {
  hideSearch?: boolean;
  showBanner?: boolean;
}

const Header: FC<Props> = ({ hideSearch }) => {
  const router = useRouter();

  const buildStyles = (href: string) => {
    if (router.asPath.startsWith(href))
      return `${styles.navLink} ${styles.active}`;

    return styles.navLink;
  };

  return (
    <>
      <nav
        className={`sticky top-0 z-20 hidden w-full overflow-hidden border-b bg-white transition duration-100 md:flex`}
      >
        <div className="mx-auto w-full max-w-7xl px-2 sm:px-4 md:px-8">
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
                  <li key={id} className={`${buildStyles(link)}`}>
                    <ButtonLink href={link}>{text}</ButtonLink>
                  </li>
                ))}
              </ul>
            </div>
            <div className="flex max-w-[65%] flex-1 items-center justify-center md:ml-6 md:max-w-none md:justify-end">
              <div className="w-full max-w-lg md:max-w-sm">
                {router.asPath !== "/" &&
                  !router.asPath.startsWith("/pro") &&
                  !router.asPath.startsWith("/blog") &&
                  !hideSearch && <Searchbar />}
              </div>
            </div>
            <ArrowButton href="/dashboard">Go to dashboard</ArrowButton>
          </div>
        </div>
      </nav>
      <MobileHeader />
    </>
  );
};

export default Header;
