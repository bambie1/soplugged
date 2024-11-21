"use client";

import Link from "next/link";
import { useState } from "react";

export const ConnectPillar = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  return (
    <>
      <div className="page-section" id="connect">
        <div className="padded">
          <div className="flex items-center justify-between gap-10">
            <div className="flex max-w-2xl flex-col items-start">
              <p className="mb-2 font-medium text-yellow-50 opacity-70">
                Events & Workshops
              </p>
              <p className="mb-8 max-w-2xl text-2xl tracking-tight lg:text-4xl xl:text-5xl">
                Connecting you with fellow creators and entrepreneurs
              </p>
            </div>

            <Link
              href="/events"
              className="py-8 underline decoration-yellow-100 underline-offset-8 transition-all duration-150 hover:underline-offset-4"
            >
              See upcoming events
            </Link>
          </div>

          <div className="relative mt-10 aspect-video overflow-hidden rounded-xl border border-white/20">
            <img
              src="/events_filler.jpeg"
              alt=""
              className="h-full w-full object-cover"
            />
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="aspect-square h-24 w-24 rounded-full bg-white opacity-75"></div>
            </div>

            <div className="absolute bottom-10 right-10 flex flex-col items-end">
              <p className="font-semibold lg:text-lg">Black Market at Stackt</p>
              <p className="text-sm opacity-80 lg:text-base">October 2024</p>
            </div>
          </div>
        </div>
      </div>

      {/* <iframe
          src="https://drive.google.com/file/d/1OhEe1hCfdfgV_TY8w5lipOmlnLN1964N/preview"
          width="640"
          height="480"
          allow="autoplay"
        ></iframe> */}
    </>
  );
};
