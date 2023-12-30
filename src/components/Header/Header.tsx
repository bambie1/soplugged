import Link from "next/link";
import Image from "next/image";
import { FC } from "react";
import classNames from "classnames";

import { ButtonLink } from "@/styled/ButtonLink";

import MobileHeader from "./MobileHeader";
import NavLink from "@/styled/NavLink";

const links = [
  { id: 4, text: "Our Story", link: "/our-story" },
  {
    id: 1,
    text: "PluggedIn Conference",
    link: "https://pluggedin.soplugged.com/",
    isExternal: true,
  },
  {
    id: 5,
    text: "Directory",
    link: "/directory",
    items: [
      { text: "By Category", link: "/directory" },
      { text: "By Location", link: "/directory/location" },
    ],
  },
  { id: 3, text: "Blog", link: "/blog" },
];

interface Props {
  whiteBg?: boolean;
  className?: string;
}

const Header: FC<Props> = ({ whiteBg }) => {
  return (
    <>
      <nav
        className={classNames(
          "relative z-20 w-full overflow-hidden py-3 transition duration-100 lg:py-2",
          { "bg-light": !whiteBg }
        )}
      >
        <MobileHeader />

        <div className="mx-auto hidden w-full max-w-7xl px-8 lg:block 2xl:max-w-screen-2xl">
          <div className="flex h-16 items-center justify-between">
            <Link href="/">
              <a className="flex flex-shrink-0 items-center gap-2">
                <Image
                  src="/logos/logo-brown.svg"
                  alt="SoPlugged Logo"
                  width={40}
                  height={40}
                />
                <span className="text-2xl font-medium tracking-tight text-primary">
                  SoPlugged
                </span>
              </a>
            </Link>
            <ul className="flex items-center gap-4 rounded-full bg-light px-6 py-4">
              {links.map(({ id, text, link, isExternal }) => (
                <li key={id}>
                  <NavLink href={link} isExternal={isExternal}>
                    {text}
                  </NavLink>
                </li>
              ))}
            </ul>

            <div className="flex items-center gap-2">
              <ButtonLink href="/join" variant="outlined">
                Join the Community
              </ButtonLink>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Header;
