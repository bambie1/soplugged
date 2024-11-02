"use client";

import "swiper/css";
import "swiper/css/pagination";

import clsx from "clsx";
import { useState } from "react";
import { EffectFade, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

import { urlFor } from "@/sanity/lib/image";
export const MissionCarousel = ({ mission }: { mission: any }) => {
  const [activeItem, setActiveItem] = useState(0);

  const items = mission.missionCarousel;

  return (
    <>
      <div
        className="page-section hidden text-black transition-colors duration-500 ease-in-out md:block"
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
                    "flex-grow-[2] border-black shadow-sm":
                      index === activeItem,
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

      <div className="md:hidden">
        <Swiper
          spaceBetween={30}
          effect={"fade"}
          loop={true}
          pagination={{
            clickable: true,
            renderBullet: function (index, className) {
              return '<span class="bullet ' + className + '">' + "</span>";
            },
          }}
          modules={[EffectFade, Pagination]}
          className="mySwiper"
        >
          {items.map((item: any) => (
            <SwiperSlide
              key={item.title}
              className="pt-10 text-black"
              style={{
                backgroundColor: item.backgroundColor,
              }}
            >
              <div className="padded mb-12 min-h-[200px]">
                <span className="mb-4 block uppercase">{mission.title}</span>
                <h2 className="mb-2">{item.title}</h2>
                <p>{item.description}</p>
              </div>

              <div className="relative mt-auto aspect-square flex-1 overflow-hidden">
                <img
                  src={urlFor(item.image).url()}
                  alt=""
                  className="absolute inset-0 h-full w-full object-cover"
                />
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </>
  );
};
