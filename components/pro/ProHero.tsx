import { FC } from "react";

const ProHero: FC = () => {
  return (
    <div className="my-container mb-10 flex min-h-[70vh] items-center py-10 pt-24 text-center md:py-20 lg:min-h-[50vh] lg:pt-40 lg:pb-36">
      <section className="mx-auto flex w-full max-w-4xl flex-col">
        <h1 className="mb-8 text-5xl font-bold leading-[1.05] lg:mb-4 lg:text-6xl lg:leading-[1.2]">
          Scale your business{" "}
          <span className="relative inline-block">
            with ease
            <img
              src="/images/pro-marker.svg"
              className="absolute -bottom-6"
              alt=""
            />
          </span>
        </h1>
        <p className="mx-auto hidden max-w-2xl text-lg lg:block">
          From strategic recommendations to professional services, our team of
          experts is ready to work with you and provide all the support you need
          to grow your business.
        </p>
        <p className="mx-auto max-w-2xl lg:hidden">
          Get strategic recommendations and professional services when you work
          with us
        </p>

        <div className="mx-auto mt-10 flex flex-wrap items-center gap-4">
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
      </section>
    </div>
  );
};

export default ProHero;
