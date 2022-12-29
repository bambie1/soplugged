import { useRouter } from "next/router";
import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import dynamic from "next/dynamic";
import { DialogOverlay, DialogContent } from "@reach/dialog";
import { SearchIcon } from "@heroicons/react/outline";

import styles from "./MobileHeader.module.css";

const SignOutButton = dynamic(() => import("../SignOutButton"));
const Searchbar = dynamic(() => import("../algolia/Searchbar"));

const mobileMenu = [
  { id: 1, title: "Browse businesses", href: "/search/all", isSearch: true },
  {
    id: 2,
    title: "SoPlugged Pro",
    subLinks: [
      { id: "2a", title: "Learn more", href: "/pro#learn-more" },
      { id: "2b", title: "Book a FREE consult", href: "/pro#book-consult" },
    ],
  },
  {
    id: 3,
    title: "Community",
    subLinks: [
      { id: "3a", title: "Our story", href: "/our-story" },
      { id: "3b", title: "Read our blog", href: "/blog" },
      // { id: "3c", title: "SoRandom series", href: "/so-random" },
      { id: "3d", title: "Become a sponsor", href: "/sponsors" },
      {
        id: "3e",
        title: "Follow us on IG",
        href: "https://www.instagram.com/sopluggd/",
        isExternal: true,
      },
    ],
  },
];

const MobileHeader = () => {
  const [showMenu, setshowMenu] = useState(false);
  const router = useRouter();

  return (
    <div className="md:hidden">
      <header className="flex h-12 items-center justify-between gap-3 px-3">
        <Link href="/">
          <a
            className="flex flex-shrink-0 items-center"
            onClick={() => setshowMenu(false)}
          >
            <Image
              src="/logos/logo-brown.svg"
              alt="SoPlugged Logo"
              width={40}
              height={40}
            />
          </a>
        </Link>
        <div className="w-[calc(100%-100px)]">
          {router.asPath.startsWith("/search") && !showMenu && <Searchbar />}
        </div>
        <button
          aria-label="Mobile menu toggle"
          onClick={() => setshowMenu(!showMenu)}
          className={`${styles.burger} ${showMenu && styles.active}`}
        ></button>
      </header>

      <DialogOverlay
        className={styles.dialogOverlay}
        isOpen={showMenu}
        onDismiss={() => setshowMenu(false)}
      >
        <DialogContent
          aria-label="Mobile nav links"
          className={styles.dialogContent}
        >
          <ul className={`grid w-full gap-10 px-4`}>
            {mobileMenu.map((item) => {
              const { id, href, title, subLinks } = item;

              if (href)
                return (
                  <li key={id} className="grid">
                    <Link href={href}>
                      <a
                        className="flex items-center gap-3 text-lg font-medium uppercase"
                        onClick={() => setshowMenu(false)}
                      >
                        <SearchIcon className="h-6 w-6" strokeWidth={1} />
                        {title}
                      </a>
                    </Link>
                  </li>
                );

              return (
                <li key={id}>
                  <span className="text-lg font-medium uppercase">{title}</span>
                  <ul className="mt-2 grid gap-4 border-l pl-3">
                    {subLinks?.map((link) => {
                      const { id, href, title } = link;

                      return (
                        <li key={id} className="grid">
                          <Link href={href}>
                            <a
                              className={`text-lg ${
                                router.asPath.startsWith(href)
                                  ? "border-l border-gray-800 pl-2 font-medium text-gray-800"
                                  : "text-gray-600"
                              }`}
                              onClick={() => setshowMenu(false)}
                            >
                              {title}
                            </a>
                          </Link>
                        </li>
                      );
                    })}
                  </ul>
                </li>
              );
            })}
          </ul>

          <div className="mt-auto grid w-full gap-2 border-t border-gray-100 px-4">
            {router.asPath.startsWith("/dashboard") ? (
              <span className="mt-2 flex justify-center p-2 text-lg text-red-500">
                <SignOutButton />
              </span>
            ) : (
              <Link href="/dashboard">
                <a className="mt-2 flex justify-center rounded-lg p-2 text-lg">
                  Log in to dashboard
                </a>
              </Link>
            )}

            <Link href="/my-business">
              <a className="flex justify-center rounded-lg border border-primary p-2 text-lg">
                Add your business
              </a>
            </Link>
          </div>
        </DialogContent>
      </DialogOverlay>
    </div>
  );
};

export default MobileHeader;
