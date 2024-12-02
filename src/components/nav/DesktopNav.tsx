"use client";

import clsx from "clsx";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useCallback, useEffect, useState } from "react";
import React from "react";

import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
} from "@/components/ui/navigation-menu";

import type { NavProps } from ".";
import { DesktopNavItem } from "./DesktopNavItem";

const resources: { title: string; href: string; description: string }[] = [
  {
    title: "Blog",
    href: "/blog",
    description:
      "Helpful articles and resources for building your business and brand",
  },
  {
    title: "TBM Podcast",
    href: "/podcast",
    description:
      "Listen to our podcast for interviews with Black entrepreneurs and business owners",
  },
];

const navLinks = [
  { title: "About Us", href: "/our-story" },
  { title: "Events", href: "/events" },
  { title: "Business Directory", href: "/directory" },
  { title: "Resources", href: "", children: resources },
];

export const DesktopNav = ({ isLight }: NavProps) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const pathname = usePathname();

  const handleScroll = useCallback(() => {
    const scrollPosition = window.scrollY;
    setIsScrolled(scrollPosition > 200);
  }, []);

  useEffect(() => {
    const handleScrollDebounced = () => {
      handleScroll();
    };

    window.addEventListener("scroll", handleScrollDebounced);
    return () => {
      window.removeEventListener("scroll", handleScrollDebounced);
    };
  }, [handleScroll]);

  return (
    <header className={clsx("fixed left-0 top-0 z-50 w-full")}>
      <div
        className={clsx("w-full transition-all duration-300", {
          "border-white/50 bg-black/90": isScrolled && !isLight,
          "border-black/20 bg-white/90": isScrolled && isLight,
          "border-b backdrop-blur-md": isScrolled,
          "text-white": !isLight,
          "text-black": isLight,
        })}
      >
        <div className="padded">
          <div className="flex h-16 items-center justify-between sm:h-20">
            <Link href="/" className="z-30">
              <Image
                height={150}
                width={150}
                src={
                  isLight
                    ? "/logos/soplugged_black.svg"
                    : "/logos/soplugged.svg"
                }
                alt="SoPlugged logo"
                className="h-8 lg:h-10"
                priority
              />
            </Link>
            <nav>
              <NavigationMenu>
                <NavigationMenuList>
                  {navLinks.map((item) => (
                    <DesktopNavItem key={item.title} item={item} />
                  ))}

                  <NavigationMenuItem>
                    <Link href="/join" legacyBehavior passHref>
                      <NavigationMenuLink
                        className={clsx(
                          "flex items-center gap-2 rounded-full border px-4 py-2",
                          isLight ? "border-black" : "border-white",
                        )}
                      >
                        Join the community
                      </NavigationMenuLink>
                    </Link>
                  </NavigationMenuItem>
                </NavigationMenuList>
              </NavigationMenu>
            </nav>
          </div>
        </div>
      </div>
    </header>
  );
};
