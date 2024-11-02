"use client";

import { useState } from "react";

export const BuyBlackSection = ({ content }: { content: any }) => {
  const [activeIndex, setActiveIndex] = useState(0);

  const { title, description, featuredCategories } = content;

  const activeCategory = featuredCategories[activeIndex];

  return (
    <div className="page-section">
      <div className="padded grid lg:grid-cols-3">
        <div>
          <h2 className="mb-4">{title}</h2>
          <p>{description}</p>

          <div className="mt-10 flex flex-wrap gap-4">
            {featuredCategories.map((category: any, index: number) => (
              <button
                key={category.category.slug.current}
                className="rounded-full border border-white/40 p-4"
                onClick={() => setActiveIndex(index)}
              >
                {category.category.name}
              </button>
            ))}
          </div>
        </div>

        <div className="lg:col-span-2">
          <div className="relative h-[400px] overflow-hidden rounded-lg">
            <img
              src={
                activeCategory.selectedBusinesses[0].sample_images[0].asset?.url
              }
              alt=""
              className="h-full w-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black to-black/20"></div>
          </div>
        </div>
      </div>
    </div>
  );
};
