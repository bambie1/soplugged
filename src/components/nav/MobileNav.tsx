"use client";

import clsx from "clsx";
import { AnimatePresence, motion } from "framer-motion";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useCallback, useEffect, useState } from "react";
import React from "react";
import { NavProps } from ".";

const NAV_LINKS = [
  { href: "/our-story", label: "Our story" },
  { href: "/events", label: "Events" },
  { href: "/directory", label: "Directory" },
  // { label: "Resources", subItems: [{ href: "/blog", label: "Blog" }] },
];

export const MobileNav = (props: NavProps) => {
  const pathname = usePathname();
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleScroll = useCallback(() => {
    const scrollPosition = window.scrollY;
    setIsScrolled(scrollPosition > 200);

    // Close mobile menu when scrolling
    if (isMenuOpen) {
      setIsMenuOpen(false);
    }
  }, [isMenuOpen]);

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
    document.body.style.overflow = isMenuOpen ? "hidden" : "unset";
    return () => {
      document.body.style.overflow = "unset"; // Ensure to reset on cleanup
    };
  }, [isMenuOpen]);

  const toggleMobileMenu = () => {
    setIsMenuOpen((prev) => !prev);
  };

  return (
    <header className={clsx("fixed left-0 top-0 z-50 w-full")}>
      <div
        className={clsx("w-full transition-all duration-300", {
          "border-b border-white/50 bg-black/90": isScrolled,
        })}
      >
        <div className="padded">
          <div className="flex h-16 items-center justify-between sm:h-20">
            <Link href="/" className="z-30">
              <img
                src="/logos/soplugged.svg"
                alt="SoPlugged logo"
                className="h-8 lg:h-10"
              />
            </Link>

            <div>
              <button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="fixed right-0 top-0 z-20 mx-4 flex h-16 w-16 cursor-pointer items-center justify-center"
              >
                <div className="relative w-full">
                  <div
                    className={clsx(
                      "absolute left-1/2 h-[1px] w-3/5 -translate-x-1/2 transform bg-white transition-transform",
                      isMenuOpen ? "top-[calc(50%-1px)] rotate-45" : "-top-1",
                    )}
                  ></div>
                  <div
                    className={clsx(
                      "absolute left-1/2 h-[1px] w-3/5 -translate-x-1/2 transform bg-white transition-transform",
                      isMenuOpen ? "top-[calc(50%-1px)] -rotate-45" : "top-1",
                    )}
                  ></div>
                </div>
              </button>
            </div>

            <AnimatePresence mode="wait">
              {isMenuOpen && (
                <motion.div
                  variants={{
                    initial: { x: "calc(100% + 100px)" },

                    enter: {
                      x: "0",
                      transition: { duration: 0.8, ease: [0.76, 0, 0.24, 1] },
                    },

                    exit: {
                      x: "calc(100% + 100px)",
                      transition: { duration: 0.8, ease: [0.76, 0, 0.24, 1] },
                    },
                  }}
                  initial="initial"
                  animate="enter"
                  exit="exit"
                  className="fixed right-0 top-0 h-screen w-screen bg-black/80 text-white backdrop-blur-lg"
                >
                  <div className="box-border flex h-full flex-col justify-between p-4">
                    <div className="mt-40 flex flex-col gap-3 text-4xl">
                      {NAV_LINKS.map((data, index) => (
                        <Link
                          href={data.href}
                          key={index}
                          className={clsx(
                            "mb-4 border-b border-white/20 pb-6 font-light text-white no-underline transition",
                          )}
                        >
                          {data.label}
                        </Link>
                      ))}
                    </div>
                    <div className="flex flex-wrap justify-between gap-4">
                      <a href="#" className="text-white hover:text-gray-400">
                        Awwwards
                      </a>
                      <a href="#" className="text-white hover:text-gray-400">
                        Instagram
                      </a>
                      <a href="#" className="text-white hover:text-gray-400">
                        Dribble
                      </a>
                      <a href="#" className="text-white hover:text-gray-400">
                        LinkedIn
                      </a>
                    </div>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </div>
      </div>
    </header>
  );
};
