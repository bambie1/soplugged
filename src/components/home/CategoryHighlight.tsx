import Image from "next/image";
import Link from "next/link";

import { categories } from "@/lib/categoryList";
import { ButtonLink } from "@/styled/ButtonLink";
import { useState } from "react";
import classNames from "classnames";

const CategoryHighlight = () => {
  const [hoveredIndex, setHoveredIndex] = useState(0);

  const handleMouseEnter = (index: number) => {
    setHoveredIndex(index);
  };

  return (
    <section className="relative">
      <span className="absolute -left-24 bottom-20 -z-[1] -rotate-90 whitespace-nowrap font-extrabold text-primary/[.025] lg:text-[10rem] lg:leading-[.7]">
        black-<span className="block">owned</span>
      </span>
      <div className="my-container grid items-center gap-4 lg:grid-cols-2 lg:gap-20 xl:gap-36">
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
          <p className="mt-3 mb-6 text-gray-700 lg:text-lg">
            With our search friendly directory, you now have various Black-owned
            businesses in one place, right at your fingertips.
          </p>

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
        <div className="relative mx-auto aspect-[3/4] h-full overflow-hidden rounded-lg shadow-lg xl:rounded-xl">
          <Image
            src={categories[hoveredIndex].imageSrc}
            alt=""
            layout="fill"
            objectFit="cover"
          />
        </div>
      </div>
    </section>
  );
};

export default CategoryHighlight;
