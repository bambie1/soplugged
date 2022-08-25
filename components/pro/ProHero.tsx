import { FC } from "react";

const ProHero: FC = () => {
  return (
    <div className="relative flex h-screen snap-start">
      <div className="my-container flex flex-1">
        <div className="flex h-full w-full flex-1 flex-col justify-center pt-16 pb-10 lg:max-w-[60%] lg:items-start">
          <div className="flex min-h-0 justify-center lg:hidden">
            <img src="/instagram_reel.svg" alt="" className="object-contain" />
          </div>

          <h1 className="mb-6 text-4xl font-bold lg:text-6xl">
            Grow your{" "}
            <span className="text-accent-dark lg:block">
              e-commerce business
            </span>{" "}
            with ease
          </h1>
          <p className="w-[90%] lg:text-xl">
            Get strategic recommendations and professional services when you
            work with us on anything
          </p>

          <div className="mt-10 flex flex-wrap items-center gap-4">
            <a
              href="#book-consult"
              className="rounded-md bg-black px-4 py-3 text-white"
            >
              Book a FREE consultation
            </a>
            <a href="#custom-website" className="border-b border-black">
              Learn more
            </a>
          </div>
        </div>
      </div>
      <aside className="absolute top-0 right-0 hidden h-full w-[40%] bg-gradient-to-b from-accent to-accent/5 lg:flex">
        <div className="relative flex flex-1 items-center justify-center overflow-hidden px-10 pt-24 pb-10">
          {/* <div className="absolute top-1/3 aspect-square w-48 animate-ping-slow rounded-full border-[1px] border-black/60 delay-100 lg:w-72"></div> */}
          <div className="inset-center aspect-square w-36 animate-ping-slow rounded-full border-[1px] border-black/60 lg:w-56"></div>
          <img
            src="/instagram_reel.svg"
            alt="2 iPhones placed side-by-side displaying instagram reels"
            className="z-[1]"
          />
        </div>
      </aside>
    </div>
  );
};

export default ProHero;
