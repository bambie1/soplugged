"use client";

import clsx from "clsx";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useCallback, useEffect, useState } from "react";

const NAV_LINKS = [
  { href: "/about", label: "About" },
  { href: "/events", label: "Events" },
  { href: "/directory", label: "Directory" },
  { href: "/blog", label: "Blog" },
  { href: "/join", label: "Join the community" },
];

export function Header() {
  const pathname = usePathname();
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const isHome = pathname === "/";

  const handleScroll = useCallback(() => {
    const scrollPosition = window.scrollY;
    setIsScrolled(scrollPosition > 500);

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
    <header
      className={clsx("z-50 w-full", {
        "animate-slideDown fixed left-0 top-0": isScrolled,
      })}
    >
      <div
        className={clsx("w-full transition-all duration-300", {
          "bg-white shadow-md": isScrolled && !isHome,
          "bg-black": isScrolled && isHome,
        })}
      >
        <div className="padded">
          <div className="flex h-16 items-center justify-between sm:h-20">
            <Link href="/" className="z-30">
              <img
                src={
                  isHome && !isMobileMenuOpen
                    ? "/soplugged.svg"
                    : "/soplugged_black.svg"
                }
                alt="SoPlugged logo"
                className="h-8 lg:h-10"
              />
            </Link>
            <nav className="hidden md:block">
              <ul className="flex space-x-4">
                {NAV_LINKS.map(({ href, label }) => (
                  <li key={href}>
                    <Link
                      href={href}
                      className={clsx("hover:text-primary/80", {
                        "font-bold": pathname === href,
                      })}
                    >
                      {label}
                    </Link>
                  </li>
                ))}
              </ul>
            </nav>
            <div className="md:hidden">
              <button
                onClick={toggleMobileMenu}
                className="fixed right-4 top-6 z-30 flex flex-col items-center justify-center space-y-2"
              >
                <span
                  className={clsx(
                    "h-0.5 w-10 rounded-full transition-transform",
                    {
                      "translate-y-1 rotate-45 transform": isMobileMenuOpen,
                      "bg-white": isHome && !isMobileMenuOpen,
                      "bg-black": !isHome || (isHome && isMobileMenuOpen),
                    },
                  )}
                ></span>
                <span
                  className={clsx(
                    "h-0.5 w-10 rounded-full transition-transform",
                    {
                      "-translate-y-1 -rotate-45 transform": isMobileMenuOpen,
                      "bg-white": isHome && !isMobileMenuOpen,
                      "bg-black": !isHome || (isHome && isMobileMenuOpen),
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
                    href={href}
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
            <a
              href="/join"
              className="block w-full rounded-full bg-black px-6 py-4 text-center text-lg font-medium text-white transition-colors hover:bg-black/90"
            >
              Join the community
            </a>
          </div>
        </div>
      </div>
    </header>
  );
}
