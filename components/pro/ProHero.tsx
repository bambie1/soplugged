import Link from "next/link";
import { FC, useEffect, useState } from "react";

const business_types = ["e-commerce", "freelance"];

const BusinessTypes = () => {
  const [textIndex, setTextIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setTextIndex((prevIndex) =>
        prevIndex === business_types.length - 1 ? 0 : prevIndex + 1
      );
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  return (
    <span className="absolute left-1/2 -top-6 w-full -translate-x-1/2 font-handwriting text-2xl text-accent-dark transition duration-200 md:-left-10 md:-top-6 md:w-auto md:translate-x-0 lg:-top-8 xl:-left-16 xl:text-3xl">
      {business_types[textIndex]}
    </span>
  );
};

const ProHero: FC = () => {
  return (
    <>
      <div className="my-container relative flex items-center justify-center">
        <div className="absolute inset-0 -z-[1] bg-radial-pro"></div>
        <div className="mx-auto flex flex-col items-center py-10 text-center md:py-20">
          <h1 className="mb-6 text-6xl font-bold lg:max-w-4xl lg:text-7xl xl:text-[6rem]">
            Grow your{" "}
            <span className="relative mt-6 inline-flex md:mt-0">
              <img
                src="/caret.svg"
                alt=""
                className="absolute -left-5 -bottom-4 hidden w-8 md:inline-block lg:-left-6 lg:bottom-0 lg:w-10"
              />
              <BusinessTypes />
              business
            </span>{" "}
            <span className="relative inline-block">with ease</span>
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
