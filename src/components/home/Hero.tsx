import Image from "next/image";
import dynamic from "next/dynamic";
import classNames from "classnames";

import { popularCategories } from "@/lib/popularCategories";
import useAlgolia from "@/hooks/useAlgolia";

const Searchbar = dynamic(() => import("../algolia/Searchbar"));

const popularSearches = [
  { title: "Hair", category: "Hair / Beauty" },
  { title: "Catering", category: "Baking / Catering" },
  { title: "Fashion", category: "Fashion" },
];

const HeroImage = ({ index }: { index: number }) => {
  const { handleCategoryClick } = useAlgolia();

  const category = popularCategories[index];

  return (
    <li
      key={index}
      className={classNames("w-full", {
        "col-span-2 row-span-2 row-start-1": index === 0,
        "mt-8": index === 1,
        "mt-16": index === 2,
        "-mt-8": index === 3,
      })}
    >
      <button
        onClick={() => handleCategoryClick(category.title)}
        className="group relative aspect-[2/3] w-full overflow-hidden rounded-xl border border-transparent focus:border-primary"
      >
        <Image
          src={category.url}
          objectFit="cover"
          alt={`Picture of a Black-owned ${category.title} business`}
          layout="fill"
        />
        <div className="absolute bottom-0 flex max-h-[30%] w-full items-center bg-gradient-to-t from-black to-transparent py-2 px-2">
          <p className="truncate text-sm text-white">{category.title}</p>
        </div>
        <div className="absolute inset-0 flex h-full w-full items-center justify-center bg-secondary/30 transition duration-200 hover:bg-transparent"></div>
      </button>
    </li>
  );
};

const Hero = () => {
  const { handleCategoryClick } = useAlgolia();

  return (
    <div className="overflow-x-hidden">
      <div className="my-container flex flex-col py-10 text-center md:py-24 lg:text-left">
        <section className="relative flex-1 items-center justify-center gap-10 py-5 lg:grid lg:grid-cols-5 lg:py-0">
          <div className="relative col-span-3 col-start-1 flex w-full flex-col">
            <h1 className="text-5xl font-bold leading-[1.05] sm:text-6xl lg:leading-[1.2]">
              Discover{" "}
              <div className="relative inline-block text-primary">
                <span>Black-owned</span>
                <img
                  src="/underline_draw.svg"
                  className="absolute -bottom-6"
                  loading="lazy"
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
            <div className="mx-auto mt-6 flex w-full max-w-xl flex-col items-end lg:mx-0 lg:mt-10">
              <Searchbar />
            </div>
            <div className="mt-6 hidden items-center justify-center md:flex lg:justify-start">
              <p className=" italic underline">Popular searches:</p>
              <ul className="ml-4 inline-flex flex-wrap gap-2">
                {popularSearches.map(({ title, category }) => (
                  <li key={title}>
                    <button
                      className="rounded-2xl border border-transparent bg-secondary/30 py-1 px-3 text-sm text-primary transition duration-200 hover:border-primary hover:bg-white"
                      onClick={() => handleCategoryClick(category)}
                    >
                      {title}
                    </button>
                  </li>
                ))}
              </ul>
            </div>
          </div>
          <aside className="col-span-2 col-start-4 hidden w-[120%] lg:flex">
            <div className="ml-auto w-full">
              <ul className="grid flex-1 grid-cols-4 justify-items-end gap-1">
                {[0, 1, 2, 3, 4].map((index) => (
                  <HeroImage index={index} key={index} />
                ))}
              </ul>
            </div>
          </aside>
        </section>
      </div>
    </div>
  );
};

export default Hero;
