import { CheckCircleIcon } from "@heroicons/react/solid";
import { ChangeEvent, useState } from "react";

const packages = {
  website: {
    title: "Custom website",
    fixedPrice: 750,
    monthlyPrice: 0,
  },
  socialMedia: {
    title: "Social media management",
    fixedPrice: 450,
    monthlyPrice: 400,
  },
  photography: {
    title: "Product photography",
    fixedPrice: 250,
    monthlyPrice: 0,
  },
};

const Pricing = () => {
  const [fixedCost, setFixedCost] = useState(750);
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
                    {Object.keys(packages).map((key) => (
                      <li key={key} className="flex items-start lg:col-span-1">
                        <div className="flex-shrink-0">
                          <CheckCircleIcon
                            className="h-5 w-5 text-green-400"
                            aria-hidden="true"
                          />
                        </div>
                        <p className="ml-3 text-sm text-gray-700">
                          {packages[key as keyof typeof packages].title}
                        </p>
                      </li>
                    ))}
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
