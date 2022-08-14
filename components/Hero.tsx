/* eslint-disable @next/next/no-img-element */

import Link from "next/link";
import Image from "next/image";
import dynamic from "next/dynamic";

import { popularCategories } from "@/lib/popularCategories";
import useAlgolia from "@/hooks/useAlgolia";

const Searchbar = dynamic(() => import("./algolia/Searchbar"));

const HeroImage = ({ index }: any) => {
  const { handleCategoryClick } = useAlgolia();

  const category = popularCategories[index];

  return (
    <li
      key={index}
      className={`w-[60%]  ${index === 1 || index === 4 ? "mr-20" : ""}`}
    >
      <button
        onClick={() => handleCategoryClick(category.title)}
        className="group relative aspect-square w-full overflow-hidden rounded-full border-2 border-transparent focus:border-primary"
      >
        <div className="absolute inset-0 z-[2] flex h-full w-full items-center justify-center bg-secondary/30 transition duration-500 hover:bg-gradient-to-r hover:from-secondary/70 hover:to-white/70">
          <p className="border-b border-black font-semibold uppercase opacity-0 transition duration-300 group-hover:opacity-100">
            {category.title}
          </p>
        </div>
        <Image
          src={category.url}
          objectFit="cover"
          alt={`Picture of a black-owned ${category.title} business`}
          layout="fill"
        />
      </button>
    </li>
  );
};

const Hero = () => {
  return (
    <div className="my-container flex flex-col py-10 pt-24 text-center md:pt-36 lg:text-left">
      <section className="relative flex-1 items-center justify-center gap-3 py-5 lg:grid lg:grid-cols-7">
        <div className="relative col-span-4 col-start-1 flex w-full flex-col">
          <h1 className="text-5xl font-bold leading-[1.05] lg:text-6xl lg:leading-[1.2]">
            Discover{" "}
            <div className="relative inline-block text-primary">
              <span>black-owned</span>
              <img
                src="/underline_draw.svg"
                className="absolute -bottom-6"
                alt=""
              />
            </div>
            <br></br> businesses in Canada
          </h1>
          <p className="mt-6 text-lg lg:hidden">
            Connecting black businesses with the consumers that love them.
          </p>
          <p className="mt-3 hidden w-[90%] text-lg lg:block">
            Find everything from restaurants, hairstylists and salons to
            tutoring, tech and healthcare services.
          </p>
          <div className="mx-auto mt-6 flex w-full max-w-xl flex-col items-end lg:mx-0">
            <Searchbar />
          </div>
        </div>
        {/* <img
          src="/squiggly-arrow.svg"
          className="absolute top-1/2 left-1/2 ml-20 mt-10 -translate-x-1/2 -translate-y-1/2 transform"
          alt=""
        /> */}
        <aside className="col-span-3 col-start-5 flex flex-col">
          <div className="ml-auto hidden w-full -space-x-24 lg:flex">
            <ul className="flex flex-1 flex-col items-end">
              {[0, 1, 2].map((index) => (
                <HeroImage index={index} key={index} />
              ))}
            </ul>
            <ul className="flex flex-1 flex-col items-end">
              {[3, 4, 5].map((index) => (
                <HeroImage index={index} key={index} />
              ))}
            </ul>
          </div>
        </aside>
      </section>
    </div>
  );
};

export default Hero;
