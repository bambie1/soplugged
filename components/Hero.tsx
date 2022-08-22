import dynamic from "next/dynamic";

import CategoriesGrid from "./CategoriesGrid";

const Searchbar = dynamic(() => import("./algolia/Searchbar"));

const Hero = () => {
  return (
    <div className="my-container flex flex-col py-10 pt-24 text-center md:pt-36 lg:text-left">
      <section className="relative flex-1 items-center justify-center gap-10 py-5 lg:grid lg:grid-cols-5 lg:py-0">
        <div className="relative col-span-3 col-start-1 flex w-full flex-col">
          <h1 className="text-5xl font-bold leading-[1.05] lg:text-6xl lg:leading-[1.2]">
            Discover{" "}
            <div className="relative inline-block text-primary">
              <span>black-owned</span>
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
          <div className="mx-auto mt-6 flex w-full max-w-xl flex-col items-end lg:mx-0">
            <Searchbar />
          </div>
        </div>
        <aside className="col-span-2 col-start-4 hidden flex-col lg:flex">
          <CategoriesGrid />
        </aside>
      </section>
    </div>
  );
};

export default Hero;
