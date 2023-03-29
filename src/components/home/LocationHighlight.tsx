import Image from "next/image";
import Link from "next/link";

import { categories } from "@/lib/categoryList";
import { ButtonLink } from "@/styled/ButtonLink";
import { useState } from "react";
import classNames from "classnames";
import { Input } from "@/styled/Input";

const LocationHighlight = () => {
  const [hoveredIndex, setHoveredIndex] = useState(0);

  const handleMouseEnter = (index: number) => {
    setHoveredIndex(index);
  };

  return (
    <section className="relative">
      <div className="absolute left-0 top-0 bottom-0 -z-10 w-[25%] bg-new-light"></div>

      <div className="my-container grid items-center gap-4 lg:grid-cols-2 lg:gap-20">
        <div className="relative mx-auto aspect-[3/4] h-[80%] overflow-hidden rounded-lg shadow-lg xl:rounded-xl">
          <Image
            src={categories[hoveredIndex].imageSrc}
            alt=""
            layout="fill"
            objectFit="cover"
          />
        </div>{" "}
        <div className="flex flex-col items-start">
          <h2 className="text-3xl font-semibold xl:text-4xl">
            Find your city and explore
          </h2>
          <p className="mt-3 mb-6 text-gray-700 lg:text-lg">
            With our search friendly directory, you now have various Black-owned
            businesses in one place, right at your fingertips.
          </p>

          <Input label="" />

          <div className="my-10 flex flex-wrap gap-x-4 gap-y-3">
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

          <ButtonLink href="/search/all" variant="outlined" showArrow>
            Explore businesses
          </ButtonLink>
        </div>
      </div>
    </section>
  );
};

export default LocationHighlight;
