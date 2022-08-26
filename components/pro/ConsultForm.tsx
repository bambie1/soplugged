const ConsultForm = () => {
  return (
    <div id="book-consult" className="relative flex h-screen snap-start">
      <div className="my-container flex flex-1 flex-col pt-10">
        <div className="flex min-h-0 items-center justify-center lg:hidden">
          <div className="aspect-square w-64 rounded-full border border-accent"></div>
        </div>
        <div className="flex h-full w-full flex-1 flex-col justify-center pt-16 pb-10 lg:max-w-[60%] lg:items-start">
          <div className="flex min-h-0 justify-center lg:hidden">
            <img src="/instagram_reel.png" alt="" className="object-contain" />
          </div>

          <h1 className="mb-6 text-4xl font-bold lg:text-6xl">
            Get started{" "}
            <span className="text-accent-dark lg:block">for FREE</span>
          </h1>

          <form
            action="#"
            method="POST"
            className="grid w-[80%] gap-6 lg:grid-cols-2"
          >
            <div className="">
              <label
                htmlFor="fullName"
                className="block text-sm font-medium text-gray-700"
              >
                Full name
              </label>
              <div className="mt-1">
                <input
                  id="fullName"
                  name="fullName"
                  type="text"
                  required
                  className="block w-full appearance-none rounded-md border border-gray-300 px-3 py-2 placeholder-gray-400 shadow-sm focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm"
                />
              </div>
            </div>
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
                  autoComplete="off"
                  required
                  className="block w-full appearance-none rounded-md border border-gray-300 px-3 py-2 placeholder-gray-400 shadow-sm focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm"
                />
              </div>
            </div>
            <div className="">
              <label
                htmlFor="projectType"
                className="block text-sm font-medium text-gray-700"
              >
                Type of project
              </label>
              <div className="mt-1">
                <input
                  id="projectType"
                  name="projectType"
                  type="text"
                  required
                  className="block w-full appearance-none rounded-md border border-gray-300 px-3 py-2 placeholder-gray-400 shadow-sm focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm"
                />
              </div>
            </div>

            <div className="">
              <label
                htmlFor="projectStage"
                className="block text-sm font-medium text-gray-700"
              >
                Stage of project
              </label>
              <div className="mt-1">
                <input
                  id="projectStage"
                  name="projectStage"
                  type="text"
                  required
                  className="block w-full appearance-none rounded-md border border-gray-300 px-3 py-2 placeholder-gray-400 shadow-sm focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm"
                />
              </div>
            </div>
            <div className="lg:col-span-2">
              <label
                htmlFor="projectDescription"
                className="block text-sm font-medium text-gray-700"
              >
                Project description
              </label>
              <div className="mt-1">
                <textarea
                  id="projectDescription"
                  name="projectDescription"
                  rows={7}
                  className="block w-full rounded-md border border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                  placeholder=""
                  defaultValue={""}
                />
              </div>
              <p className="mt-2 text-sm text-gray-500">
                Brief description for your profile. URLs are hyperlinked.
              </p>
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
      <aside className="absolute top-0 right-0 hidden h-full w-[40%] lg:flex">
        <div className="flex flex-1 items-center justify-center p-10">
          <div className="aspect-square w-64 rounded-full border border-black"></div>
        </div>
      </aside>
    </div>
  );
};

export default ConsultForm;
