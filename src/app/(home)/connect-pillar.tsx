"use client";

import { useState } from "react";
import ReactPlayer from "react-player";

import { PillarHeading } from "./pillar-heading";

export const ConnectPillar = () => {
  return (
    <>
      <div className="page-section" id="connect">
        <PillarHeading
          title="Connecting you with fellow creators and entrepreneurs"
          subTitle="Events & Workshops"
          link={{ href: "/events", text: "See upcoming events" }}
        />

        <div className="lg:padded relative">
          <div className="relative mt-10 aspect-video w-full overflow-hidden border-white/20 lg:rounded-2xl lg:border">
            <ReactPlayer
              url="https://stream.mux.com/e7a4SX301G4CLNgh71V47gY8ewUULZucTZsQpsIUpOHQ.m3u8"
              width="100%"
              height="100%"
              muted
              loop
              playing
            />
          </div>

          <div className="absolute bottom-4 right-4 flex flex-col items-end lg:bottom-10 lg:right-10">
            <p className="text-sm font-semibold lg:text-lg">
              Black Market at Stackt
            </p>
            <p className="text-xs opacity-80 lg:text-base">October 2024</p>
          </div>
        </div>
      </div>
    </>
  );
};
