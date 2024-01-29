import Image from "next/legacy/image";
import Link from "next/link";
import { useState } from "react";
import { Dialog, DialogTrigger, Modal } from "react-aria-components";

import { ButtonLink } from "@/styled/ButtonLink";

import styles from "./MobileHeader.module.css";

const mobileMenu = [
  { id: 1, title: "Our Story", href: "/our-story" },
  {
    id: 2,
    title: "PluggedIn Conference",
    href: "https://pluggedin.soplugged.com/",
    isExternal: true,
  },
  {
    id: 3,
    title: "Business Directory",
    href: "/directory",
    subItems: [
      { title: "By Category", href: "/directory" },
      { title: "By Location", href: "/directory?filter=location" },
    ],
  },
  {
    id: 4,
    title: "Blog",
    href: "/blog",
  },
  {
    id: 5,
    title: "Partners",
    href: "/partners",
  },
];

const MobileHeader = () => {
  const [showMenu, setshowMenu] = useState(false);

  return (
    <div className="lg:hidden">
      <header className="subItems-center flex h-12 justify-between gap-3 px-3">
        <Link
          href="/"
          className="flex flex-shrink-0 items-center"
          onClick={() => setshowMenu(false)}
          passHref
        >
          <Image
            src="/logos/logo-brown.svg"
            alt="SoPlugged Logo"
            width={40}
            height={40}
          />
        </Link>

        <div className="flex items-center gap-4">
          <ButtonLink variant="outlined" href="/join">
            Join Today
          </ButtonLink>

          <DialogTrigger isOpen={showMenu}>
            <button
              aria-label="Mobile menu toggle"
              onClick={() => setshowMenu(!showMenu)}
              className={`${styles.burger} ${showMenu && styles.active}`}
            ></button>

            <Modal className="fixed inset-0 z-[1] bg-light pt-24">
              <Dialog>
                <ul className="mt-10 grid w-full flex-1 content-center gap-10 px-4">
                  {mobileMenu.map((item) => {
                    const { id, href, title, subItems } = item;

                    if (subItems) {
                      return (
                        <li key={id} className="grid">
                          <div className="flex items-center gap-3 text-lg uppercase">
                            {title}
                          </div>

                          <ul className="mt-4 grid gap-3 border-l border-primary/20 pl-4">
                            {subItems.map((item) => {
                              const { title, href } = item;

                              return (
                                <li key={title}>
                                  <Link
                                    href={href}
                                    className="flex items-center gap-3 py-2 text-base"
                                    onClick={() => setshowMenu(false)}
                                  >
                                    {title}
                                  </Link>
                                </li>
                              );
                            })}
                          </ul>
                        </li>
                      );
                    }

                    return (
                      <li key={id} className="grid">
                        <Link
                          href={href}
                          className="flex items-center gap-3 text-lg uppercase"
                          onClick={() => setshowMenu(false)}
                        >
                          {title}
                        </Link>
                      </li>
                    );
                  })}
                </ul>

                <div className="mt-16 grid w-full gap-2 border-t border-gray-100 px-4">
                  <Link
                    href="/join"
                    className="flex justify-center rounded-lg border border-primary p-2 text-lg"
                  >
                    Join the Community
                  </Link>
                </div>
              </Dialog>
            </Modal>
          </DialogTrigger>
        </div>
      </header>
    </div>
  );
};

export default MobileHeader;
