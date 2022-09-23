import Link from "next/link";
import { FC } from "react";

const ProHero: FC = () => {
  return (
    <>
      <div className="my-container relative flex flex-col items-center justify-center">
        <div className="relative mx-auto flex flex-col items-center pt-10 text-center md:pt-20">
          <h1 className="relative mx-auto mb-3 pb-2 text-6xl font-bold lg:mb-6 lg:max-w-5xl lg:text-7xl xl:text-[5rem]">
            <span className="bg-gradient-to-l from-black to-accent-dark bg-clip-text text-transparent">
              Websites
            </span>{" "}
            your <br></br>customers will love
          </h1>
          <p className="text-lg font-light lg:max-w-3xl lg:text-xl xl:text-2xl">
            Hire our team of experts to handle your digital needs, from custom
            websites to social media management
          </p>
          <div className="mt-10 flex flex-col items-center gap-4 lg:mt-20 lg:flex-row">
            <Link href="#book-consult">
              <a className="rounded-md bg-black px-4 py-3 text-lg text-white transition duration-200 hover:-translate-y-1 focus-visible:outline-offset-2 lg:py-4 lg:px-5 lg:text-xl">
                Book a FREE consultation
              </a>
            </Link>
          </div>
        </div>
        <img loading="lazy" src="/brandbird.webp" alt="" className="" />
      </div>
    </>
  );
};

export default ProHero;
