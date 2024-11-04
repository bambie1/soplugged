"use client";

import clsx from "clsx";
import { useEffect, useRef, useState } from "react";

import { urlFor } from "@/sanity/lib/image";
export const MissionCarousel = ({ mission }: { mission: any }) => {
  const [activeIndex, setActiveIndex] = useState(0);
  const scrollRef = useRef<HTMLDivElement>(null);

  const items = mission.missionCarousel;

  useEffect(() => {
    const handleScroll = () => {
      if (scrollRef.current) {
        const scrollPosition = scrollRef.current.scrollLeft;
        const itemWidth = scrollRef.current.offsetWidth;
        const newIndex = Math.round(scrollPosition / itemWidth);
        setActiveIndex(newIndex);
      }
    };

    const scrollContainer = scrollRef.current;
    if (scrollContainer) {
      scrollContainer.addEventListener("scroll", handleScroll);
    }

    return () => {
      if (scrollContainer) {
        scrollContainer.removeEventListener("scroll", handleScroll);
      }
    };
  }, []);

  const activeItem = items[activeIndex];

  return (
    <>
      <div
        className="page-section hidden text-black transition-colors duration-500 ease-in-out md:block"
        style={{
          backgroundColor: items[activeIndex].backgroundColor,
        }}
      >
        <div className="padded">
          <span className="mb-4 block uppercase">{mission.title}</span>
          <h2 className="mb-2">{items[activeIndex].title}</h2>
          <p className="lg:w-1/2">{items[activeIndex].description}</p>

          <div className="relative mt-16 flex gap-4 overflow-hidden">
            {items.map((item: any, index: number) => (
              <div
                key={item.title}
                className={clsx(
                  "relative h-96 flex-grow cursor-pointer overflow-hidden rounded-lg border p-4 transition-all duration-500 ease-in-out",
                  {
                    "flex-grow-[2] border-black shadow-sm":
                      index === activeIndex,
                    "flex-grow-[1] border-transparent opacity-85":
                      index !== activeIndex,
                  },
                )}
                style={{ minWidth: "250px" }}
                onClick={() => setActiveIndex(index)}
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

      {/* mobile */}
      <div
        className="pt-10 text-black md:hidden"
        style={{
          backgroundColor: activeItem.backgroundColor,
        }}
      >
        <div className="padded mb-12 min-h-[200px]">
          <span className="mb-4 block uppercase">{mission.title}</span>
          <h2 className="mb-2">{activeItem.title}</h2>
          <p>{activeItem.description}</p>
        </div>
        <div
          ref={scrollRef}
          className="flex snap-x snap-mandatory snap-start gap-4 overflow-x-auto px-4 pb-6"
          style={{ scrollBehavior: "smooth" }}
        >
          {items.map((item: any, index: number) => (
            <div
              key={index}
              className={clsx(
                "relative aspect-video w-[90%] flex-shrink-0 snap-center overflow-hidden rounded-lg border",
                {
                  "border-black shadow-sm": index === activeIndex,
                  "border-transparent opacity-85": index !== activeIndex,
                },
              )}
            >
              <img
                src={urlFor(item.image).url()}
                className="absolute inset-0 w-full object-cover"
              />
            </div>
          ))}
        </div>
      </div>
    </>
  );
};
