import { useRouter } from "next/router";
import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import dynamic from "next/dynamic";
import { DialogOverlay, DialogContent } from "@reach/dialog";

import styles from "styles/MobileHeader.module.css";

const SignOutButton = dynamic(() => import("../SignOutButton/SignOutButton"));
const Searchbar = dynamic(() => import("../algolia/Searchbar"));

const MobileHeader = ({ currentNav }: any) => {
  const [showMenu, setshowMenu] = useState(false);
  const router = useRouter();

  return (
    <div className="my-container md:hidden">
      <header className="flex h-12 items-center justify-between gap-3">
        <Link href="/">
          <a className="flex flex-shrink-0 items-center">
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

      <DialogOverlay isOpen={showMenu} onDismiss={() => setshowMenu(false)}>
        <DialogContent
          aria-label="Mobile nav links"
          className={styles.dialogContent}
        >
          <ul className={`w-full space-y-10`}>
            {currentNav.links.map(({ id, text, link, isNew }: any) => (
              <li key={id}>
                <Link href={link}>
                  <a className="relative flex p-2 text-2xl uppercase">
                    {text}
                    {isNew && (
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24"
                        fill="currentColor"
                        className="h-3 w-3 text-accent-dark"
                      >
                        <path
                          fillRule="evenodd"
                          d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.007 5.404.433c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.433 2.082-5.006z"
                          clipRule="evenodd"
                        />
                      </svg>
                    )}
                  </a>
                </Link>
              </li>
            ))}
          </ul>
          <Link href={currentNav.cta.link}>
            <a className="mt-20 ml-2 inline-flex items-center gap-4 border-b border-primary py-1 text-2xl">
              {currentNav.cta.text}{" "}
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6 transition duration-200 group-hover:translate-x-1"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={1}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M17 8l4 4m0 0l-4 4m4-4H3"
                />
              </svg>
            </a>
          </Link>

          {router.asPath.startsWith("/dashboard") && (
            <span className="mt-auto mb-20 ml-2 text-2xl text-red-500">
              <SignOutButton />
            </span>
          )}
        </DialogContent>
      </DialogOverlay>
    </div>
  );
};

export default MobileHeader;
