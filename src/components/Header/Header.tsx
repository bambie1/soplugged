import * as NavigationMenu from "@radix-ui/react-navigation-menu";
import classNames from "classnames";
import Image from "next/legacy/image";
import Link from "next/link";
import { useRouter } from "next/router";
import { FC } from "react";

import { ButtonLink } from "@/styled/ButtonLink";

import MobileHeader from "./MobileHeader";

const links = [
  { id: 4, text: "Our Story", link: "/our-story" },
  {
    id: 5,
    text: "Directory",
    link: "/directory",
    items: [
      { text: "By Category", link: "/directory" },
      { text: "By Location", link: "/directory?filter=location" },
    ],
  },
  {
    id: 1,
    text: "PluggedIn Conference",
    link: "https://pluggedin.soplugged.com/",
    isExternal: true,
  },
  { id: 3, text: "Blog", link: "/blog" },
];

interface Props {
  whiteBg?: boolean;
  className?: string;
}

const Header: FC<Props> = ({ whiteBg }) => {
  const router = useRouter();

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
            <Link href="/" className="flex flex-shrink-0 items-center gap-2">
              <Image
                src="/logos/logo-brown.svg"
                alt="SoPlugged Logo"
                width={40}
                height={40}
              />
              <span className="text-2xl font-medium tracking-tight text-primary">
                SoPlugged
              </span>
            </Link>

            <NavigationMenu.Root className="relative z-[1] flex justify-center">
              <NavigationMenu.List className="flex items-center gap-4 rounded-full bg-light px-6 py-3">
                {links.map(({ id, text, link, isExternal, items }) => {
                  const isActive = router.asPath.startsWith(link);

                  return (
                    <NavigationMenu.Item key={id}>
                      <NavigationMenu.Link
                        href={link}
                        target={isExternal ? "_blank" : undefined}
                        rel={isExternal ? "noopener noreferrer" : undefined}
                        className={classNames(
                          "border-b text-base tracking-wide",
                          {
                            "border-primary": isActive,
                            "border-transparent": !isActive,
                          }
                        )}
                      >
                        {text}
                      </NavigationMenu.Link>
                    </NavigationMenu.Item>
                  );
                })}

                <NavigationMenu.Indicator className="data-[state=visible]:animate-fadeIn data-[state=hidden]:animate-fadeOut top-full z-[1] flex h-[10px] items-end justify-center overflow-hidden transition-[width,transform_250ms_ease]">
                  <div className="relative top-[70%] h-[10px] w-[10px] rotate-[45deg] rounded-tl-[2px] bg-white" />
                </NavigationMenu.Indicator>
              </NavigationMenu.List>

              <div className="perspective-[2000px] absolute left-0 top-full flex w-full justify-center">
                <NavigationMenu.Viewport className="relative mr-14 h-[var(--radix-navigation-menu-viewport-height)] w-[var(--radix-navigation-menu-viewport-width)] max-w-[14rem] origin-[top_center] overflow-hidden rounded-lg border border-primary/50 bg-white shadow-md shadow-primary/30 transition-[width,_height] duration-200" />
              </div>
            </NavigationMenu.Root>

            <div className="flex items-center gap-2">
              <ButtonLink
                href="https://dashboard.soplugged.com"
                variant="outlined"
                target="_blank"
              >
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
