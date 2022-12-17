const OurReviews = () => {
  return (
    <div className="my-container text-center">
      <p className="font-light tracking-widest">RECENT CLIENTS</p>

      <h2 className="text-3xl font-semibold lg:text-4xl">
        Don't take our word for it.{" "}
        <span className="block">Trust our clients</span>
      </h2>

      <div className="mt-10 lg:mt-16">
        <div className="lg:hidden">
          <blockquote className="mt-10">
            <div className="mx-auto max-w-3xl leading-9 text-gray-900">
              <p className="text-lg font-light">
                The time, detail, and care put into this project is greatly
                appreciated. Every step of the way, the team provided
                exceptional services with their great expertise and
                professionalism.
              </p>
            </div>
            <footer className="mt-8">
              <div className="">
                <img
                  className="mx-auto h-8"
                  src="/tr_pink_logo.webp"
                  alt="Treats Royale logo"
                />
                <div className="mt-3">
                  <div className="text-base font-medium text-gray-900">
                    Princess A.
                  </div>

                  <div className="text-base font-medium text-gray-500">
                    Owner
                  </div>
                </div>
              </div>
            </footer>
          </blockquote>
        </div>

        <div className="hidden grid-cols-2 gap-4 text-left lg:grid">
          <div className="flex aspect-square items-center rounded-lg border border-pink-400 py-10 pr-20 pl-8">
            <div>
              <p>Kudos to the team for a job well done.</p>
              <p className="mt-4 font-light lg:text-3xl lg:leading-snug">
                The time, detail, and care put into this project is greatly
                appreciated. Every step of the way, the team provided
                exceptional services with their great expertise and
                professionalism.
              </p>

              <img
                className="mt-10 h-8"
                src="/tr_pink_logo.webp"
                alt="Treats Royale logo"
              />
              <p>Princess A., Owner</p>
            </div>
          </div>

          <div className="grid gap-4">
            <div className="flex items-center rounded-lg border border-indigo-400 px-4 py-10">
              <div>
                <p>Working with the team was easy!</p>
                <p className="mt-4 font-light lg:text-2xl lg:leading-snug">
                  They allow me to focus on other aspects of operating a
                  business.
                </p>

                <img
                  className="mt-10 h-5"
                  src="/bare_logo.png"
                  alt="Stripped Bare Soap logo"
                />
                <p>Deinye E., Owner</p>
              </div>
            </div>
            <div className="rounded-lg border border-yellow-400 px-4 py-20"></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OurReviews;
