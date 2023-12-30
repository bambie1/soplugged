import Link from "next/link";
import Image from "next/image";
import { FC } from "react";
import classNames from "classnames";
import * as NavigationMenu from "@radix-ui/react-navigation-menu";

import { ButtonLink } from "@/styled/ButtonLink";

import MobileHeader from "./MobileHeader";
import NavLink from "@/styled/NavLink";
import { ChevronDownIcon } from "@heroicons/react/outline";

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
      { text: "By Location", link: "/directory?filter=location" },
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
          "relative z-20 w-full py-3 transition duration-100 lg:py-2",
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

            <NavigationMenu.Root className="relative z-[1] flex justify-center">
              <NavigationMenu.List>
                <ul className="flex items-center gap-4 rounded-full bg-light px-6 py-4">
                  {links.map(({ id, text, link, isExternal, items }) =>
                    items ? (
                      <NavigationMenu.Item key={id}>
                        <NavigationMenu.Trigger className="group flex items-center gap-[2px]">
                          {text}

                          <ChevronDownIcon
                            className="group-data-[state=open]:-rotate-180 relative h-4 w-4 transition-transform duration-200 ease-in"
                            strokeWidth={1}
                            aria-hidden
                          />
                        </NavigationMenu.Trigger>

                        <NavigationMenu.Content className="absolute top-0 left-0 w-full">
                          <ul className="flex flex-col gap-2">
                            {items.map(({ text, link }) => (
                              <li key={text}>
                                <NavLink href={link}>{text}</NavLink>
                              </li>
                            ))}
                          </ul>
                        </NavigationMenu.Content>
                      </NavigationMenu.Item>
                    ) : (
                      <li key={id}>
                        <NavLink href={link} isExternal={isExternal}>
                          {text}
                        </NavLink>
                      </li>
                    )
                  )}
                </ul>
              </NavigationMenu.List>

              <NavigationMenu.Viewport />
            </NavigationMenu.Root>

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
