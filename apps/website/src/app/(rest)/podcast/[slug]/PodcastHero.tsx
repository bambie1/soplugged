"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import Link from "next/link";

import { urlFor } from "@/sanity/lib/image";

export const PodcastHero = ({ content }: { content: any }) => {
  // Track the scroll position
  const { scrollY } = useScroll();

  // Create a parallax effect for the background
  const backgroundY = useTransform(scrollY, [0, 500], [0, 200]);

  return (
    <div className="relative h-[50vh] max-h-[600px] w-full overflow-hidden lg:h-[80vh]">
      {/* Background Image with Parallax */}
      <motion.img
        src={urlFor(content.coverImage).url()}
        alt=""
        className="absolute inset-0 h-full w-full object-cover object-top"
        style={{ y: backgroundY }}
      />

      {/* Overlays */}
      <div className="absolute inset-0 z-10">
        <div className="absolute left-0 right-0 top-0 h-40 bg-gradient-to-b from-black to-transparent"></div>
        <div className="absolute inset-0 bg-black/50"></div>
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[#5D1344]/20 to-[#141414]" />
      </div>

      {/* Content */}
      <div className="relative z-20 flex h-full flex-col justify-end text-white">
        <div className="padded pt-10">
          <div className="mb-10 flex items-center gap-4">
            <Link href="/podcast" className="underline opacity-70">
              TBM Podcast
            </Link>
            <p>{content.businessName}</p>
          </div>
          <h1 className="large mb-10 max-w-3xl lg:mb-16">{content.title}</h1>
        </div>
      </div>
    </div>
  );
};
