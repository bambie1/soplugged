/* eslint-disable @next/next/no-img-element */
import Link from "next/link";

export const MissionStatement = () => {
  return (
    <div className="page-section relative mt-10 overflow-hidden">
      <img
        alt="lines"
        decoding="async"
        data-nimg="1"
        className="absolute bottom-40 left-0 top-0 z-0 h-full min-w-[1650px] opacity-10 md:bottom-0 lg:opacity-20 xl:w-[2148px] xl:min-w-[2148px]"
        src="/waves.svg"
        loading="lazy"
      ></img>

      <div className="padded flex flex-col items-start bg-black">
        <p className="z-10 mb-2 font-medium text-yellow-50 opacity-70">
          Our journey began with a simple question
        </p>
        <p className="z-10 mb-8 max-w-2xl text-3xl tracking-tight lg:text-4xl xl:text-5xl">
          How can we close the gap for Black entrepreneurs who often face unique
          challenges in visibility and resources?
        </p>

        <Link
          href="/our-story"
          className="z-10 py-8 underline decoration-yellow-100 underline-offset-8 transition-all duration-150 hover:underline-offset-4"
        >
          Read our story
        </Link>
      </div>
    </div>
  );
};
