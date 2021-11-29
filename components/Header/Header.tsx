import { FC, useState } from "react";
import Link from "next/link";
import Image from "next/image";

import styles from "./Header.module.scss";
import { NavLinks } from "../NavLinks";
interface Props {
  color?: "brown" | "blue" | "transparent";
}

const Header: FC<Props> = ({ color }) => {
  const wrapperStyles = () => {
    let colorStyle = "";

    if (color === "blue") colorStyle = styles.blue;
    else if (color === "brown") colorStyle = styles.brown;
    else if (color === "transparent") colorStyle = styles.transparent;

    return `${styles.headerWrapper} ${colorStyle}`;
  };

  return (
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

        <NavLinks />
      </header>
    </div>
  );
};

export default Header;
