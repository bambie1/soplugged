"use client";

import clsx from "clsx";
import Link from "next/link";
import { useCallback, useEffect, useState } from "react";

export function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

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
      className={`w-full ${isScrolled ? "animate-slideDown fixed left-0 top-0" : ""} z-50`}
    >
      <div
        className={clsx(
          "w-full transition-all duration-300",
          isScrolled ? "bg-white shadow-md" : "bg-transparent",
        )}
      >
        <div className="padded">
          <div className="flex h-16 items-center justify-between sm:h-20">
            <div className="flex items-center">
              <Link href="/" className="text-primary text-2xl font-bold">
                <img
                  src="/soplugged_black.svg"
                  alt="SoPlugged logo"
                  className="h-8 lg:h-10"
                />
              </Link>
            </div>
            <nav className="hidden md:block">
              <ul className="flex space-x-4">
                <li>
                  <a href="/" className="text-primary hover:text-primary/80">
                    Home
                  </a>
                </li>
                <li>
                  <a
                    href="/about"
                    className="text-primary hover:text-primary/80"
                  >
                    About
                  </a>
                </li>
                <li>
                  <a
                    href="/services"
                    className="text-primary hover:text-primary/80"
                  >
                    Services
                  </a>
                </li>
                <li>
                  <a
                    href="/contact"
                    className="text-primary hover:text-primary/80"
                  >
                    Contact
                  </a>
                </li>
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
                <li>
                  <a
                    href="/"
                    className="text-primary hover:text-primary/80 block"
                  >
                    Home
                  </a>
                </li>
                <li>
                  <a
                    href="/about"
                    className="text-primary hover:text-primary/80 block"
                  >
                    About
                  </a>
                </li>
                <li>
                  <a
                    href="/services"
                    className="text-primary hover:text-primary/80 block"
                  >
                    Services
                  </a>
                </li>
                <li>
                  <a
                    href="/contact"
                    className="text-primary hover:text-primary/80 block"
                  >
                    Contact
                  </a>
                </li>
              </ul>
            </nav>
          </div>
        </div>
      )}
    </header>
  );
}
