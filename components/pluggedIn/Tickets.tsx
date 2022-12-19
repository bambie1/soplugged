import { SparklesIcon } from "@heroicons/react/outline";

const features = [
  "Business website design",
  "Product photography session",
  "1 month's worth of social media designs",
];

const options = [
  {
    title: "Early bird",
    price: 19,
    description: "Available to businesses registered on SoPlugged",
    isAvailable: true,
  },
  {
    title: "Regular",
    price: 24,
    description: "",
    isAvailable: false,
  },
];

const Tickets = () => {
  return (
    <div id="tickets" className="my-container mt-10 lg:mt-20">
      <h2 className="outlinedText conference text-center text-4xl font-extrabold uppercase sm:text-5xl lg:text-6xl">
        Tickets
      </h2>

      <div className="mt-10 grid items-center gap-10 lg:grid-cols-2">
        <div className="">
          <SparklesIcon className="h-10 w-10" strokeWidth={1} />
          <p>
            As a registered business on SoPlugged, you'll receive a special
            discount on tickets to this event. Simply use the promo code
            provided in the email from our team to take advantage of this
            exclusive offer.
          </p>
          <p className="mt-4">
            When you purchase a ticket, you're automatically entered into our
            raffle draw for a chance to win a free business makeover. This
            includes:
          </p>
          <ul role="list" className="mt-6 space-y-6 divide-y divide-gray-100">
            {features.map((feature) => (
              <li key={feature} className="flex pt-6">
                <span className="listItem aspect-square h-4 rounded-sm border border-primary bg-white"></span>
                <span className="ml-3 text-gray-800 lg:text-lg">{feature}</span>
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
                        <span className="text-gray-600">Not available</span>
                      )}
                      <h3 className="text-lg font-bold leading-8 tracking-tight text-primary lg:text-xl">
                        {option.title} ticket
                      </h3>
                      <p className="w-[80%] text-gray-600 lg:text-base">
                        {option.description}
                      </p>
                    </div>

                    <div className="inline-flex items-center">
                      <span>$</span>
                      <p className="text-3xl font-medium">{option.price}</p>
                      <span className="mb-6 text-sm text-gray-600">99</span>
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
