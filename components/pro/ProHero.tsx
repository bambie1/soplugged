import Link from "next/link";
import { FC, useEffect, useState } from "react";

const features = [
  { title: "brand" },
  { title: "audience" },
  { title: "business" },
];

const ProHero: FC = () => {
  const [textIndex, setTextIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setTextIndex((prevIndex) =>
        prevIndex === features.length - 1 ? 0 : prevIndex + 1
      );
    }, 6000);

    return () => clearInterval(interval);
  }, []);

  return (
    <>
      <div className="my-container relative flex flex-col items-center justify-center">
        <div className="relative mx-auto flex flex-col items-center pt-10 text-center md:pt-20">
          <h1 className="relative mx-auto mb-3 text-6xl font-semibold transition duration-1000 lg:mb-6 lg:max-w-5xl lg:text-7xl xl:text-[5rem]">
            <span className="">We help</span> grow your{" "}
            <span
              key={textIndex}
              className={`roll-out block bg-gradient-to-r from-black to-accent-dark bg-clip-text pb-2 text-transparent`}
            >
              {features[textIndex].title}
            </span>
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

        <div className="example mt-10 h-[545px] w-[560px] gap-4 lg:h-[572px] lg:w-[1189px]"></div>
      </div>
    </>
  );
};

export default ProHero;
