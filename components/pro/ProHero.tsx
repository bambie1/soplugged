import { ArrowCircleDownIcon, SparklesIcon } from "@heroicons/react/outline";
import Link from "next/link";
import { FC } from "react";

const features = [
  { title: "brand" },
  { title: "audience" },
  { title: "business" },
];

const ProHero: FC = () => {
  return (
    <div className="pt-10 lg:pt-32">
      <div className="my-container text-center">
        {/* mobile h1 styling */}
        <h1 className="mx-auto mb-3 max-w-5xl text-5xl text-[2.9rem] font-semibold leading-tight sm:hidden">
          Provide the <span className="block">best online</span> experience to
          your customers
        </h1>

        {/* tablet+ h1 styling */}
        <h1 className="mx-auto mb-3 hidden max-w-5xl text-5xl font-semibold sm:block lg:text-7xl xl:mb-6">
          Provide the best online experience to your customers
        </h1>

        <p className="mx-auto max-w-3xl text-lg font-light text-gray-700 lg:text-2xl">
          Hire our team of experts to handle your digital needs, from custom
          websites to social media management
        </p>

        <div className="mt-10 flex flex-col items-center justify-center gap-4 xl:mt-20 xl:flex-row xl:gap-10">
          <Link href="#book-consult">
            <a className="rounded-md bg-black px-4 py-3 text-lg text-white transition duration-200 hover:-translate-y-1 focus-visible:outline-offset-2 xl:py-4 xl:px-5 xl:text-xl">
              Book a FREE consultation
            </a>
          </Link>
          <Link href="#learn-more">
            <a className="flex items-center gap-2 font-light uppercase lg:text-lg">
              Learn more
              <ArrowCircleDownIcon
                className="mt-2 h-6 w-6 animate-bounce-slow"
                strokeWidth={0.5}
              />
            </a>
          </Link>
        </div>
      </div>

      <div className="my-container mt-16 aspect-video w-full border border-gray-400 lg:mt-20 lg:aspect-[3/1] lg:w-auto lg:rounded-xl"></div>
    </div>
  );
};

export default ProHero;
