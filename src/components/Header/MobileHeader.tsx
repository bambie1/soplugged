import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { DialogOverlay, DialogContent } from "@reach/dialog";

import styles from "./MobileHeader.module.css";
import { ButtonLink } from "@/styled/ButtonLink";

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
      <header className="flex h-12 items-center justify-between gap-3 px-3">
        <Link href="/">
          <a
            className="flex flex-shrink-0 items-center"
            onClick={() => setshowMenu(false)}
          >
            <Image
              src="/logos/logo-brown.svg"
              alt="SoPlugged Logo"
              width={40}
              height={40}
            />
          </a>
        </Link>

        <div className="flex items-center gap-4">
          <ButtonLink variant="outlined" href="/join">
            Join Today
          </ButtonLink>

          <button
            aria-label="Mobile menu toggle"
            onClick={() => setshowMenu(!showMenu)}
            className={`${styles.burger} ${showMenu && styles.active}`}
          ></button>
        </div>
      </header>

      <DialogOverlay
        className="lg:hidden"
        isOpen={showMenu}
        onDismiss={() => setshowMenu(false)}
      >
        <DialogContent
          aria-label="Mobile nav links"
          className={styles.dialogContent}
        >
          <ul className="grid w-full flex-1 content-center gap-10 px-4">
            {mobileMenu.map((item) => {
              const { id, href, title } = item;

              return (
                <li key={id} className="grid">
                  <Link href={href}>
                    <a
                      className="flex items-center gap-3 text-lg uppercase"
                      onClick={() => setshowMenu(false)}
                    >
                      {title}
                    </a>
                  </Link>
                </li>
              );
            })}
          </ul>

          <div className="mt-auto grid w-full gap-2 border-t border-gray-100 px-4">
            <Link href="/join">
              <a className="flex justify-center rounded-lg border border-primary p-2 text-lg">
                Join the Community
              </a>
            </Link>
          </div>
        </DialogContent>
      </DialogOverlay>
    </div>
  );
};

export default MobileHeader;
