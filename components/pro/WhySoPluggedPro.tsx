import {
  ClockIcon,
  GlobeAltIcon,
  LightBulbIcon,
  LightningBoltIcon,
} from "@heroicons/react/outline";

const features = [
  {
    name: "Improved brand image",
    description:
      "We create a cohesive and consistent look and feel for your business across all online channels.",
    icon: LightningBoltIcon,
  },
  {
    name: "Expert guidance",
    description:
      "Get access to a team of professionals with expertise in areas such as website design, SEO, social media strategy, and more.",
    icon: LightBulbIcon,
  },
  {
    name: "Free up time to serve customers",
    description:
      "Offloading other tasks to our team allows you to focus on providing quality service to your customers",
    icon: ClockIcon,
  },
  {
    name: "Increased online presence",
    description:
      "Reach a wider audience and attract more customers with scheduled, frequent and diverse posts.",
    icon: GlobeAltIcon,
  },
];

const WhySoPluggedPro = () => {
  return (
    <div id="learn-more" className="my-container scroll-mt-20">
      <div className="text-center">
        <p className="font-light tracking-widest">WHY SOPLUGGED PRO?</p>
        <div className="relative inline-flex">
          <h2 className="mx-auto mb-4 mt-3 max-w-4xl text-3xl font-medium lg:text-4xl">
            SoPlugged Pro allows me to focus on other aspects of operating a
            business
          </h2>

          <img
            src="/quotes.svg"
            alt=""
            className="absolute -top-10 -left-10 w-40"
          />
        </div>

        <div>
          <p>Owner, Stripped Bare Soap</p>
          <p>Deinye E.</p>
        </div>
      </div>

      <div className="mt-10 grid grid-cols-1 gap-y-10 md:grid-cols-2 md:gap-x-12 md:gap-y-16 lg:mt-16">
        {features.map((feature) => (
          <div
            key={feature.name}
            className="relative flex flex-col gap-3 sm:flex-row md:flex-col lg:flex-row lg:gap-6"
          >
            <div className="flex h-12 w-12 items-center justify-center rounded-xl border border-accent-dark text-accent-dark sm:shrink-0">
              <feature.icon
                className="h-8 w-8"
                aria-hidden="true"
                strokeWidth={1}
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

export default WhySoPluggedPro;
