"use client";

import { useState } from "react";
import { PillarHeading } from "./pillar-heading";

export const ConnectPillar = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  return (
    <>
      <div className="page-section" id="connect">
        <PillarHeading
          title="Connecting you with fellow creators and entrepreneurs"
          subTitle="Events & Workshops"
          link={{ href: "/events", text: "See upcoming events" }}
        />

        <div className="padded">
          <div className="relative mt-10 aspect-video overflow-hidden rounded-xl border border-white/20">
            <img
              src="/events_filler.jpeg"
              alt=""
              className="h-full w-full object-cover"
            />
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="aspect-square w-12 rounded-full bg-white opacity-75 lg:w-24"></div>
            </div>

            <div className="absolute bottom-4 right-4 flex flex-col items-end lg:bottom-10 lg:right-10">
              <p className="text-sm font-semibold lg:text-lg">
                Black Market at Stackt
              </p>
              <p className="text-xs opacity-80 lg:text-base">October 2024</p>
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
