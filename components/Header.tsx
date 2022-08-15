import Link from "next/link";
import Image from "next/image";
import { useRouter } from "next/router";
import dynamic from "next/dynamic";
import { useEffect, useState } from "react";
import { Disclosure } from "@headlessui/react";
import { Dialog } from "@reach/dialog";

import { ButtonLink } from "@/styled/ButtonLink";
import { MobileNav } from "./MobileNav";

import styles from "../styles/Header.module.scss";
import classNames from "classnames";

const Searchbar = dynamic(() => import("./algolia/Searchbar"));

const mainNav = [
  { id: 1, text: "Directory", link: "/search" },
  { id: 2, text: "PRO", link: "/pro" },
  { id: 3, text: "Blog", link: "/blog" },
];

const Header = () => {
  const router = useRouter();
  const [isStyled, setIsStyled] = useState(false);
  const [openMenu, setOpenMenu] = useState(false);

  const toggleMenu = () => setOpenMenu(!openMenu);

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
    <Disclosure
      as="nav"
      className={`fixed z-20 w-full overflow-hidden border-b transition duration-100 ${
        openMenu ? "" : "bg-white"
      } ${
        isStyled
          ? "md:border-gray-200 md:bg-white"
          : "border-transparent bg-transparent"
      }`}
    >
      {({ open }) => (
        <>
          <div className="mx-auto max-w-7xl px-2 sm:px-4 md:px-8">
            <div className="flex h-16 items-center justify-between">
              <div className="flex px-2 md:px-0">
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
                <ul className={`hidden md:ml-10 md:flex md:space-x-8`}>
                  {mainNav.map(({ id, text, link }) => (
                    <li key={id} className={`${buildStyles(link)}`}>
                      <ButtonLink href={link}>{text}</ButtonLink>
                    </li>
                  ))}
                </ul>
              </div>
              <div
                className={classNames("", {
                  "flex flex-1 items-center justify-center px-2 md:ml-6 md:justify-end":
                    router.asPath.startsWith("/search"),
                  "hidden md:flex": !router.asPath.startsWith("/search"),
                })}
              >
                <div className="w-full max-w-lg md:max-w-sm">
                  <Searchbar />
                </div>
              </div>

              <div className="flex items-center space-x-4 md:hidden">
                <Link href="/search?focus=true">
                  <a
                    className={classNames("md:hidden", {
                      hidden: router.asPath.startsWith("/search"),
                    })}
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth={1}
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="feather feather-search"
                    >
                      <circle cx="11" cy="11" r="8"></circle>
                      <line x1="21" y1="21" x2="16.65" y2="16.65"></line>
                    </svg>
                  </a>
                </Link>
                <button
                  className={`button ${styles.menuBtn}`}
                  onClick={toggleMenu}
                >
                  <div
                    className={`${styles.burger} ${openMenu && styles.open}`}
                  ></div>
                </button>

                <Dialog
                  isOpen={openMenu}
                  aria-label="Mobile menu"
                  className={`md:hidden ${styles.mobileMenu}`}
                >
                  <MobileNav />
                </Dialog>
              </div>
              <Link href="/dashboard">
                <a className="group hidden items-center gap-2 border-b border-transparent transition duration-200 hover:border-primary md:ml-4 md:inline-flex md:items-center lg:text-lg">
                  Go to dashboard
                  <span>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-6 w-6 transition duration-200 group-hover:translate-x-1"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      strokeWidth={1}
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M17 8l4 4m0 0l-4 4m4-4H3"
                      />
                    </svg>
                  </span>
                </a>
              </Link>
            </div>
          </div>
        </>
      )}
    </Disclosure>
  );
};

export default Header;
