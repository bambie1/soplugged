"use client";

import clsx from "clsx";
import { useState } from "react";

import { urlFor } from "@/sanity/lib/image";

export const MissionCarousel = ({ mission }: { mission: any }) => {
  const [activeItem, setActiveItem] = useState(0);

  const items = mission.missionCarousel;

  return (
    <div
      className="page-section text-black transition-colors duration-500 ease-in-out"
      style={{
        backgroundColor: items[activeItem].backgroundColor,
      }}
    >
      <div className="padded">
        <span className="mb-4 block uppercase">{mission.title}</span>
        <h2 className="mb-2">{items[activeItem].title}</h2>
        <p className="lg:w-1/2">{items[activeItem].description}</p>

        <div className="relative mt-16 flex gap-4 overflow-hidden">
          {items.map((item: any, index: number) => (
            <div
              key={item.title}
              className={clsx(
                "relative h-96 flex-grow cursor-pointer overflow-hidden rounded-lg border p-4 transition-all duration-500 ease-in-out",
                {
                  "flex-grow-[2] border-black shadow-sm": index === activeItem,
                  "flex-grow-[1] border-transparent opacity-85":
                    index !== activeItem,
                },
              )}
              style={{ minWidth: "250px" }}
              onClick={() => setActiveItem(index)}
            >
              <div className="absolute inset-0">
                <img
                  src={urlFor(item.image).url()}
                  alt=""
                  className="h-full w-full object-cover object-top"
                />
              </div>
              <div className="absolute inset-0 bg-gradient-to-t from-black to-black/20"></div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
