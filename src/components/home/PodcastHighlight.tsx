"use client";

import clsx from "clsx";
import Link from "next/link";
import { useState } from "react";

import { urlFor } from "@/sanity/lib/image";

export const PodcastHighlight = ({ content }: { content: any }) => {
  const [activeIndex, setActiveIndex] = useState(0);

  const renderEpisodeInfo = (item: any) => (
    <>
      <div className="absolute inset-0 flex h-96 flex-col justify-end bg-gradient-to-t from-[#000] to-black/20 p-6 lg:p-8">
        <p className="mb-2 text-sm text-gray-300">{item.businessName}</p>
        <p className="w-[90%] text-lg font-bold leading-tight lg:w-96 lg:text-xl">
          {item.title}
        </p>
      </div>
      <img
        src="/tbm_logo.png"
        alt="TBM Podcast logo"
        className="absolute right-6 top-6 flex h-12 w-12 items-center justify-center overflow-hidden rounded-full"
      />
    </>
  );

  return (
    <div className="page-section" id="amplify">
      <div className="padded">
        <div className="flex items-center justify-between gap-10">
          <div className="flex max-w-2xl flex-col items-start">
            <p className="mb-4 rounded-full border border-white/10 px-4 py-2">
              Amplify
            </p>
            <h2 className="mb-2 font-semibold lg:text-4xl xl:text-5xl">
              The Business Mindset Podcast
            </h2>
            <p className="opacity-80">
              On this podcast, we amplify the stories of Black entrepreneurs in
              Canada as we explore their journey to building a successful
              business.
            </p>
          </div>

          <Link href="/podcast" className="hidden underline lg:block">
            See all episodes
          </Link>
        </div>
      </div>

      <div className="lg:padded relative mt-10 flex snap-x snap-mandatory gap-4 overflow-auto px-4 lg:mt-10">
        {content.episodes.map((item: any, index: number) => (
          <Link
            href={`/podcast/${item.slug.current}`}
            key={item.title}
            className={clsx(
              "relative h-96 min-w-[80vw] flex-grow snap-center overflow-hidden rounded-2xl p-4 transition-all duration-500 ease-in-out lg:min-w-[250px] lg:border-[.25px]",
              {
                "border-white/50 shadow-sm lg:flex-grow-[2]":
                  index === activeIndex,
                "border-transparent lg:flex-grow-[1] lg:opacity-40":
                  index !== activeIndex,
              },
            )}
            onMouseEnter={() => setActiveIndex(index)}
          >
            <div className="absolute inset-0">
              <img
                src={urlFor(item.coverImage).url()}
                alt=""
                className="h-full w-full object-cover object-top"
              />
            </div>
            {index === activeIndex && renderEpisodeInfo(item)}

            <div className="lg:hidden">{renderEpisodeInfo(item)}</div>
          </Link>
        ))}
      </div>
    </div>
  );
};
