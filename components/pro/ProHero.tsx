import { FC } from "react";

const ProHero: FC = () => {
  return (
    <div className="relative flex h-screen">
      <div className="my-container flex flex-1">
        <div className="flex h-full w-full flex-1 flex-col justify-center pt-16 pb-10 lg:max-w-[60%] lg:items-start">
          <div className="flex min-h-0 justify-center lg:hidden">
            <img src="/instagram_reel.png" alt="" className="object-contain" />
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
            <a href="#book-consult" className="border-b border-black">
              Learn more
            </a>
          </div>
        </div>
      </div>
      <aside className="absolute top-0 right-0 hidden h-full w-[40%] bg-accent lg:flex">
        <div className="flex flex-1 items-center justify-center p-10">
          <img src="/instagram_reel.png" alt="" className="" />
        </div>
      </aside>
    </div>
  );
};

export default ProHero;
