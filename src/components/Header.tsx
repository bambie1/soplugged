"use client";

import clsx from "clsx";
import { List } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useCallback, useEffect, useState } from "react";
import React from "react";

import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuIndicator,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  NavigationMenuViewport,
} from "@/components/ui/navigation-menu";
import { cn } from "@/lib/utils";

const NAV_LINKS = [
  { href: "/our-story", label: "Our story" },
  { href: "/events", label: "Events" },
  { href: "/directory", label: "Directory" },
  // { label: "Resources", subItems: [{ href: "/blog", label: "Blog" }] },
];

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

export function Header({ isDark }: { isDark?: boolean }) {
  const pathname = usePathname();
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const handleScroll = useCallback(() => {
    const scrollPosition = window.scrollY;
    setIsScrolled(scrollPosition > 200);

    // Close mobile menu when scrolling
    if (isMobileMenuOpen) {
      setIsMobileMenuOpen(false);
    }
  }, [isMobileMenuOpen]);

  useEffect(() => {
    const handleScrollDebounced = () => {
      handleScroll();
    };

    window.addEventListener("scroll", handleScrollDebounced);
    return () => {
      window.removeEventListener("scroll", handleScrollDebounced);
    };
  }, [handleScroll]);

  // Prevent scrolling when mobile menu is open
  useEffect(() => {
    document.body.style.overflow = isMobileMenuOpen ? "hidden" : "unset";
    return () => {
      document.body.style.overflow = "unset"; // Ensure to reset on cleanup
    };
  }, [isMobileMenuOpen]);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen((prev) => !prev);
  };

  return (
    <header className={clsx("fixed left-0 top-0 z-50 w-full")}>
      <div
        className={clsx("w-full transition-all duration-300", {
          "border-b border-black/10 bg-white": isScrolled && !isDark,
          "border-b border-white/50 bg-black/90 backdrop-blur-md":
            isScrolled && isDark,
        })}
      >
        <div className="padded">
          <div className="flex h-16 items-center justify-between sm:h-20">
            <Link href="/" className="z-30">
              <img
                src={
                  isDark && !isMobileMenuOpen
                    ? "/logos/soplugged.svg"
                    : "/logos/soplugged_black.svg"
                }
                alt="SoPlugged logo"
                className="h-8 lg:h-10"
              />
            </Link>
            <nav className="hidden md:block">
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
                      <NavigationMenuLink className="flex items-center gap-2 rounded-full border border-white px-4 py-2">
                        Join the community
                      </NavigationMenuLink>
                    </Link>
                  </NavigationMenuItem>
                </NavigationMenuList>
              </NavigationMenu>
            </nav>
            <div className="md:hidden">
              <button
                onClick={toggleMobileMenu}
                className={clsx(
                  "flex flex-col items-center justify-center space-y-2",
                  { "fixed right-4 top-6 z-30": isMobileMenuOpen },
                )}
              >
                <span
                  className={clsx(
                    "h-0.5 w-10 rounded-full transition-transform",
                    {
                      "translate-y-1 rotate-45 scale-75 transform":
                        isMobileMenuOpen,
                      "bg-white": isDark && !isMobileMenuOpen,
                      "bg-black": !isDark || (isDark && isMobileMenuOpen),
                    },
                  )}
                ></span>
                <span
                  className={clsx(
                    "h-0.5 w-10 rounded-full transition-transform",
                    {
                      "-translate-y-1 -rotate-45 scale-75 transform":
                        isMobileMenuOpen,
                      "bg-white": isDark && !isMobileMenuOpen,
                      "bg-black": !isDark || (isDark && isMobileMenuOpen),
                    },
                  )}
                ></span>
              </button>
            </div>
          </div>
        </div>
      </div>
      <div
        className={clsx(
          "fixed inset-0 z-20 bg-white text-black transition-transform duration-300 md:hidden",
          {
            hidden: !isMobileMenuOpen,
          },
        )}
      >
        <div className="padded flex h-full flex-col pt-24">
          <nav className="flex-1">
            <ul className="mt-10 space-y-8 text-2xl">
              {NAV_LINKS.map(({ href, label }) => (
                <li key={href}>
                  <Link
                    href="/"
                    className={clsx("uppercase", {
                      "font-bold": pathname === href,
                    })}
                  >
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          <div className="mt-auto pb-8">
            <Link
              href="/join"
              className="block w-full rounded-full bg-black px-6 py-4 text-center text-lg font-medium text-white transition-colors hover:bg-black/90"
            >
              Join the community
            </Link>
          </div>
        </div>
      </div>
    </header>
  );
}

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
