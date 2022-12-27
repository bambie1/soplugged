import { ArrowCircleDownIcon, SparklesIcon } from "@heroicons/react/outline";
import Link from "next/link";
import { FC } from "react";

const ProHero: FC = () => {
  return (
    <div className="pt-10 lg:pt-32">
      <div className="my-container text-center">
        <h1 className="mx-auto mb-3 max-w-5xl text-[2.9rem] text-5xl font-bold lg:text-7xl xl:mb-6">
          Provide the best online experience to{" "}
          <span className="text-gray-500">your customers</span>
        </h1>

        <p className="mx-auto max-w-3xl font-light text-gray-500 lg:text-2xl">
          Hire our team of experts to handle your digital needs, from custom
          websites to social media management
        </p>

        <div className="mt-8 flex flex-col items-center justify-center gap-4 xl:mt-14 xl:flex-row xl:gap-10">
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

      <div className="my-container mt-16 aspect-square w-full bg-[url('/pro_hero.png')] bg-cover sm:bg-contain md:-mb-10 md:aspect-[3/1] lg:mt-20"></div>
    </div>
  );
};

export default ProHero;
