import {
  GlobeAltIcon,
  LightningBoltIcon,
  PhoneIcon,
  ScaleIcon,
} from "@heroicons/react/outline";

const features = [
  {
    name: "Stylized photoshoots",
    description:
      "High-quality photographs of a business's products to be used for social-media content and website imagery.",
    icon: GlobeAltIcon,
  },
  {
    name: "Product styling",
    description:
      "We create an attractive and appealing presentation of the product by arranging it in a visually appealing way.",
    icon: ScaleIcon,
  },
  {
    name: "Retouching and editing",
    description:
      "As needed, final photographs can be enhanced with color correction, background removal, and other adjustments.",
    icon: LightningBoltIcon,
  },
  {
    name: "E-commerce and web optimization",
    description:
      "Images can be resized and cropped to fit specific dimensions, and optimized for fast loading times on the web.",
    icon: PhoneIcon,
  },
];

const PhotographyService = () => {
  return (
    <div>
      <div className="my-container mb-8 mt-10 grid gap-6 lg:mt-24 lg:mb-12 lg:grid-cols-2 lg:gap-40">
        <h2 className="text-3xl font-semibold lg:text-4xl">
          Product photography &{" "}
          <span className="block text-gray-500">Self-portraits</span>
        </h2>
        <p className="text-lg font-light lg:text-xl">
          Create visually-appealing images that showcase the products in the
          best possible light, highlighting their features and benefits to
          potential customers.
        </p>
      </div>

      <div className="relative flex aspect-video w-full items-center justify-center overflow-hidden py-2 lg:aspect-[3/1]">
        <div className="absolute inset-0 -z-10 grid grid-cols-2 bg-yellow-100">
          <div></div>
          <div className="h-full bg-yellow-400"></div>
        </div>

        <div className="relative mx-auto w-[70%] rounded-xl bg-white/60 opacity-90 lg:max-w-3xl">
          <img
            src="/photography_showcase.png"
            alt="Screenshot of a modelling website"
            className="rounded-xl border border-yellow-900"
          />
          <div className="absolute top-1 -left-1 -z-10 h-full w-full rounded-xl border border-black lg:top-2 lg:-left-2"></div>
          <div className="absolute top-2 -left-2 -z-10 h-full w-full rounded-xl border border-black lg:top-4 lg:-left-4"></div>
        </div>
      </div>

      <div className="flex bg-yellow-100/20 py-10 lg:py-16">
        <div className="my-container grid grid-cols-1 gap-y-10 md:grid-cols-2 md:gap-x-12 md:gap-y-16">
          {features.map((feature) => (
            <div
              key={feature.name}
              className="relative flex flex-col gap-3 sm:flex-row md:flex-col lg:flex-row lg:gap-6"
            >
              <div className="flex h-12 w-12 items-center justify-center rounded-xl border border-yellow-400 text-yellow-400 sm:shrink-0">
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
      </div>
    </div>
  );
};

export default PhotographyService;
