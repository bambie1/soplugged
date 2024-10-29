"use client";

import { AnimatePresence, motion } from "framer-motion";
import { useState } from "react";

export const MissionCarousel = ({ mission }) => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const items = mission.missionCarousel;

  return (
    <div
      className="py-10 transition-colors duration-500 ease-in-out lg:py-20"
      style={{
        backgroundColor: items[currentSlide].backgroundColor,
      }}
    >
      <div className="padded">
        <span className="uppercase mb-8 block">{mission.title}</span>
        <h2 className="text-4xl mb-4 font-bold">{items[currentSlide].title}</h2>
        <p className="lg:w-1/2">{items[currentSlide].description}</p>

        <div className="relative mt-16 flex gap-4">
          <AnimatePresence initial={false}>
            {items.map((item, index) => (
              <motion.div
                key={item.title}
                className={`flex-grow
                  ${index === currentSlide ? "flex-grow-[2]" : "flex-grow-[1]"}
                  bg-white rounded-lg overflow-hidden cursor-pointer transition-all duration-500 ease-in-out
                `}
                style={{ minWidth: "250px" }}
                onClick={() => setCurrentSlide(index)}
                initial={{ opacity: 1 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 1 }}
                transition={{ duration: 0.3 }}
              >
                <div className="p-6 h-full flex items-center justify-center">
                  <h3 className="text-2xl font-semibold text-gray-800">
                    {item.content}
                  </h3>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>
      </div>
    </div>
  );
};
