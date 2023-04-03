import Image from "next/image";
import Link from "next/link";

import { useState } from "react";
import classNames from "classnames";
import { categories } from "@/lib/categoryList";

const BuyBlackHighlight = () => {
  const [hoveredIndex, setHoveredIndex] = useState(0);

  const handleMouseEnter = (index: number) => {
    setHoveredIndex(index);
  };

  return (
    <div className="bg-new-light py-6 lg:py-10">
      <div className="my-container grid items-center gap-10 lg:grid-cols-2 lg:gap-20">
        <div className="flex flex-col items-start">
          <h2 className="text-3xl font-semibold xl:text-4xl">
            <span className="relative text-primary">
              #Buyingblack
              <span className="absolute left-0 -bottom-1 h-3 w-full -rotate-2 bg-secondary/40" />
            </span>{" "}
            just got easier
          </h2>
          <p className="mt-3 text-gray-700 lg:text-lg">
            Find a local Black-owned business near you. From restaurants,
            hairstylists and salons to tutoring, tech and healthcare services.
          </p>
          <p className="mt-3 mb-6 text-gray-700">
            With our search friendly directory, you now have various Black-owned
            businesses in one place, right at your fingertips.
          </p>

          <div className="my-10 hidden flex-wrap gap-x-4 gap-y-3 lg:flex">
            {categories.slice(6).map((category, index) => (
              <Link href={`/search`} key={category.value}>
                <a
                  className={classNames("text-lg font-bold", {
                    "text-primary": index === hoveredIndex,
                    "text-primary/30": index !== hoveredIndex,
                  })}
                  onMouseEnter={() => handleMouseEnter(index)}
                >
                  {category.label}
                </a>
              </Link>
            ))}
          </div>
        </div>
        <div className="flex flex-col items-end">
          <div className="relative mb-4 aspect-video w-full max-w-lg overflow-hidden rounded-lg shadow-lg lg:ml-auto lg:aspect-square">
            <Image
              src="/unsplash/media.jpg"
              alt=""
              layout="fill"
              objectFit="cover"
            />
          </div>

          <p>Tianah Beaute</p>
          <p>Ottawa, ON</p>
        </div>
      </div>
    </div>
  );
};

export default BuyBlackHighlight;
