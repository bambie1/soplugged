import { SparklesIcon } from "@heroicons/react/outline";
import Link from "next/link";

const features = [
  "Business website design",
  "Product photography session",
  "1 month's worth of social media designs",
];

const options = [
  {
    title: "Early-bird",
    price: 19,
    description:
      "Click to purchase your ticket at a discount before January 30, 2023!",
    isAvailable: true,
  },
  {
    title: "Regular",
    price: 24,
    description:
      "Looks like you're an early-bird! Click above to purchase your discounted ticket.",
    isAvailable: false,
  },
];

const Tickets = () => {
  return (
    <div id="tickets" className="my-container mt-20 scroll-mt-20">
      <h2 className="outlinedText conference text-center text-5xl font-extrabold uppercase lg:text-6xl">
        Tickets
      </h2>

      <div className="mt-10 grid items-center gap-10 lg:grid-cols-2">
        <div className="">
          <div className="relative rounded-xl bg-gradient-to-r from-secondary/20 via-white to-secondary/20 p-4">
            <SparklesIcon
              className="absolute -top-4 -left-4 h-10 w-10 text-primary"
              strokeWidth={1}
            />
            <p className="mb-2 font-bold uppercase text-primary">
              Did you know?
            </p>
            <p className="lg:text-base">
              As a registered business on{" "}
              <Link href="/">
                <a className="underline">SoPlugged</a>
              </Link>
              , you'll receive a special discount on tickets to this event.
            </p>
            <p className="mt-2 lg:text-base">Check your email for more info!</p>
          </div>
          <p className="mt-4">
            When you purchase a ticket, you're automatically entered into our{" "}
            <span className="font-bold underline">raffle draw</span> for a
            chance to win a free business makeover.{" "}
            <span className="mt-2 block">This includes:</span>
          </p>
          <ul role="list" className="mt-3 space-y-3 divide-y divide-gray-100">
            {features.map((feature) => (
              <li key={feature} className="flex pt-3">
                <span className="listItem aspect-square h-3 rounded-sm border border-primary bg-white"></span>
                <span className="ml-3 text-gray-800">{feature}</span>
              </li>
            ))}
          </ul>
        </div>
        <ul className="grid gap-4">
          {options.map((option) => (
            <li key={option.title}>
              <form action="/api/stripe/checkout_sessions" method="POST">
                <button
                  disabled={!option.isAvailable}
                  className={`flex w-full flex-col gap-4 rounded-3xl p-6 text-left sm:p-10 ${
                    option.isAvailable
                      ? "priceButton border border-primary bg-white"
                      : "bg-gray-50"
                  }`}
                >
                  <div className="flex w-full items-center justify-between gap-2 lg:flex-1">
                    <div>
                      {!option.isAvailable && (
                        <span className="text-sm text-gray-400">
                          Not available for purchase
                        </span>
                      )}
                      <h3
                        className={`text-lg font-bold leading-8 tracking-tight lg:text-xl ${
                          option.isAvailable ? "text-primary" : "text-gray-400"
                        }`}
                      >
                        {option.title} ticket
                      </h3>
                      <p
                        className={`mt-3 w-[80%] lg:text-base ${
                          option.isAvailable ? "text-gray-600" : "text-gray-400"
                        }`}
                      >
                        {option.description}
                      </p>
                    </div>

                    <div
                      className={`inline-flex items-center ${
                        option.isAvailable ? "text-primary" : "text-gray-400"
                      }`}
                    >
                      <span>$</span>
                      <p className="text-3xl font-medium lg:text-4xl">
                        {option.price}
                      </p>
                      <span className="mb-6 text-sm">99</span>
                    </div>
                  </div>
                </button>
              </form>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Tickets;
