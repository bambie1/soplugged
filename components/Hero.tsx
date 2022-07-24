/* eslint-disable @next/next/no-img-element */
/* eslint-disable max-len */
import Link from "next/link";
import Image from "next/image";

import { popularCategories } from "@/lib/popularCategories";

const Hero = () => {
  return (
    <div className="flex lg:min-h-[90vh] flex-col my-container py-10 md:py-20 lg:py-0 text-center lg:text-left">
      <section className="relative gap-3 lg:grid lg:grid-cols-7 flex-1 py-5 justify-center items-center">
        <div className="relative flex flex-col w-full col-start-1 col-span-4">
          <h1 className="text-5xl lg:text-6xl font-bold leading-[1.05] lg:leading-[1.2]">
            Discover{" "}
            <div className="text-primary inline-block relative">
              <span>black-owned</span>
              <img
                src="/underline_draw.svg"
                className="absolute -bottom-6"
                alt=""
              />
            </div>
            <br></br> businesses in Canada
          </h1>
          <p className="lg:hidden text-lg mt-6">
            Connecting black businesses with the consumers that love them.
          </p>
          <p className="hidden lg:block text-lg w-[90%] mt-6">
            Find everything from restaurants, hairstylists and salons to
            tutoring, tech and healthcare services.
          </p>
          <div className="mt-4 flex flex-col items-end w-full max-w-xl mx-auto lg:mx-0">
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
              <a className="text-base mt-2 underline">I am an entrepreneur</a>
            </Link>
          </div>
        </div>
        <aside className="flex flex-col col-start-5 col-span-3">
          <div className="hidden lg:flex ml-auto w-full -space-x-24">
            <ul className="flex flex-col flex-1 items-end">
              {[0, 1, 2].map((item) => (
                <li
                  key={item}
                  className={`relative w-[60%] aspect-square rounded-full overflow-hidden ${
                    item === 1 ? "mr-20" : ""
                  }`}
                >
                  <div className="absolute inset-0 z-[2] bg-secondary/30 w-full h-full" />
                  <Image
                    src={popularCategories[item].url}
                    objectFit="cover"
                    alt=""
                    layout="fill"
                  />
                </li>
              ))}
            </ul>
            <ul className="flex flex-col flex-1 items-end">
              {[3, 4, 5].map((item) => (
                <li
                  key={item}
                  className={`relative w-[60%] aspect-square rounded-full overflow-hidden ${
                    item === 4 ? "mr-20" : ""
                  }`}
                >
                  <div className="absolute inset-0 z-[2] bg-secondary/30 w-full h-full" />
                  <Image
                    src={popularCategories[item].url}
                    objectFit="cover"
                    alt=""
                    layout="fill"
                  />
                </li>
              ))}
            </ul>
          </div>
        </aside>
        {/* <div className="border border-secondary/50 rounded-full absolute -left-16 bottom-[29rem] w-24 h-24 -z-10" />
          <div className="border border-secondary/50 rounded-full absolute -left-20 bottom-72 w-[60%] aspect-square -z-10" />
        <div className="border border-secondary/50 rounded-full absolute -left-20 -bottom-10 w-96 h-96 -z-10" /> */}
      </section>
    </div>
  );
};

export default Hero;
