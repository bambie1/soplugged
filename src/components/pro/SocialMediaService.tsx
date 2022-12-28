import {
  ArrowRightIcon,
  AtSymbolIcon,
  ChartBarIcon,
  HashtagIcon,
} from "@heroicons/react/outline";
import Link from "next/link";
import Image from "next/image";

const ArrowTrendingUpIcon = (props: React.ComponentProps<"svg">) => (
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
      d="M2.25 18L9 11.25l4.306 4.307a11.95 11.95 0 015.814-5.519l2.74-1.22m0 0l-5.94-2.28m5.94 2.28l-2.28 5.941"
    />
  </svg>
);

const features = [
  {
    name: "Content creation and curation",
    description:
      "Designed Instagram post templates for reels, single feed posts, story, polls, and quotes.",
    icon: HashtagIcon,
  },
  {
    name: "Strategy development",
    description:
      "We develop a comprehensive social media strategy that aligns with the business's overall goals and objectives",
    icon: ArrowTrendingUpIcon,
  },
  {
    name: "Social media advertising",
    description:
      "Based on your needs, we effectively advertise on social media platforms, including targeting the right audience, setting up campaigns, and more.",
    icon: ChartBarIcon,
  },
  {
    name: "Social-media management",
    description:
      "You can opt to hand-off the day-to-day management of your business social media accounts, including responding to comments and messages, etc.",
    icon: AtSymbolIcon,
  },
];

const SocialMediaService = () => {
  return (
    <div>
      <div className="my-container mb-8 mt-10 grid gap-6 lg:mt-24 lg:mb-12 lg:grid-cols-2 lg:gap-40">
        <h2 className="text-3xl font-semibold lg:text-4xl">
          Social media marketing &{" "}
          <span className="text-gray-500">management</span>
        </h2>
        <p className="text-lg font-light lg:text-xl">
          A social media presence increases brand awareness, drives traffic to
          the business's website, and builds trust and relationships with
          customers.
        </p>
      </div>

      <div className="relative flex aspect-video w-full items-center justify-center overflow-hidden lg:aspect-[3/1]">
        <div className="absolute inset-0 -z-10 grid grid-cols-2 bg-indigo-100">
          <div className="h-full bg-indigo-400"></div>
          <div></div>
        </div>

        <div className="relative mx-auto h-full w-[60%] lg:w-[40%]">
          <div className="relative h-full w-full overflow-hidden">
            <Image
              src="/social_media_showcase.png"
              alt="2 phones placed side-by-side showing an instagram story"
              layout="fill"
              objectFit="cover"
            />
          </div>

          <div className="inset-center absolute -z-10 aspect-square h-40 rounded-full border border-black lg:h-80"></div>
          <div className="inset-center absolute -z-10 mt-2 aspect-square h-40 rounded-full border border-black lg:mt-3 lg:h-80"></div>
        </div>
      </div>

      <div className="flex flex-col items-center gap-10 bg-indigo-100/20 py-10 lg:gap-14 lg:py-16">
        <div className="my-container grid grid-cols-1 gap-y-10 md:grid-cols-2 md:gap-x-12 md:gap-y-16">
          {features.map((feature) => (
            <div
              key={feature.name}
              className="relative flex flex-col gap-3 sm:flex-row md:flex-col lg:flex-row lg:gap-6"
            >
              <div className="flex h-12 w-12 items-center justify-center rounded-xl border border-indigo-400 text-indigo-400 sm:shrink-0">
                <feature.icon
                  className="h-8 w-8"
                  aria-hidden="true"
                  strokeWidth={1}
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
          <a className="flex items-center gap-2 rounded-md border border-indigo-700 px-4 py-3 text-base text-indigo-700 transition duration-200 hover:-translate-y-1 focus-visible:outline-offset-2 lg:text-lg">
            Book a FREE consultation
            <ArrowRightIcon className="aspect-square h-6" strokeWidth={1} />
          </a>
        </Link>
      </div>
    </div>
  );
};

export default SocialMediaService;
