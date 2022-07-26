/* eslint-disable @next/next/no-img-element */
/* eslint-disable max-len */
import Link from "next/link";
import Image from "next/image";

import { popularCategories } from "@/lib/popularCategories";
import useAlgolia from "@/hooks/useAlgolia";

const HeroImage = ({ index }: any) => {
  const { handleCategoryClick } = useAlgolia();

  return (
    <li
      key={index}
      className={`w-[60%]  ${index === 1 || index === 4 ? "mr-20" : ""}`}
    >
      <button
        onClick={() => handleCategoryClick(popularCategories[index].title)}
        className="focus:border-primary border-2 border-transparent aspect-square rounded-full overflow-hidden group relative w-full"
      >
        <div className="absolute inset-0 z-[2] bg-secondary/30 duration-500 transition hover:bg-gradient-to-r hover:from-secondary/70 hover:to-white/70 w-full h-full flex items-center justify-center">
          <p className="z-10 opacity-0 group-hover:opacity-100 duration-300 transition uppercase font-semibold border-b border-black">
            {popularCategories[index].title}
          </p>
        </div>
        <Image
          src={popularCategories[index].url}
          objectFit="cover"
          alt=""
          layout="fill"
        />
      </button>
    </li>
  );
};

const Hero = () => {
  return (
    <div className="flex flex-col my-container py-10 md:py-20 pt-24 lg:pt-36 text-center lg:text-left">
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
                  className="block p-4 pl-10 w-full lg:text-lg text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-primary focus:border-primary  placeholder-shown:text-ellipsis"
                  placeholder="Search by category, location, or business name"
                />
              </a>
            </Link>
            <Link href="/dashboard">
              <a className="text-base mt-2 border-b border-primary">
                I am an entrepreneur
              </a>
            </Link>
          </div>
        </div>
        <aside className="flex flex-col col-start-5 col-span-3">
          <div className="hidden lg:flex ml-auto w-full -space-x-24">
            <ul className="flex flex-col flex-1 items-end">
              {[0, 1, 2].map((index) => (
                <HeroImage index={index} key={index} />
              ))}
            </ul>
            <ul className="flex flex-col flex-1 items-end">
              {[3, 4, 5].map((index) => (
                <HeroImage index={index} key={index} />
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
