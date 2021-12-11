import { FC, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { Dialog } from "@reach/dialog";

import styles from "./Header.module.scss";
import { NavLinks } from "../NavLinks";
interface Props {
  color?: "brown" | "blue" | "transparent";
  hideLinks?: boolean;
}

const Header: FC<Props> = ({ color, hideLinks }) => {
  const [openMenu, setOpenMenu] = useState(false);

  const toggleMenu = () => setOpenMenu(!openMenu);

  const wrapperStyles = () => {
    let colorStyle = "";

    if (hideLinks) return `${styles.headerWrapper} ${styles.hideLinks}`;

    if (color === "blue") colorStyle = styles.blue;
    else if (color === "brown") colorStyle = styles.brown;
    else if (color === "transparent") colorStyle = styles.transparent;

    return `${styles.headerWrapper} ${colorStyle} ${
      openMenu ? styles.withModal : ""
    }`;
  };

  return (
    <>
      {/* <p>PROOO</p> */}
      <div className={wrapperStyles()}>
        <header className={`${styles.header} container`}>
          <Link href="/">
            <a>
              <Image
                src="/soplugged-logo.png"
                alt="SoPlugged Logo"
                width={40}
                height={40}
              />
            </a>
          </Link>

          {!hideLinks && (
            <div className="hideOnMobile">
              <NavLinks />
            </div>
          )}

          <button className={`button ${styles.menuBtn}`} onClick={toggleMenu}>
            <div
              className={`${styles.burger} ${openMenu && styles.open}`}
            ></div>
          </button>

          <Dialog
            isOpen={openMenu}
            aria-label="Mobile menu"
            className={styles.mobileMenu}
          >
            <NavLinks />
          </Dialog>
        </header>
      </div>
    </>
  );
};

export default Header;
