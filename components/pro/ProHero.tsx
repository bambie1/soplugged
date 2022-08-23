import { FC } from "react";

const ProHero: FC = () => {
  return (
    <div className="relative mb-10 flex min-h-[70vh] items-center bg-accent/10 lg:min-h-[40rem]">
      <section className="my-container flex w-full flex-col py-10 pt-24 md:py-20 lg:pt-48 lg:pb-36">
        <div className="lg:max-w-[55%]">
          <h1 className="mb-8 text-5xl font-bold leading-[1.05] lg:mb-4 lg:text-6xl lg:leading-[1.2]">
            Scale your business{" "}
            <span className="relative inline-block">
              with ease
              <img
                src="/images/pro-marker.svg"
                className="absolute -bottom-6"
                alt=""
                loading="lazy"
              />
            </span>
          </h1>
          <p className="hidden max-w-2xl text-lg lg:block">
            From strategic recommendations to professional services, our team of
            experts is ready to work with you and provide all the support you
            need to grow your business.
          </p>
          <p className="max-w-2xl lg:hidden">
            Get strategic recommendations and professional services when you
            work with us
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
      </section>

      <aside className="absolute top-0 right-0 ml-auto hidden h-full w-[40%] bg-gradient-to-r from-accent/10 to-accent/60 lg:flex">
        <div>
          <img
            src="/pro_illustration.png"
            alt=""
            className="absolute -left-10 -bottom-10 max-h-[80%]"
          />
        </div>
      </aside>
    </div>
  );
};

export default ProHero;
