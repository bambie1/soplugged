import { usePlausible } from "next-plausible";
import Link from "next/link";
import { ChangeEvent, useState } from "react";

import { ProCTAType } from "@/types/Plausible";

const packages = {
  customWebsite: {
    name: "customWebsite",
    title: "Custom website",
    description: "Fully-customized website created for you",
    fixedPrice: 750,
    monthlyPrice: 150,
    defaultValue: true,
  },
  socialMedia: {
    name: "socialMedia",
    title: "Social media management",
    description: "IG content carefully curated for you",
    fixedPrice: 450,
    monthlyPrice: 350,
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
const defaultMonthlyPrice =
  packages.customWebsite.monthlyPrice + packages.socialMedia.monthlyPrice;

const Pricing = () => {
  const plausible = usePlausible();
  const [fixedCost, setFixedCost] = useState(defaultFixedPrice);
  const [monthlyCost, setMonthlyCost] = useState(defaultMonthlyPrice);

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { value, checked } = e.target;
    const selectedPackage = packages[value as keyof typeof packages];

    if (checked) {
      setFixedCost(fixedCost + selectedPackage.fixedPrice);
      setMonthlyCost(monthlyCost + selectedPackage.monthlyPrice);
    } else {
      setFixedCost(fixedCost - selectedPackage.fixedPrice);
      setMonthlyCost(monthlyCost - selectedPackage.monthlyPrice);
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
            className="h-4 w-4 rounded border-gray-300 text-accent-dark focus:ring-accent"
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
    <div className="">
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
      <div className="mt-8 bg-white pb-16 sm:mt-12 sm:pb-20 lg:pb-28">
        <div className="relative">
          <div className="absolute inset-0 h-1/2" />
          <div className="my-container relative">
            <div className="mx-auto max-w-lg overflow-hidden rounded-lg shadow-lg lg:flex lg:max-w-none">
              <div className="flex-1 bg-accent/5 px-6 py-8 lg:p-12">
                <h3 className="text-2xl font-bold text-gray-900 sm:text-3xl sm:tracking-tight">
                  The full-brand package
                </h3>
                <p className="mt-6 text-base text-gray-500">
                  You get to{" "}
                  <span className="font-semibold italic">pick-and-choose</span>{" "}
                  which service(s) you need to improve your online presence.
                </p>
                <div className="mt-8">
                  <div className="flex items-center">
                    <h4 className="flex-shrink-0 bg-white pr-4 text-base font-semibold uppercase text-accent-dark">
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
              <div className="bg-accent-dark py-8 px-6 text-center lg:flex lg:flex-shrink-0 lg:flex-col lg:justify-center lg:p-12">
                <p className="text-lg leading-6 text-white">Starting at</p>
                <div className="mt-4 flex items-center justify-center text-5xl font-bold tracking-tight text-white">
                  <span>${fixedCost}</span>
                  <span className="ml-3 text-xl tracking-normal text-white">
                    CAD
                  </span>
                </div>
                <p className="mt-4 text-sm text-white">
                  *excluding external payments (e.g. domain providers)
                </p>
                <div className="mt-6">
                  <div className="rounded-md shadow">
                    <Link href="#book-consult">
                      <a
                        className="flex items-center justify-center rounded-md border border-transparent bg-white px-5 py-3 text-base font-medium"
                        onClick={() =>
                          plausible("Book consult CTA", {
                            props: { position: "Pricing" } as ProCTAType,
                          })
                        }
                      >
                        Book a consult
                      </a>
                    </Link>
                  </div>
                </div>

                {monthlyCost > 0 && (
                  <div className="mt-4 text-sm text-white">
                    + Plus an <span className="underline">optional</span> $
                    {monthlyCost} monthly retainer
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Pricing;
