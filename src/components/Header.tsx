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
    if (scrollPosition > 500) {
      setIsScrolled(true);
    } else {
      setIsScrolled(false);
    }
  }, []);

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [handleScroll]);

  // Prevent scrolling when mobile menu is open
  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isMobileMenuOpen]);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
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
            <div className="flex items-center">
              <Link href="/">
                <img
                  src={isHome ? "/soplugged.svg" : "/soplugged_black.svg"}
                  alt="SoPlugged logo"
                  className="h-8 lg:h-10"
                />
              </Link>
            </div>
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
                className={clsx("px-2 py-1 md:hidden", {
                  "text-black": isMobileMenuOpen,
                })}
                onClick={toggleMobileMenu}
                aria-expanded={isMobileMenuOpen}
                aria-label="Toggle menu"
              >
                {isMobileMenuOpen ? "Close" : "Menu"}
              </button>
            </div>
          </div>
        </div>
      </div>
      <div
        className={clsx(
          "fixed inset-0 z-50 bg-white text-black transition-transform duration-300 md:hidden",
          isMobileMenuOpen ? "translate-y-0" : "translate-y-full",
        )}
      >
        <div className="container mx-auto flex h-full flex-col px-4 py-8">
          <div className="mb-12 flex items-center justify-between">
            <Link href="/">
              <img
                src="/soplugged_black.svg"
                alt="SoPlugged logo"
                className="h-8 lg:h-10"
              />
            </Link>
            <button
              onClick={toggleMobileMenu}
              className="flex h-8 w-8 flex-col items-center justify-center text-black"
              aria-label="Close menu"
            >
              <span
                className={clsx(
                  "h-0.5 w-6 transform bg-black transition-all duration-300",
                  "translate-y-0.5 rotate-45",
                )}
              />
              <span
                className={clsx(
                  "h-0.5 w-6 transform bg-black transition-all duration-300",
                  "-translate-y-0 -rotate-45",
                )}
              />
            </button>
          </div>

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
