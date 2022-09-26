import { ChangeEvent, useState } from "react";

const packages = {
  customWebsite: {
    name: "customWebsite",
    title: "Custom website",
    description: "Fully-customized website created for you",
    fixedPrice: 750,
    monthlyPrice: 0,
    defaultValue: true,
  },
  socialMedia: {
    name: "socialMedia",
    title: "Social media management",
    description: "IG content carefully curated for you",
    fixedPrice: 450,
    monthlyPrice: 400,
    defaultValue: true,
  },
  photography: {
    name: "photography",
    title: "Product photography",
    description: "Professionally-taken pictures to improve your page look",
    fixedPrice: 250,
    monthlyPrice: 0,
    defaultValue: false,
  },
};

const defaultFixedPrice =
  packages.customWebsite.fixedPrice + packages.socialMedia.fixedPrice;

const Pricing = () => {
  const [fixedCost, setFixedCost] = useState(defaultFixedPrice);
  const [monthlyCost, setMonthlyCost] = useState(0);

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { value, checked } = e.target;
    const selectedPackage = packages[value as keyof typeof packages];

    if (checked) {
      setFixedCost(fixedCost + selectedPackage.fixedPrice);
      setMonthlyCost(monthlyCost + selectedPackage.fixedPrice);
    } else {
      setFixedCost(fixedCost - selectedPackage.fixedPrice);
      setMonthlyCost(monthlyCost - selectedPackage.fixedPrice);
    }
  };

  const renderCheckbox = (option: any) => {
    const { name, title, description, defaultValue } = option;
    return (
      <div className="relative flex items-start">
        <div className="flex h-5 items-center">
          <input
            id={name}
            aria-describedby={name}
            name={name}
            type="checkbox"
            value={name}
            defaultChecked={defaultValue}
            className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-500"
            onChange={handleChange}
          />
        </div>
        <div className="ml-3 text-sm">
          <label
            htmlFor={name}
            className="text-base font-medium text-gray-700 lg:text-lg"
          >
            {title}
          </label>
          <p id={name} className="text-sm text-gray-500 lg:text-base">
            {description}
          </p>
        </div>
      </div>
    );
  };

  return (
    <div className="bg-accent/10">
      <div className="pt-12 sm:pt-16 lg:pt-20">
        <div className="my-container">
          <div className="text-center">
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl lg:text-5xl">
              Flexible pricing
            </h2>
            <p className="mt-4 text-xl text-gray-600">
              Payment is made installmentally over the course of the project
            </p>
          </div>
        </div>
      </div>
      <div className="mt-8 bg-white pb-16 sm:mt-12 sm:pb-20 lg:pb-28">
        <div className="relative">
          <div className="absolute inset-0 h-1/2 bg-gray-100" />
          <div className="my-container relative">
            <div className="mx-auto max-w-lg overflow-hidden rounded-lg shadow-lg lg:flex lg:max-w-none">
              <div className="flex-1 bg-white px-6 py-8 lg:p-12">
                <h3 className="text-2xl font-bold text-gray-900 sm:text-3xl sm:tracking-tight">
                  The <i className="border-b-[.5px] border-black">all-in-one</i>{" "}
                  package
                </h3>
                <p className="mt-6 text-base text-gray-500">
                  Lorem ipsum dolor sit amet consect etur adipisicing elit.
                  Itaque amet indis perferendis blanditiis repellendus etur
                  quidem assumenda.
                </p>
                <div className="mt-8">
                  <div className="flex items-center">
                    <h4 className="flex-shrink-0 bg-white pr-4 text-base font-semibold text-indigo-600">
                      What's included
                    </h4>
                    <div className="flex-1 border-t-2 border-gray-200" />
                  </div>
                  <ul
                    role="list"
                    className="mt-8 space-y-5 lg:grid lg:grid-cols-2 lg:gap-x-8 lg:gap-y-5 lg:space-y-0"
                  >
                    {Object.keys(packages).map((key) => {
                      const option = packages[key as keyof typeof packages];
                      return (
                        <li
                          key={key}
                          className="flex items-start lg:col-span-1"
                        >
                          {renderCheckbox(option)}
                        </li>
                      );
                    })}
                  </ul>
                </div>
              </div>
              <div className="bg-gray-50 py-8 px-6 text-center lg:flex lg:flex-shrink-0 lg:flex-col lg:justify-center lg:p-12">
                <p className="text-lg font-medium leading-6 text-gray-900">
                  Starting at
                </p>
                <div className="mt-4 flex items-center justify-center text-5xl font-bold tracking-tight text-gray-900">
                  <span>${fixedCost}</span>
                  <span className="ml-3 text-xl font-medium tracking-normal text-gray-500">
                    CAD
                  </span>
                </div>
                <p className="mt-4 text-sm font-medium text-gray-500">
                  *excluding external payments (e.g. domain providers)
                </p>
                <div className="mt-6">
                  <div className="rounded-md shadow">
                    <a
                      href="#"
                      className="flex items-center justify-center rounded-md border border-transparent bg-gray-800 px-5 py-3 text-base font-medium text-white hover:bg-gray-900"
                    >
                      Get Access
                    </a>
                  </div>
                </div>
                <div className="mt-4 text-sm">
                  <a href="#" className="font-medium text-gray-900">
                    Get a free sample{" "}
                    <span className="font-normal text-gray-500">(20MB)</span>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Pricing;
