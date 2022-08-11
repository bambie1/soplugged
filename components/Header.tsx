import Link from "next/link";
import Image from "next/image";
import { useRouter } from "next/router";
import dynamic from "next/dynamic";
import { Fragment, useEffect, useState } from "react";
import { Disclosure, Menu, Transition } from "@headlessui/react";
import { Dialog } from "@reach/dialog";

import { MobileNav } from "./MobileNav";

import styles from "../styles/Header.module.scss";

const Searchbar = dynamic(() => import("./algolia/Searchbar"));

function classNames(...classes: any) {
  return classes.filter(Boolean).join(" ");
}

const mainNav = [
  { id: 1, text: "Directory", link: "/search" },
  { id: 2, text: "PRO", link: "/pro" },
  { id: 3, text: "Blog", link: "/blog" },
];

export default function Example() {
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
                <div className="hidden md:ml-10 md:flex md:space-x-8">
                  {mainNav.map(({ text, link }) => (
                    <Link href={link} key={text}>
                      <a
                        className={`${
                          router.asPath.startsWith(link)
                            ? "border-primary text-primary"
                            : "border-transparent"
                        } inline-flex items-center border-b-[1px] px-1 pt-1 hover:border-primary hover:text-primary lg:text-lg`}
                      >
                        {text}
                      </a>
                    </Link>
                  ))}
                </div>
              </div>
              <div className="flex flex-1 items-center justify-center px-2 md:ml-6 md:justify-end">
                <div className="w-full max-w-lg md:max-w-sm">
                  {router.asPath !== "/" &&
                    !router.asPath.startsWith("/pro") &&
                    !router.asPath.startsWith("/blog") && <Searchbar />}
                </div>
              </div>
              <div className="md:hidden">
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
}
