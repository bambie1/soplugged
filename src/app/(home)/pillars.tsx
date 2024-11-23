"use client";

import clsx from "clsx";
import Link from "next/link";
import { useState } from "react";

const pillars = [
  {
    title: "Amplify",
    description:
      "Showcase your work, share your story, and let your business or creative vision shine across our platform. Together, we amplify the voices shaping our future.",
    href: "#amplify",
  },
  {
    title: "Connect",
    description:
      "Build meaningful relationships with like-minded creators, entrepreneurs, and leaders. Find collaboration opportunities and grow your network in a thriving community.",
    href: "#connect",
  },
  {
    title: "Grow",
    description:
      "Promote your business on our free online directory and reach a wider audience. Discover resources and tools to help you scale your business and achieve your goals.",
    href: "#grow",
  },
];

export const Pillars = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <div className="mx-auto mt-10 grid w-full overflow-hidden px-4 lg:grid-cols-3 lg:gap-8 xl:max-w-screen-2xl">
      {pillars.map((pillar, index) => (
        <Link
          href={pillar.href}
          key={pillar.title}
          className={clsx(
            "group flex gap-4 border-t border-white/50 py-4 transition-all duration-150 hover:border-yellow-100 lg:flex-col lg:gap-0 lg:border-white",
            {
              "lg:opacity-100": activeIndex === index,
              "lg:opacity-50": activeIndex !== index,
            },
          )}
          onMouseOver={() => setActiveIndex(index)}
        >
          <div className="aspect-square w-8 rounded-full border lg:mb-4 lg:w-12"></div>
          <p className="text-lg font-medium lg:mb-4 lg:text-xl">
            {pillar.title}
          </p>
          <p className="hidden text-sm opacity-70 lg:block lg:text-base">
            {pillar.description}
          </p>
        </Link>
      ))}
    </div>
  );
};
