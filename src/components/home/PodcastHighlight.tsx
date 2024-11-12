"use client";

import clsx from "clsx";
import Link from "next/link";
import { useState } from "react";

import { urlFor } from "@/sanity/lib/image";

export const PodcastHighlight = ({ content }: { content: any }) => {
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <div className="page-section">
      <div className="padded">
        <p className="mb-6 uppercase tracking-wide">
          The Business Mindset Podcast
        </p>
        <div className="flex justify-between gap-10">
          <div>
            <h2 className="mb-4">{content.title}</h2>
            <p className="max-w-2xl">{content.description}</p>
          </div>

          <Link href="/podcast" className="underline">
            See all episodes
          </Link>
        </div>

        <div className="relative mt-16 flex gap-4 overflow-hidden">
          {content.episodes.map((item: any, index: number) => (
            <Link
              href={`/podcast/${item.slug.current}`}
              key={item.title}
              className={clsx(
                "relative h-96 flex-grow overflow-hidden rounded-2xl border-[.25px] p-4 transition-all duration-500 ease-in-out",
                {
                  "flex-grow-[2] border-white shadow-sm": index === activeIndex,
                  "flex-grow-[1] border-transparent opacity-40":
                    index !== activeIndex,
                },
              )}
              style={{ minWidth: "250px" }}
              onMouseEnter={() => setActiveIndex(index)}
            >
              <div className="absolute inset-0">
                <img
                  src={urlFor(item.coverImage).url()}
                  alt=""
                  className="h-full w-full object-cover object-top"
                />
              </div>
              {index === activeIndex && (
                <>
                  <div className="absolute inset-0 flex h-96 flex-col justify-end bg-gradient-to-t from-black to-black/20 p-4 lg:p-8">
                    <p className="mb-2 text-gray-300">{item.businessName}</p>
                    <p className="w-96 text-xl font-bold">{item.title}</p>
                  </div>
                  <div className="absolute right-6 top-6 flex h-16 w-16 items-center justify-center rounded-full bg-black">
                    TBM
                  </div>
                </>
              )}
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};
