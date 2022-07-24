/* eslint-disable max-len */
import Link from "next/link";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import Stats from "./Stats";

const Hero = () => {
  return (
    <div className="min-h-[95vh] flex flex-col">
      <section className="relative flex-1 flex p-5 min-h-[35rem] justify-center">
        <div className="flex flex-col items-center justify-center text-center w-full">
          <h1 className="text-5xl md:text-5xl lg:text-6xl font-bold">
            Find <span className="text-primary inline-block">black-owned</span>
            <br></br> businesses in Canada
          </h1>
          <p className="text-lg lg:text-2xl mt-6">
            #BuyingBlack just got a LOT easier!
          </p>

          <div className="mt-4 flex flex-col items-end w-full max-w-xl">
            <Link href="/search">
              <a className="w-full relative mt-4">
                <div className="flex absolute inset-y-0 left-0 items-center pl-3 pointer-events-none">
                  <svg
                    aria-hidden="true"
                    className="w-5 h-5 text-gray-500 dark:text-gray-400"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                    ></path>
                  </svg>
                </div>
                <input
                  type="search"
                  id="default-search"
                  className="block p-4 pl-10 w-full lg:text-lg text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500  placeholder-shown:text-ellipsis"
                  placeholder="Search by category, location, or business name"
                />
              </a>
            </Link>

            <Link href="/dashboard">
              <a className="text-sm lg:text-base">I am an entrepreneur</a>
            </Link>
          </div>
        </div>

        <div className="border border-secondary/70 rounded-full absolute -left-16 bottom-[29rem] w-24 h-24 -z-10" />
        <div className="border border-secondary/70 rounded-full absolute -left-20 bottom-72 w-48 h-48 -z-10" />
        <div className="border border-secondary/70 rounded-full absolute -left-20 -bottom-10 w-96 h-96 -z-10" />
      </section>
      <Stats />
    </div>
  );
};

export default Hero;
