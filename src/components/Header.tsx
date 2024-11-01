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
                      className={clsx("text-primary hover:text-primary/80", {
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
                className="text-primary px-2 py-1 md:hidden"
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
      {isMobileMenuOpen && (
        <div className="bg-background md:hidden">
          <div className="container mx-auto px-4 py-4">
            <nav>
              <ul className="space-y-4">
                {NAV_LINKS.map(({ href, label }) => (
                  <li key={href}>
                    <Link
                      href={href}
                      className="text-primary hover:text-primary/80 block"
                    >
                      {label}
                    </Link>
                  </li>
                ))}
              </ul>
            </nav>
          </div>
        </div>
      )}
    </header>
  );
}
