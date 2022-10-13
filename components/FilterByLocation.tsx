import Image from "next/image";

import useAlgolia from "@/hooks/useAlgolia";
import { locationsWithCategories } from "@/lib/locationsWithCategories";
import { ButtonLink } from "@/styled/ButtonLink";

const FilterByLocation = () => {
  const { handleCategoryAndLocation } = useAlgolia();

  const renderHeading = () => {
    return (
      <>
        <h2 className="mb-1 text-3xl font-bold xl:text-4xl">
          <span className="relative text-primary">
            Filter by location
            <span className="absolute left-0 -bottom-1 h-3 w-full -rotate-2 bg-secondary/40" />
          </span>
        </h2>
        <p className="font-medium lg:mb-4 lg:text-lg">
          There is a black-owned business near you
        </p>
      </>
    );
  };

  return (
    <section className="light-gradient relative mt-20 mb-20 pt-5 pb-12 lg:pt-10">
      <div className="my-container grid items-center gap-12 lg:grid-cols-2 lg:gap-10">
        <div className="text-center lg:hidden">{renderHeading()}</div>
        <div className="mt-10">
          <ul className="flex flex-col flex-wrap gap-8 md:flex-row md:justify-center lg:gap-12">
            {locationsWithCategories.map(
              ({ city, cityFull, category, url, categoryFull }) => (
                <li
                  key={city}
                  className="group relative odd:ml-4 odd:self-start even:self-end md:odd:ml-0 md:odd:self-auto md:even:self-auto"
                >
                  <div className="absolute -top-5 -left-5 z-[1] aspect-square w-14 overflow-hidden rounded-full border-2 border-transparent shadow-lg transition duration-200 group-hover:border-primary group-hover:shadow-none">
                    <Image src={url} alt="" layout="fill" objectFit="cover" />
                  </div>
                  <button
                    className="relative flex flex-1 flex-col items-center justify-center overflow-hidden rounded-lg border border-transparent bg-white px-6 py-3 drop-shadow transition duration-200 hover:border-primary hover:shadow-none"
                    onClick={() =>
                      handleCategoryAndLocation(categoryFull, cityFull)
                    }
                  >
                    <p className="mx-5 mb-2 font-semibold">{category}</p>
                    <p className="text-lg uppercase">{city}</p>
                  </button>
                </li>
              )
            )}
          </ul>
        </div>
        <div>
          <div className="hidden lg:block">{renderHeading()}</div>

          <p className="mb-6">
            Our mission is to connect you with the best black-owned businesses
            in your city and around Canada.
          </p>
          <ButtonLink href="/search" showArrow variant="outlined">
            Explore businesses
          </ButtonLink>
        </div>
      </div>
    </section>
  );
};

export default FilterByLocation;
