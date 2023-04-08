import Image from "next/image";
import classNames from "classnames";

import { popularCategories } from "@/lib/popularCategories";
import { ButtonLink } from "@/styled/ButtonLink";

const AddYourBusiness = () => {
  return (
    <div className="my-container">
      <div
        className={`relative w-full gap-10 overflow-hidden rounded-lg bg-gradient-to-tr from-accent/50 to-secondary/50 py-8 px-4 text-center shadow backdrop-blur-[1px] md:p-10 lg:grid-cols-5 xl:py-32 xl:px-16`}
      >
        <div className="absolute inset-0 -bottom-5 -left-10 -right-10 -z-10 hidden grid-cols-6 gap-6 xl:grid">
          {popularCategories.slice(0, 6).map((category, index) => (
            <div
              key={category.title}
              className={classNames(
                "relative mt-auto w-full overflow-hidden rounded-lg opacity-60 shadow",
                {
                  "h-1/2": index === 0 || index === 5,
                  "h-1/4": index === 1 || index === 4,
                  "h-[10%]": index === 2 || index === 3,
                }
              )}
            >
              <Image
                src={category.url}
                layout="fill"
                objectFit="cover"
                objectPosition="top"
                alt=""
              />
            </div>
          ))}
        </div>

        <div className="absolute inset-0 -bottom-5 -left-10 -right-10 -z-10 grid grid-cols-3 gap-6 xl:hidden">
          {popularCategories.slice(0, 3).map((category, index) => (
            <div
              key={category.title}
              className={classNames(
                "relative mt-auto w-full overflow-hidden rounded-lg opacity-10",
                {
                  "h-1/2": index === 0 || index === 5,
                  "h-1/4": index === 1 || index === 4,
                  "h-[10%]": index === 2 || index === 3,
                }
              )}
            >
              <Image
                src={category.url}
                layout="fill"
                objectFit="cover"
                objectPosition="top"
                alt=""
              />
            </div>
          ))}
        </div>
        <div className="mx-auto xl:w-1/2">
          <h2 className="mb-4 text-3xl font-semibold md:text-4xl xl:text-5xl">
            Add your business to our directory{" "}
            <span className="font-bold text-primary/80 underline">
              for FREE
            </span>
          </h2>
          <p className="opacity-90 lg:text-lg">
            Are you a Black-owned business owner in Canada looking to expand
            your reach and connect with new customers? Look no further than
            SoPlugged!
          </p>

          <div className="mt-8 flex flex-col items-center justify-center lg:mt-12">
            <ButtonLink href="/search/all" variant="filled" showArrow>
              Add your business
            </ButtonLink>
            <p className="mt-2 text-sm italic text-gray-600 lg:text-base">
              It takes less than 5 minutes
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AddYourBusiness;
