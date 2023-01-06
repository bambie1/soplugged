const options = [
  {
    title: "Business special",
    price: 19,
    description:
      "Reserved for businesses registered on SoPlugged. Check your e-mail for your discount code",
    subText: "Offer ends January 31st, 2023",
    isDiscount: true,
  },
  {
    title: "Regular seat",
    price: 24,
    description:
      "Not on our directory, but still want to attend? We'd be thrilled to have you!",
    subText: "Tickets available till February 16th, 2023",
    isDiscount: false,
  },
];

const features = [
  {
    title: "Business talk with Reni",
    category: {
      name: "Workshops",
      color: "bg-purple-100 text-purple-800",
    },
    description:
      "Our keynote speaker will be speaking on how to manage your finances as a small business owner and answering any questions you might have",
    footer: {
      href: "https://renitheresource.com/",
      title: "Learn more about Reni",
    },
  },
  {
    title: "SoPlugged Pro Raffle draw",
    category: { name: "Fun activities", color: "bg-pink-100 text-pink-800" },
    description:
      "You're automatically entered into our raffle draw for a chance to win a *FREE* business makeover from our Pro team, including website design.",
    footer: { href: "/pro", title: "Discover SoPlugged Pro" },
  },
  {
    title: "Goodie-filled gift bag",
    category: {
      name: "Gift bags",
      color: "bg-secondary/40 text-primary",
    },
    description:
      "As a little thank-you for celebrating with us, we've curated an amazing gift box with some of our favorite black-owned products!",
  },
];

function classNames(...classes: any) {
  return classes.filter(Boolean).join(" ");
}

const Tickets = () => {
  return (
    <div className="my-container overflow-hidden">
      <h2 className="outlinedText conference text-center text-5xl font-extrabold uppercase lg:text-6xl">
        Tickets
      </h2>

      <ul className="my-10 grid gap-6 lg:grid-cols-2 lg:gap-10">
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
                      className={`text-xl font-bold leading-8 tracking-tight text-primary lg:text-2xl`}
                    >
                      {option.title}
                    </h3>
                    <p
                      className={`mt-2 w-[80%] text-sm text-gray-600 lg:text-lg`}
                    >
                      {option.description}
                    </p>
                    <p className="mt-2 w-[80%] text-xs text-gray-600 lg:text-sm">
                      *{option.subText}
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

      <div>
        <p className="font-semibold underline">
          All tickets grant access to the following:
        </p>
        <div className="mt-5 grid gap-16 lg:grid-cols-3 lg:gap-x-10 lg:gap-y-12">
          {features.map((feature) => (
            <div className="relative" key={feature.title}>
              <div>
                <span
                  className={classNames(
                    feature.category.color,
                    "inline-flex items-center rounded-full px-3 py-0.5 text-sm font-medium"
                  )}
                >
                  {feature.category.name}
                </span>
              </div>
              <div className="mt-2 block lg:mt-4">
                <p className="text-lg font-bold text-gray-900 lg:text-xl">
                  {feature.title}
                </p>
                <p className="mt-3 text-base text-gray-500">
                  {feature.description}
                </p>
              </div>
              <div className="mt-3 items-center">
                <a
                  href={feature.footer?.href}
                  target="_blank"
                  rel="noreferrer"
                  className="text-sm font-medium text-gray-900 underline"
                >
                  {feature.footer?.title}
                </a>
              </div>
              <hr className="absolute -bottom-6 left-0 w-full lg:hidden" />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Tickets;
