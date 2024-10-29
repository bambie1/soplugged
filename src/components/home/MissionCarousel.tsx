"use client";

import { useState } from "react";

export const MissionCarousel = ({ mission }) => {
  const [currentSlide, setCurrentSlide] = useState(0);

  return (
    <div
      className="py-10 lg:py-20"
      style={{
        backgroundColor: mission.missionCarousel[currentSlide].backgroundColor,
      }}
    >
      <div className="padded">
        <span className="uppercase mb-8 block">{mission.title}</span>
        <h2 className="text-4xl mb-4 font-bold">
          {mission.missionCarousel[currentSlide].title}
        </h2>
        <p className="lg:w-1/2">
          {mission.missionCarousel[currentSlide].description}
        </p>
      </div>
    </div>
  );
};
