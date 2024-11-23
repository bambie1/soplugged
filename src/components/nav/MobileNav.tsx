"use client";

import clsx from "clsx";
import { AnimatePresence, motion } from "framer-motion";
import Link from "next/link";
import { useCallback, useEffect, useState } from "react";
import React from "react";

import type { NavProps } from ".";

const NAV_LINKS = [
  { href: "/our-story", label: "Our story" },
  { href: "/events", label: "Events" },
  { href: "/directory", label: "Directory" },
  // { label: "Resources", subItems: [{ href: "/blog", label: "Blog" }] },
];

export const MobileNav = ({ isLight }: NavProps) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const showLight = !isMenuOpen && isLight && !isScrolled;

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
                src={
                  showLight
                    ? "/logos/soplugged_black.svg"
                    : "/logos/soplugged.svg"
                }
                alt="SoPlugged logo"
                className="h-8 lg:h-10"
              />
            </Link>

            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="z-20 flex h-16 w-16 cursor-pointer items-center justify-center"
            >
              <div className="relative w-full">
                <div
                  className={clsx(
                    "absolute left-1/2 h-[1px] w-3/5 -translate-x-1/2 transform transition-transform",
                    isMenuOpen ? "top-[calc(50%-1px)] rotate-45" : "-top-1",
                    showLight ? "bg-black" : "bg-white",
                  )}
                ></div>
                <div
                  className={clsx(
                    "absolute left-1/2 h-[1px] -translate-x-1/2 transform transition-transform",
                    isMenuOpen
                      ? "top-[calc(50%-1px)] w-3/5 -rotate-45"
                      : "top-1 w-1/2",
                    showLight ? "bg-black" : "bg-white",
                  )}
                ></div>
              </div>
            </button>

            <AnimatePresence mode="wait">
              {isMenuOpen && (
                <motion.div
                  variants={{
                    initial: { y: "-100%" },

                    enter: {
                      y: "0",
                      transition: { duration: 0.2, ease: [0.76, 0, 0.24, 1] },
                    },

                    exit: {
                      y: "-100%",
                      transition: { duration: 0.2, ease: [0.76, 0, 0.24, 1] },
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
