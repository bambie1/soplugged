const Services = () => {
  return (
    <div className="mt-20 flex flex-col gap-20">
      <section className="">
        <div className="my-container grid items-center gap-4 lg:grid-cols-2">
          <div className="flex flex-col items-start py-10 lg:row-start-1 lg:py-20">
            <img
              src="/images/shopify_experts.svg"
              className="mb-6 max-h-[1.5rem] grayscale-[.6]"
              alt="Shopify experts logo"
              loading="lazy"
            />
            <h2 className="mb-4 text-3xl font-bold xl:text-4xl">
              Custom website design and development
            </h2>
            <p className="">
              Having worked with some of the best agencies in the world we can
              help you achieve a great user experience, so that your users keep
              coming back to visit your website and make purchases from it.
            </p>
            <p className="mt-2 border-l-2 border-black/40 font-medium lg:mt-6 lg:pl-2">
              A reliable option for small and large businesses looking for a
              strong and successful online presence.
            </p>

            <a
              href="#book-consult"
              className="mt-10 -mb-6 border-b border-black"
            >
              Get started
            </a>
          </div>
          <div className="relative row-start-1 flex justify-center lg:min-h-[25rem]">
            <img
              src="/images/e_commerce_showcase.png"
              className="-mt-10 max-h-[25rem] lg:absolute lg:-top-10 lg:right-0 lg:mt-0"
              alt="2 iPhones placed beside each other showing an e-commerce website"
              loading="lazy"
            />
          </div>
        </div>
      </section>
      <section className="">
        <div className="my-container grid items-center gap-4 lg:grid-cols-2">
          <div className="relative flex min-h-[25rem] items-center justify-center">
            <img
              src="/images/instagram_showcase.png"
              className="max-h-[25rem]"
              alt="2 iPhones placed beside each other showing an instagram page"
              loading="lazy"
            />
          </div>
          <div className="flex flex-col items-start">
            <h2 className="mb-4 text-3xl font-bold xl:text-4xl">
              Full-scope social media management
            </h2>
            <p>
              We help businesses to post engaging content and stay up to date
              with social media trends with custom designs, social media
              calendars and as little work as possible on their end!
            </p>
            <p className="mt-2 border-l-2 border-black/40 font-medium lg:mt-6 lg:pl-2">
              A reliable option for small and large businesses looking for a
              strong and successful online presence.
            </p>
            <a href="#book-consult" className="mt-10 border-b border-black">
              Get started
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Services;
