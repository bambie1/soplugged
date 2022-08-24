const ConsultForm = () => {
  return (
    <div className="relative flex h-screen snap-start">
      <div className="my-container flex flex-1">
        <div className="flex h-full w-full flex-1 flex-col justify-center pt-16 pb-10 lg:max-w-[60%] lg:items-start">
          <div className="flex min-h-0 justify-center lg:hidden">
            <img src="/instagram_reel.png" alt="" className="object-contain" />
          </div>

          <h1 className="mb-6 text-4xl font-bold lg:text-6xl">
            Get started{" "}
            <span className="text-accent-dark lg:block">for FREE</span>
          </h1>

          <form action="#" method="POST" className="w-[80%] space-y-6">
            <div className="">
              <label
                htmlFor="email"
                className="block text-sm font-medium text-gray-700"
              >
                Email address
              </label>
              <div className="mt-1">
                <input
                  id="email"
                  name="email"
                  type="email"
                  autoComplete="email"
                  required
                  className="block w-full appearance-none rounded-md border border-gray-300 px-3 py-2 placeholder-gray-400 shadow-sm focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm"
                />
              </div>
            </div>

            <div className="space-y-1">
              <label
                htmlFor="password"
                className="block text-sm font-medium text-gray-700"
              >
                Password
              </label>
              <div className="mt-1">
                <input
                  id="password"
                  name="password"
                  type="password"
                  autoComplete="current-password"
                  required
                  className="block w-full appearance-none rounded-md border border-gray-300 px-3 py-2 placeholder-gray-400 shadow-sm focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm"
                />
              </div>
            </div>

            <a
              href="#book-consult"
              className="mt-10 inline-flex rounded-md bg-black px-4 py-3 text-white"
            >
              Book a FREE consultation
            </a>
          </form>
        </div>
      </div>
      <aside className="absolute top-0 right-0 hidden h-full w-[40%] bg-gradient-to-b from-accent/5 to-accent lg:flex">
        <div className="flex flex-1 items-center justify-center p-10">
          <div className="aspect-square w-64 rounded-full border border-white"></div>
        </div>
      </aside>
    </div>
  );
};

export default ConsultForm;
