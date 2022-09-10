const ConsultForm = () => {
  return (
    <div id="book-consult" className="relative flex snap-start">
      <div className="my-container flex w-full flex-col justify-center">
        <h2 className="mb-6 text-center text-4xl font-bold lg:text-5xl">
          Get started <span className="text-accent-dark">for FREE</span>
        </h2>

        <form
          action="#"
          method="POST"
          className="mx-auto grid w-full max-w-3xl gap-6 lg:grid-cols-2"
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
  );
};

export default ConsultForm;
