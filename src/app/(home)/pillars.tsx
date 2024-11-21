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
      "Access valuable resources, attend workshops, and gain the knowledge you need to take your business or creative pursuits to the next level.",
    href: "#grow",
  },
];

export const Pillars = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <div className="mx-auto mt-10 grid max-w-screen-2xl gap-8 px-4 lg:grid-cols-3">
      {pillars.map((pillar, index) => (
        <Link
          href={pillar.href}
          key={pillar.title}
          className={clsx(
            "group flex aspect-[3/1] flex-col border-t border-white py-4 transition-all duration-150 hover:border-yellow-100",
            {
              "opacity-100": activeIndex === index,
              "opacity-50": activeIndex !== index,
            },
          )}
          onMouseOver={() => setActiveIndex(index)}
        >
          <div className="mb-4 h-12 w-12 rounded-full border"></div>
          <p className="mb-4 text-xl font-medium">{pillar.title}</p>
          <p className="opacity-70">{pillar.description}</p>
        </Link>
      ))}
    </div>
  );
};
