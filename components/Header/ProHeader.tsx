import Link from "next/link";
import Image from "next/image";
import { useRouter } from "next/router";
import { FC, useEffect, useState } from "react";
import { Disclosure } from "@headlessui/react";
import { Dialog } from "@reach/dialog";

import { ButtonLink } from "@/styled/ButtonLink";
import { MobileNav } from "../MobileNav";

import styles from "../../styles/Header.module.scss";

const mainNav = [
  { id: 1, text: "Directory", link: "/search" },
  { id: 2, text: "PRO", link: "/pro" },
  { id: 3, text: "Blog", link: "/blog" },
];

interface Props {
  hideSearch?: boolean;
}

const ProHeader: FC<Props> = ({ hideSearch }) => {
  const router = useRouter();
  const [openMenu, setOpenMenu] = useState(false);

  const toggleMenu = () => setOpenMenu(!openMenu);

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
      } border-transparent bg-transparent`}
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
                <ul className={`hidden md:ml-10 md:flex md:space-x-4`}>
                  {mainNav.map(({ id, text, link }) => (
                    <li key={id} className={`${buildStyles(link)}`}>
                      <ButtonLink href={link}>{text}</ButtonLink>
                    </li>
                  ))}
                </ul>
              </div>

              <ButtonLink href="#">Book consultation</ButtonLink>

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
            </div>
          </div>
        </>
      )}
    </Disclosure>
  );
};

export default ProHeader;
