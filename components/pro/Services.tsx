const Services = () => {
  return (
    <div className="mt-20 flex flex-col gap-20">
      <section className="bg-pro-gradient">
        <div className="my-container grid items-center gap-4 lg:grid-cols-2">
          <div className="flex flex-col items-start py-10 lg:row-start-1">
            <img
              src="/images/shopify_experts.svg"
              className="mb-5 max-h-[1.5rem] grayscale-[.6]"
              alt="Shopify experts logo"
              loading="lazy"
            />
            <h2 className="mb-4 text-3xl font-bold xl:text-4xl">
              E-commerce websites
            </h2>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Volutpat
              a pellentesque arcu, sapien. Luctus ut fermentum urna dolor.
              Fringilla sit est at amet justo nec. Quam eli.
            </p>
            <a href="#book-consult" className="mt-4 border-b border-black">
              Learn more
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
              Engaging IG content
            </h2>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Volutpat
              a pellentesque arcu, sapien. Luctus ut fermentum urna dolor.
              Fringilla sit est at amet justo nec. Quam eli.
            </p>
            <a href="#book-consult" className="mt-4 border-b border-black">
              Learn more
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Services;
