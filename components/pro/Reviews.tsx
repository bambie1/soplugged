const Reviews = () => {
  return (
    <section className="mt-20 flex bg-pro-gradient">
      <div className="my-container flex flex-1 flex-col pt-12">
        <h2 className="text-center text-3xl font-bold xl:text-4xl">
          What our clients have to say
        </h2>
        <div className="flex w-full flex-1 gap-2 pb-8">
          <div className="flex items-center">
            <button>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6 lg:h-10 lg:w-10"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={1}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M11 15l-3-3m0 0l3-3m-3 3h8M3 12a9 9 0 1118 0 9 9 0 01-18 0z"
                />
              </svg>
            </button>
          </div>
          <div className="flex flex-1 items-center text-center">
            <section className="mx-auto max-w-xl">
              <p className="py-14 lg:text-lg">
                The SoPlugged team has completely transformed how we interact
                with customers. We've seen record bookings, higher customer
                satisfaction, and reduced churn.
              </p>
              <div className="text-gray-600">
                <p className="font-bold uppercase">Princess Akindele</p>
                <p>Owner, Treats Royale</p>
              </div>
            </section>
          </div>
          <div className="flex items-center">
            <button>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6 lg:h-10 lg:w-10"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={1}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M13 9l3 3m0 0l-3 3m3-3H8m13 0a9 9 0 11-18 0 9 9 0 0118 0z"
                />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Reviews;
