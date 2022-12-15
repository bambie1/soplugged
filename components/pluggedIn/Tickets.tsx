const options = [
  {
    title: "Early bird",
    price: "$19.99",
    description:
      "Get full access to all of standard license features for solo projects that make less than $20k gross revenue for $29.",
    isAvailable: true,
  },
  {
    title: "Regular",
    price: "$24.99",
    description:
      "Get full access to all of standard license features for solo projects that make less than $20k gross revenue for $29.",
    isAvailable: false,
  },
];

const Tickets = () => {
  return (
    <div id="tickets" className="my-container mt-10 lg:mt-20">
      <h2 className="outlinedText conference text-center text-4xl font-extrabold uppercase sm:text-5xl lg:text-6xl">
        Tickets
      </h2>

      <div className="mt-6 grid lg:grid-cols-2">
        <div>
          <p>With a ticket purchase, you get access to:</p>
          <ul>
            <li>Raffle draw entry (Only early-birds)</li>
            <li>All events scheduled for the evening</li>
            <li>Drinks and snacks</li>
            <li>Keynote speech</li>
          </ul>
        </div>
        <ul className="grid gap-4">
          {options.map((option) => (
            <li key={option.title}>
              <button
                className={`flex flex-col gap-4 rounded-3xl p-6 text-left sm:p-10 lg:flex-row lg:items-center ${
                  option.isAvailable
                    ? "light-gradient priceButton border border-primary"
                    : "bg-gray-50"
                }`}
              >
                <div className="lg:min-w-0 lg:flex-1">
                  <h3 className="text-lg font-bold leading-8 tracking-tight text-primary">
                    {option.title} ticket
                  </h3>
                  <div className="mt-2 text-base leading-7 text-gray-600">
                    {option.description}
                  </div>
                </div>
                <div>
                  <a
                    href="#"
                    className="inline-block rounded-lg bg-primary/5 px-4 py-2.5 text-center text-sm font-bold leading-5 text-primary hover:bg-primary/10"
                  >
                    Buy {option.title} ticket{" "}
                    <span aria-hidden="true">&rarr;</span>
                  </a>
                </div>
              </button>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Tickets;
