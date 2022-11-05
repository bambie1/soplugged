import { ArrowCircleDownIcon, SparklesIcon } from "@heroicons/react/outline";
import Link from "next/link";
import { FC, useEffect, useState } from "react";
import { usePlausible } from "next-plausible";

import { ProCTAType } from "@/types/Plausible";

const features = [
  { title: "brand" },
  { title: "audience" },
  { title: "business" },
];

const ProHero: FC = () => {
  const plausible = usePlausible();
  const [textIndex, setTextIndex] = useState(0);

  const renderLearnMore = () => (
    <Link href="#our-process">
      <a className="flex items-center gap-2 font-light uppercase lg:text-lg">
        Learn more
        <ArrowCircleDownIcon
          className="mt-2 h-6 w-6 animate-bounce-slow"
          strokeWidth={0.5}
        />
      </a>
    </Link>
  );

  return (
    <div className="bg-gradient-to-b from-white via-accent/20 to-white">
      <div className="my-container relative flex grid-cols-2 flex-col items-center justify-center pt-10 md:pt-20 xl:grid xl:gap-10 xl:pt-10">
        <div className="relative mx-auto flex flex-col items-center text-center xl:text-left">
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
          <p className="max-w-2xl text-lg xl:text-xl">
            Hire our team of experts to handle your digital needs, from custom
            websites to social media management
          </p>
          <div className="mt-10 flex flex-col items-center gap-4 xl:mt-20 xl:flex-row xl:gap-10 xl:self-start">
            <Link href="#book-consult">
              <a
                className="rounded-md bg-black px-4 py-3 text-lg text-white transition duration-200 hover:-translate-y-1 focus-visible:outline-offset-2 xl:py-4 xl:px-5 xl:text-xl"
                onClick={() =>
                  plausible("Book consult CTA", {
                    props: { position: "Hero" } as ProCTAType,
                  })
                }
              >
                Book a FREE consultation
              </a>
            </Link>
            {renderLearnMore()}
          </div>
        </div>

        <div className="pro_hero_image mt-10 h-[545px] w-[560px] xl:h-[600px] xl:w-[610px]"></div>
      </div>
    </div>
  );
};

export default ProHero;
