import {
  GlobeAltIcon,
  LightningBoltIcon,
  PhoneIcon,
  ScaleIcon,
} from "@heroicons/react/outline";

const features = [
  {
    name: "Creativity and strategy",
    description:
      "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Maiores impedit perferendis suscipit eaque, iste dolor cupiditate blanditiis ratione.",
    icon: GlobeAltIcon,
  },
  {
    name: "Expertise and experience",
    description:
      "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Maiores impedit perferendis suscipit eaque, iste dolor cupiditate blanditiis ratione.",
    icon: ScaleIcon,
  },
  {
    name: "Freedom to focus on your business",
    description:
      "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Maiores impedit perferendis suscipit eaque, iste dolor cupiditate blanditiis ratione.",
    icon: LightningBoltIcon,
  },
  {
    name: "Ongoing support",
    description:
      "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Maiores impedit perferendis suscipit eaque, iste dolor cupiditate blanditiis ratione.",
    icon: PhoneIcon,
  },
];

const WebsiteService = () => {
  return (
    <div>
      <div className="my-container mb-8 mt-10 grid gap-6 lg:mt-24 lg:mb-12 lg:grid-cols-2 lg:gap-40">
        <h2 className="text-3xl font-semibold lg:text-4xl">
          Website design & development
        </h2>
        <p>
          You get access to a team of professionals with expertise in areas such
          as website design, SEO, social media strategy, and content marketing
        </p>
      </div>

      <div className="grid aspect-video w-full grid-cols-2 bg-pink-100 lg:aspect-[3/1]">
        <div></div>
        <div className="h-full bg-pink-400"></div>
      </div>

      <div className="my-container mt-10 grid grid-cols-1 gap-y-10 md:grid-cols-2 md:gap-x-12 md:gap-y-16 lg:mt-16">
        {features.map((feature) => (
          <div
            key={feature.name}
            className="relative flex flex-col gap-3 sm:flex-row md:flex-col lg:flex-row lg:gap-6"
          >
            <div className="flex h-12 w-12 items-center justify-center rounded-xl border border-pink-400 text-pink-400 sm:shrink-0">
              <feature.icon
                className="h-8 w-8"
                aria-hidden="true"
                strokeWidth={0.8}
              />
            </div>
            <div className="sm:min-w-0 sm:flex-1">
              <p className="text-lg font-semibold leading-8 text-gray-900">
                {feature.name}
              </p>
              <p className="mt-2 text-base leading-7 text-gray-600">
                {feature.description}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default WebsiteService;
