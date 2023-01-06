import {
  ArrowRightIcon,
  BookOpenIcon,
  LightningBoltIcon,
  SparklesIcon,
} from "@heroicons/react/outline";
import Link from "next/link";
import Image from "next/image";

const MagnifyingGlassIcon = (props: React.ComponentProps<"svg">) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 24 24"
    stroke="currentColor"
    {...props}
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z"
    />
  </svg>
);

const features = [
  {
    name: "High-fidelity designs",
    description:
      "A visually appealing, user-friendly and mobile-first website that aligns with your brand and goals",
    icon: SparklesIcon,
  },
  {
    name: "Search engine optimization (SEO)",
    description:
      "We perform keyword research, on-page optimization, link building and more to ensure all websites we build are SEO-friendly.",
    icon: MagnifyingGlassIcon,
  },
  {
    name: "Easily-customizable content",
    description:
      "Websites are meant to change over time. So, we make sure you have full control to update the content as you see fit.",
    icon: BookOpenIcon,
  },
  {
    name: "Maintenance and updates",
    description:
      "We handle any required website updates to ensure that it remains functional and up-to-date. This can include tasks such as security updates, bug fixes, and content updates.",
    icon: LightningBoltIcon,
  },
];

const WebsiteService = () => {
  return (
    <div>
      <div className="my-container mb-8 mt-6 grid gap-6 lg:mt-16 lg:mb-12 lg:grid-cols-2 lg:gap-40">
        <h2 className="text-3xl font-semibold lg:text-4xl">
          Website design &{" "}
          <span className="text-gray-500 xl:block">development</span>
        </h2>
        <p className="text-lg font-light lg:text-xl">
          A website is essential to your online presence. It's the face of your
          brand, and should look and feel unique to you.
        </p>
      </div>

      <div className="relative flex aspect-video w-full items-center justify-center overflow-hidden py-2 lg:aspect-[3/1]">
        <div className="absolute inset-0 -z-10 grid grid-cols-2 bg-tr-pink-100">
          <div></div>
          <div className="h-full bg-tr-pink-500"></div>
        </div>

        <div className="relative mx-auto w-[70%] rounded-xl border border-tr-pink-500 bg-white/60 lg:max-w-3xl">
          <div className="relative aspect-video w-full overflow-hidden rounded-xl">
            <Image
              src="/website_showcase.png"
              alt="Screenshot of a bakery website"
              layout="fill"
              objectFit="cover"
            />
          </div>
          <div className="absolute top-1 -left-1 -z-10 h-full w-full rounded-xl border border-black lg:top-2 lg:-left-2"></div>
          <div className="absolute top-2 -left-2 -z-10 h-full w-full rounded-xl border border-black lg:top-4 lg:-left-4"></div>
        </div>
      </div>

      <div className="flex flex-col items-center gap-16 bg-tr-pink-100/20 py-10 lg:py-16">
        <div className="my-container grid grid-cols-1 gap-y-10 md:grid-cols-2 md:gap-x-12 md:gap-y-16">
          {features.map((feature) => (
            <div
              key={feature.name}
              className="relative flex flex-col gap-3 sm:flex-row md:flex-col lg:flex-row lg:gap-6"
            >
              <div className="flex h-12 w-12 items-center justify-center rounded-xl border border-tr-pink-500 text-tr-pink-500 sm:shrink-0">
                <feature.icon
                  className="h-8 w-8"
                  aria-hidden="true"
                  strokeWidth={0.8}
                />
              </div>
              <div className="sm:min-w-0 sm:flex-1">
                <p className="text-lg font-medium leading-8 text-gray-900">
                  {feature.name}
                </p>
                <p className="mt-2 text-base leading-7 text-gray-600">
                  {feature.description}
                </p>
              </div>
            </div>
          ))}
        </div>
        <Link href="#book-consult">
          <a className="flex items-center gap-2 rounded-md border border-tr-pink-900 px-4 py-3 text-base text-tr-pink-900 transition duration-200 hover:-translate-y-1 focus-visible:outline-offset-2 lg:text-lg">
            Book a FREE consultation
            <ArrowRightIcon className="aspect-square h-6" strokeWidth={1} />
          </a>
        </Link>
      </div>
    </div>
  );
};

export default WebsiteService;
