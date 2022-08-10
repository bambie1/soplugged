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
        isStyled ? "lg:border-secondary/40 lg:bg-white" : "border-transparent"
      }`}
    >
      {({ open }) => (
        <>
          <div className="mx-auto max-w-7xl px-2 sm:px-4 lg:px-8">
            <div className="flex h-16 items-center justify-between">
              <div className="flex px-2 lg:px-0">
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
                <div className="hidden lg:ml-10 lg:flex lg:space-x-8">
                  {mainNav.map(({ text, link }) => (
                    <Link href={link} key={text}>
                      <a
                        className={`${
                          router.asPath.startsWith(link)
                            ? "border-primary font-bold text-primary"
                            : "border-transparent font-medium text-gray-900"
                        } inline-flex items-center border-b-2 px-1 pt-1`}
                      >
                        {text}
                      </a>
                    </Link>
                  ))}
                </div>
              </div>
              <div className="flex flex-1 items-center justify-center px-2 lg:ml-6 lg:justify-end">
                <div className="w-full max-w-lg lg:max-w-sm">
                  {router.asPath !== "/" &&
                    !router.asPath.startsWith("/pro") &&
                    !router.asPath.startsWith("/blog") && <Searchbar />}
                </div>
              </div>
              <div className="lg:hidden">
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
                  className={`lg:hidden ${styles.mobileMenu}`}
                >
                  <MobileNav />
                </Dialog>
              </div>
              <div className="hidden lg:ml-4 lg:flex lg:items-center">
                {/* Profile dropdown */}
                <Menu as="div" className="relative ml-4 flex-shrink-0">
                  <div>
                    <Menu.Button className="flex rounded-full bg-white text-sm focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2">
                      <span className="sr-only">Open user menu</span>
                      <img
                        className="h-8 w-8 rounded-full"
                        src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                        alt=""
                      />
                    </Menu.Button>
                  </div>
                  <Transition
                    as={Fragment}
                    enter="transition ease-out duration-100"
                    enterFrom="transform opacity-0 scale-95"
                    enterTo="transform opacity-100 scale-100"
                    leave="transition ease-in duration-75"
                    leaveFrom="transform opacity-100 scale-100"
                    leaveTo="transform opacity-0 scale-95"
                  >
                    <Menu.Items className="absolute right-0 mt-2 w-48 origin-top-right rounded-md bg-white py-1 shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
                      <Menu.Item>
                        {({ active }) => (
                          <a
                            href="#"
                            className={classNames(
                              active ? "bg-gray-100" : "",
                              "block px-4 py-2 text-sm text-gray-700"
                            )}
                          >
                            Your Profile
                          </a>
                        )}
                      </Menu.Item>
                      <Menu.Item>
                        {({ active }) => (
                          <a
                            href="#"
                            className={classNames(
                              active ? "bg-gray-100" : "",
                              "block px-4 py-2 text-sm text-gray-700"
                            )}
                          >
                            Settings
                          </a>
                        )}
                      </Menu.Item>
                      <Menu.Item>
                        {({ active }) => (
                          <a
                            href="#"
                            className={classNames(
                              active ? "bg-gray-100" : "",
                              "block px-4 py-2 text-sm text-gray-700"
                            )}
                          >
                            Sign out
                          </a>
                        )}
                      </Menu.Item>
                    </Menu.Items>
                  </Transition>
                </Menu>
              </div>
            </div>
          </div>
        </>
      )}
    </Disclosure>
  );
}
