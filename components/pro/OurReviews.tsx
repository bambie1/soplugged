import { useState } from "react";
import {
  ArrowCircleLeftIcon,
  ArrowCircleRightIcon,
} from "@heroicons/react/outline";

const reviews = [
  {
    logo: "/tr_pink_logo.webp",
    logoAlt: "Logo for Treats Royale",
    summary: "Kudos to the team for a job well done!",
    content: `The time, detail, and care put into this project is greatly appreciated. Every step of the way, the team provided exceptional services with their great expertise and professionalism.`,
    clientName: "Princess A.",
    clientPosition: "Owner, Treats Royale",
  },
  {
    logo: "/bare_logo.png",
    logoAlt: "Logo for Stripped Bare",
    summary: "Working with the team was easy!",
    content: `SoPlugged Pro allows me to focus on other aspects of operating a business.`,
    clientName: "Deinye E.",
    clientPosition: "Owner, Stripped Bare",
  },
];

const OurReviews = () => {
  const [index, setIndex] = useState(0);

  const { logo, logoAlt, summary, content, clientName, clientPosition } =
    reviews[index];

  return (
    <div className="my-container">
      <div className="text-center">
        <p className="font-light tracking-widest text-gray-500">REVIEWS</p>
        <h2 className="text-3xl font-semibold lg:text-4xl">
          What our clients say
        </h2>
      </div>

      <div className="mt-10 text-center lg:mt-16">
        <section className="relative">
          <button
            onClick={() => setIndex(1 - index)}
            className="absolute right-0 top-1/2 hidden -translate-y-1/2 transform text-gray-600 md:block"
          >
            <ArrowCircleRightIcon
              className="aspect-square h-10"
              strokeWidth={1}
            />
          </button>
          <button
            onClick={() => setIndex(1 - index)}
            className="absolute left-0 top-1/2 hidden -translate-y-1/2 transform text-gray-600 md:block"
          >
            <ArrowCircleLeftIcon
              className="aspect-square h-10"
              strokeWidth={1}
            />
          </button>

          <div className="relative inline-block">
            <svg
              className="absolute top-0 left-0 aspect-square h-8 -translate-x-3 -translate-y-2 transform text-gray-200 lg:h-14"
              fill="currentColor"
              viewBox="0 0 32 32"
              aria-hidden="true"
            >
              <path d="M9.352 4C4.456 7.456 1 13.12 1 19.36c0 5.088 3.072 8.064 6.624 8.064 3.36 0 5.856-2.688 5.856-5.856 0-3.168-2.208-5.472-5.088-5.472-.576 0-1.344.096-1.536.192.48-3.264 3.552-7.104 6.624-9.024L9.352 4zm16.512 0c-4.8 3.456-8.256 9.12-8.256 15.36 0 5.088 3.072 8.064 6.624 8.064 3.264 0 5.856-2.688 5.856-5.856 0-3.168-2.304-5.472-5.184-5.472-.576 0-1.248.096-1.44.192.48-3.264 3.456-7.104 6.528-9.024L25.864 4z" />
            </svg>
            <blockquote className="flex min-h-[200px] flex-col">
              <div className="mx-auto flex max-w-3xl flex-1 flex-col justify-center leading-9">
                <p className="mb-2 uppercase text-gray-500">{summary}</p>
                <p className="text-lg font-light text-gray-900 lg:text-2xl lg:leading-normal">
                  {content}
                </p>
              </div>
              <footer className="mt-8">
                <div className="grid items-center justify-center gap-2 md:flex md:gap-4">
                  <img
                    className={`${index == 0 ? "h-8" : "h-5"} mx-auto md:mx-0`}
                    src={logo}
                    alt={logoAlt}
                  />
                  <div className="md:text-left">
                    <p className="mb-1 text-base font-medium leading-none text-gray-900">
                      {clientName}
                    </p>

                    <p className="text-base font-medium leading-none text-gray-500">
                      {clientPosition}
                    </p>
                  </div>
                </div>
              </footer>
            </blockquote>
          </div>

          <div className="mt-7 flex items-center justify-center gap-7 md:hidden">
            <button onClick={() => setIndex(1 - index)} className="">
              <ArrowCircleLeftIcon
                className="aspect-square h-10"
                strokeWidth={0.8}
              />
            </button>
            <button onClick={() => setIndex(1 - index)} className="">
              <ArrowCircleRightIcon
                className="aspect-square h-10"
                strokeWidth={0.8}
              />
            </button>
          </div>
        </section>
      </div>
    </div>
  );
};

export default OurReviews;
