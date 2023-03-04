const features = [
  {
    title: "Business talk with Reni",
    category: {
      name: "Workshops",
      color: "bg-purple-100 text-purple-800",
    },
    description:
      "A 45 minute keynote speech from Reni the Resource on how to manage your finances as a small business owner with an interactive Q&A session",
    footer: {
      href: "https://renitheresource.com/",
      title: "Learn more about Reni",
    },
  },
  {
    title: "SoPlugged Pro Raffle draw",
    category: { name: "Activities", color: "bg-pink-100 text-pink-800" },
    description:
      "You're automatically entered into our raffle draw for a chance to win a *FREE* business makeover from our Pro team (valued at over $1,000), including a business logo, website design and product images",
    footer: { href: "/pluggedin/raffle-terms", title: "Terms and Conditions" },
  },
  {
    title: "Personalized Self-care box",
    category: {
      name: "Gift bags",
      color: "bg-secondary/40 text-primary",
    },
    description:
      "As a little thank-you for celebrating with us, we've curated a personalized gift box filled with luxury skin care products from StrippedBare Soap, a local Black-owned business",

    footer: {
      href: "https://www.strippedbaresoap.com/",
      title: "Shop StrippedBare",
    },
  },
];

function classNames(...classes: any) {
  return classes.filter(Boolean).join(" ");
}

const Tickets = () => {
  return (
    <>
      <div className="my-container overflow-hidden">
        <div>
          <p className="font-semibold underline">
            All tickets grant access to the following:
          </p>
          <div className="mt-5 grid gap-16 lg:grid-cols-3 lg:gap-x-10 lg:gap-y-12">
            {features.map((feature, index) => (
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
                  <p className="text-lg font-semibold text-gray-900 lg:text-xl">
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
    </>
  );
};

export default Tickets;
