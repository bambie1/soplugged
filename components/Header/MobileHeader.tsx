import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { DialogOverlay, DialogContent } from "@reach/dialog";

import styles from "styles/MobileHeader.module.css";

const mainNav = [
  { id: 1, text: "Directory", link: "/search" },
  { id: 2, text: "PRO", link: "/pro" },
  { id: 3, text: "Blog", link: "/blog" },
];

const MobileHeader = () => {
  const [showMenu, setshowMenu] = useState(false);

  return (
    <nav
      className={`my-container sticky top-0 z-10 border-b border-gray-300 bg-white py-2 md:hidden`}
    >
      <header className="flex items-center justify-between">
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
        <button
          onClick={() => setshowMenu(!showMenu)}
          className={`${styles.burger} ${showMenu && styles.active}`}
        ></button>
      </header>

      <DialogOverlay isOpen={showMenu} onDismiss={() => setshowMenu(false)}>
        <DialogContent className={styles.dialogContent}>
          <ul className={`space-y-4`}>
            {mainNav.map(({ id, text, link }) => (
              <li key={id}>
                <Link href={link}>
                  <a>{text}</a>
                </Link>
              </li>
            ))}
          </ul>
        </DialogContent>
      </DialogOverlay>
    </nav>
  );
};

export default MobileHeader;
