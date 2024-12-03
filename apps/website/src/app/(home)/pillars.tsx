"use client";

import clsx from "clsx";
import { ArrowDown, Handshake, Megaphone, Shrub } from "lucide-react";
import Link from "next/link";
import { Fragment, useState } from "react";

const pillars = [
  {
    title: "Amplify",
    description:
      "Showcase your work, share your story, and let your business or creative vision shine across our platform. Together, we amplify the voices shaping our future.",
    href: "#amplify",
    icon: Megaphone,
  },
  {
    title: "Connect",
    description:
      "Build meaningful relationships with like-minded creators, entrepreneurs, and leaders. Find collaboration opportunities and grow your network in a thriving community.",
    href: "#connect",
    icon: Handshake,
  },
  {
    title: "Grow",
    description:
      "Promote your business on our free online directory and reach a wider audience. Discover resources and tools to help you scale your business and achieve your goals.",
    href: "#grow",
    icon: Shrub,
  },
];

export const Pillars = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <div className="mx-auto mt-10 grid w-full overflow-hidden px-4 lg:grid-cols-3 lg:gap-8 xl:max-w-screen-2xl">
      {pillars.map((pillar, index) => (
        <Fragment key={pillar.title}>
          {/* DESKTOP */}
          <Link
            href={pillar.href}
            className={clsx(
              "group hidden flex-col border-t border-white border-white/50 py-4 transition-all duration-150 hover:border-yellow-100 lg:flex",
              {
                "opacity-100": activeIndex === index,
                "opacity-50": activeIndex !== index,
              },
            )}
            onMouseOver={() => setActiveIndex(index)}
          >
            <div className="flex items-center justify-between">
              <div className="relative mb-4 flex aspect-square w-12 items-center justify-center rounded-full border bg-black">
                <div className="absolute left-1 top-0 aspect-square w-12 rounded-full bg-yellow-50/20 opacity-0 group-hover:opacity-100"></div>
                <pillar.icon className="h-6" />
              </div>

              <ArrowDown className="h-6 w-6 text-white opacity-0 group-hover:opacity-70" />
            </div>
            <p className="mb-4 text-xl font-medium">{pillar.title}</p>
            <p className="opacity-70">{pillar.description}</p>
          </Link>

          {/* MOBILE */}
          <Link
            href={pillar.href}
            className={clsx(
              "group flex items-center gap-4 border-t border-white border-white/20 py-4 transition-all duration-150 last-of-type:border-b hover:border-t-yellow-100 lg:hidden",
            )}
          >
            <div className="flex items-center justify-between">
              <div className="relative flex aspect-square w-8 items-center justify-center rounded-full border bg-black lg:mb-4 lg:w-12">
                <div className="absolute left-1 top-0 aspect-square w-8 rounded-full bg-yellow-50/20 opacity-0 group-hover:opacity-100 lg:w-12"></div>
                <pillar.icon className="h-4" />
              </div>
            </div>
            <p className="text-lg font-medium">{pillar.title}</p>
            <ArrowDown
              className="ml-auto h-6 w-6 text-white/70"
              strokeWidth={1}
            />
          </Link>
        </Fragment>
      ))}
    </div>
  );
};
