"use client";

import clsx from "clsx";
import Link from "next/link";
import { useState } from "react";

import { urlFor } from "@/sanity/lib/image";

import { PillarHeading } from "./pillar-heading";

export const PodcastPillar = ({ content }: { content: any }) => {
  const [activeIndex, setActiveIndex] = useState(0);

  const renderEpisodeInfo = (item: any) => (
    <>
      <div className="absolute inset-0 flex h-full flex-col justify-end bg-gradient-to-t from-[#000] to-black/20 p-6 lg:p-8">
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
      <PillarHeading
        title="Amplifying the stories of entrepreneurs"
        subTitle="The Business Mindset Podcast"
        link={{ href: "/podcast", text: "See all episodes" }}
      />

      <div className="relative">
        <div className="no-scrollbar mx-auto mt-6 flex max-w-screen-2xl snap-x snap-mandatory gap-4 overflow-auto px-4">
          {content.episodes.map((item: any, index: number) => (
            <Link
              href={`/podcast/${item.slug.current}`}
              key={item.title}
              className={clsx(
                "relative h-[30rem] min-w-[80vw] flex-grow snap-center overflow-hidden rounded-2xl p-4 transition-all duration-500 ease-in-out lg:h-[30rem] lg:min-w-[250px] lg:border-[.25px]",
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
          <div className="absolute bottom-0 left-0 top-0 w-5 bg-gradient-to-r from-black md:hidden"></div>
          <div className="absolute bottom-0 right-0 top-0 w-20 bg-gradient-to-l from-black md:hidden"></div>
        </div>
      </div>
    </div>
  );
};
