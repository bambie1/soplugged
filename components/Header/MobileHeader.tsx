import { useRouter } from "next/router";
import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { DialogOverlay, DialogContent } from "@reach/dialog";

import Searchbar from "../algolia/Searchbar";

import styles from "styles/MobileHeader.module.css";

const MobileHeader = ({ currentNav }: any) => {
  const [showMenu, setshowMenu] = useState(false);
  const router = useRouter();

  return (
    <div className="my-container md:hidden">
      <header className="flex h-12 items-center justify-between gap-3">
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
        <div className="w-[calc(100%-100px)]">
          {router.asPath.startsWith("/search") && !showMenu && <Searchbar />}
        </div>
        <button
          aria-label="Mobile menu toggle"
          onClick={() => setshowMenu(!showMenu)}
          className={`${styles.burger} ${showMenu && styles.active}`}
        ></button>
      </header>

      <DialogOverlay isOpen={showMenu} onDismiss={() => setshowMenu(false)}>
        <DialogContent
          aria-label="Mobile nav links"
          className={styles.dialogContent}
        >
          <ul className={`space-y-10`}>
            {currentNav.links.map(({ id, text, link }: any) => (
              <li key={id}>
                <Link href={link}>
                  <a className="text-xl uppercase">{text}</a>
                </Link>
              </li>
            ))}
          </ul>
        </DialogContent>
      </DialogOverlay>
    </div>
  );
};

export default MobileHeader;
