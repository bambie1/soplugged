const features = [
  "Business website design",
  "Product photography session",
  "1 month's worth of social media designs",
];

const options = [
  {
    title: "Business special",
    price: 19,
    description:
      "Reserved for businesses registered on SoPlugged. Check your e-mail for your discount code",
    isDiscount: true,
  },
  {
    title: "Regular seat",
    price: 24,
    description:
      "Looks like you're an early-bird! Click above to purchase your discounted ticket.",
    isDiscount: false,
  },
];

const Tickets = () => {
  return (
    <div
      id="tickets"
      className="my-container mt-20 scroll-mt-20 overflow-hidden"
    >
      <h2 className="outlinedText conference text-center text-5xl font-extrabold uppercase lg:text-6xl">
        Tickets
      </h2>

      <ul className="mt-10 grid gap-6 lg:grid-cols-2 lg:gap-10">
        {options.map((option) => (
          <li key={option.title}>
            <form action="/api/stripe/checkout_sessions" method="POST">
              <button
                className={`${
                  option.isDiscount ? "border-2" : "border"
                } relative flex w-full flex-col gap-4 rounded-3xl border-primary bg-white p-6 text-left transition duration-150 hover:scale-[.98] sm:p-10`}
              >
                {option.isDiscount && (
                  <img
                    src="/exclusive_sticker.png"
                    className="absolute -top-10 -right-6 h-20 lg:-top-10 lg:-right-10 lg:h-24"
                    alt=""
                  />
                )}
                <div className="flex w-full items-center justify-between gap-2 lg:flex-1">
                  <div>
                    <h3
                      className={`text-xl font-bold leading-8 tracking-tight text-primary`}
                    >
                      {option.title}
                    </h3>
                    <p
                      className={`mt-2 w-[80%] text-sm text-gray-600 lg:text-base`}
                    >
                      {option.description}
                    </p>
                  </div>

                  <div
                    className={`absolute right-0 mr-6 inline-flex items-center text-primary sm:mr-10`}
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

      <div className="mx-auto mt-10 max-w-3xl rounded-lg bg-secondary/20 p-4">
        <h3 className="text-center">Raffle draw</h3>
        <p className="mt-6">
          When you purchase a ticket, you're automatically entered into our{" "}
          <span className="font-bold underline">raffle draw</span> for a chance
          to win a free business makeover.{" "}
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
    </div>
  );
};

export default Tickets;
