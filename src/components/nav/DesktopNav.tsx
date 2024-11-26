"use client";

import clsx from "clsx";
import Link from "next/link";
import { useCallback, useEffect, useState } from "react";
import React from "react";

import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";
import { cn } from "@/lib/utils";

import type { NavProps } from ".";

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
  {
    title: "Events",
    href: "/events",
    description: "Join our events and workshops to grow your business",
  },
];

export const DesktopNav = ({ isLight }: NavProps) => {
  const [isScrolled, setIsScrolled] = useState(false);

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
          "border-white/50 bg-black/90 text-white": isScrolled && !isLight,
          "border-black/20 bg-white/90 text-black": isScrolled && isLight,
          "border-b backdrop-blur-md": isScrolled,
        })}
      >
        <div className="padded">
          <div className="flex h-16 items-center justify-between sm:h-20">
            <Link href="/" className="z-30">
              <img
                src={
                  isLight
                    ? "/logos/soplugged_black.svg"
                    : "/logos/soplugged.svg"
                }
                alt="SoPlugged logo"
                className="h-8 lg:h-10"
              />
            </Link>
            <nav className="">
              <NavigationMenu>
                <NavigationMenuList>
                  <NavigationMenuItem>
                    <Link href="/our-story" legacyBehavior passHref>
                      <NavigationMenuLink>Our story</NavigationMenuLink>
                    </Link>
                  </NavigationMenuItem>
                  <NavigationMenuItem>
                    <Link href="/directory" legacyBehavior passHref>
                      <NavigationMenuLink>
                        Business Directory
                      </NavigationMenuLink>
                    </Link>
                  </NavigationMenuItem>{" "}
                  <NavigationMenuItem>
                    <NavigationMenuTrigger>Resources</NavigationMenuTrigger>
                    <NavigationMenuContent>
                      <ul className="grid w-[400px] gap-3 p-4">
                        {resources.map((component) => (
                          <ListItem
                            key={component.title}
                            title={component.title}
                            href={component.href}
                          >
                            {component.description}
                          </ListItem>
                        ))}
                      </ul>
                    </NavigationMenuContent>
                  </NavigationMenuItem>
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

const ListItem = React.forwardRef<
  React.ElementRef<"a">,
  React.ComponentPropsWithoutRef<"a">
>(({ className, title, children, ...props }, ref) => {
  return (
    <li>
      <NavigationMenuLink asChild>
        <a
          ref={ref}
          className={cn(
            "hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground flex select-none gap-4 space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-black/5",
            className,
          )}
          {...props}
        >
          <div className="h-10 w-10 shrink-0 rounded-full border"></div>
          <div>
            <div className="mb-2 font-semibold">{title}</div>
            <p className="line-clamp-2 text-sm opacity-80">{children}</p>
          </div>
        </a>
      </NavigationMenuLink>
    </li>
  );
});

ListItem.displayName = "ListItem";
