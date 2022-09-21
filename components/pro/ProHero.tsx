import Link from "next/link";
import { FC } from "react";

const ProHero: FC = () => {
  return (
    <>
      <div className="my-container relative flex items-center justify-center">
        {/* <div className="absolute inset-0 -z-[1] bg-radial-pro"></div> */}
        <div className="relative mx-auto flex flex-col items-center py-10 text-center md:py-20">
          <h1 className="relative mx-auto mb-3 pb-2 text-7xl font-bold lg:mb-6 lg:max-w-5xl lg:text-8xl xl:text-[7rem]">
            <span className="relative inline-flex">
              <img
                src="doodles/pen-tool.svg"
                alt=""
                className="absolute top-4 -left-10 h-12 grayscale-[.4] md:top-10"
              />
              Design.
            </span>{" "}
            <span className="relative inline-flex">
              <img
                src="doodles/zap.svg"
                alt=""
                className="absolute top-4 -right-10 h-12 grayscale-[.4] md:top-10"
              />
              Build.
            </span>{" "}
            <span className="relative inline-block bg-gradient-to-r from-accent-dark to-black bg-clip-text pb-2 text-transparent">
              <img
                src="doodles/send.svg"
                alt=""
                className="absolute top-4 -right-10 h-12 grayscale-[.4] md:top-10"
              />{" "}
              Launch.
            </span>
          </h1>
          <p className="lg:max-w-3xl lg:text-xl xl:text-2xl">
            Hire our team of experts to handle your digital needs, from custom
            websites to social media management
          </p>
          <div className="mt-10 flex flex-col items-center gap-4 lg:mt-20 lg:flex-row">
            <Link href="#book-consult">
              <a className="rounded-md bg-black px-4 py-3 text-white transition duration-200 hover:-translate-y-1 focus-visible:outline-offset-2 lg:py-4 lg:px-5 lg:text-xl">
                Book a FREE consultation
              </a>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default ProHero;
