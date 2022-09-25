import { SparklesIcon } from "@heroicons/react/outline";
import Link from "next/link";
import { FC, useEffect, useState } from "react";

const features = [
  { title: "brand" },
  { title: "audience" },
  { title: "business" },
];

const ProHero: FC = () => {
  const [textIndex, setTextIndex] = useState(0);

  // useEffect(() => {
  //   const interval = setInterval(() => {
  //     setTextIndex((prevIndex) =>
  //       prevIndex === features.length - 1 ? 0 : prevIndex + 1
  //     );
  //   }, 6000);

  //   return () => clearInterval(interval);
  // }, []);

  return (
    <>
      <div className="my-container relative flex grid-cols-2 flex-col items-center justify-center xl:grid xl:gap-10">
        <div className="relative mx-auto flex flex-col items-center pt-10 text-center md:pt-20 xl:text-left">
          <div className="mb-3 flex items-center gap-2 rounded-xl bg-secondary/[.15] px-4 py-2 xl:mr-auto">
            <SparklesIcon className="h-5 w-5" strokeWidth={1} />
            <p className="text-sm lg:text-base">Introducing SoPlugged PRO</p>
          </div>
          <h1 className="relative mx-auto mb-3 text-6xl font-semibold transition duration-1000 lg:text-7xl xl:mb-6 xl:text-[5rem]">
            <span className="">We help</span> grow{" "}
            <span
              key={textIndex}
              className={`roll-out block bg-gradient-to-l from-black to-accent-dark bg-clip-text pb-2 text-transparent xl:inline-block`}
            >
              your {features[textIndex].title}
            </span>
          </h1>
          <p className="text-lg xl:text-xl">
            Hire our team of experts to handle your digital needs, from custom
            websites to social media management
          </p>
          <div className="mt-10 flex flex-col items-center gap-4 xl:mt-20 xl:flex-row xl:self-start">
            <Link href="#book-consult">
              <a className="rounded-md bg-black px-4 py-3 text-lg text-white transition duration-200 hover:-translate-y-1 focus-visible:outline-offset-2 xl:py-4 xl:px-5 xl:text-xl">
                Book a FREE consultation
              </a>
            </Link>
          </div>
        </div>

        <div className="example mt-10 h-[545px] w-[560px] xl:h-[722px] xl:w-[795px]"></div>
      </div>
    </>
  );
};

export default ProHero;
