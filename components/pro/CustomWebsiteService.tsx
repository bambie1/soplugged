import Link from "next/link";

const CustomWebsiteService = () => {
  return (
    <div className="relative flex bg-gradient-to-b from-white via-accent/20 to-white">
      {/* <div className="absolute -top-5 left-0 right-0 h-full skew-y-2 bg-pro-gradient"></div> */}
      <div className="my-container relative mt-10 grid gap-5 lg:mt-0 lg:grid-cols-2 lg:gap-10 xl:gap-20">
        <aside className="relative flex flex-1 items-center justify-center">
          <img
            loading="lazy"
            src="/website_showcase_2.png"
            alt=""
            className=""
          />
        </aside>
        <div className="flex h-full w-full flex-col justify-center lg:items-start">
          <h2 className="mb-6 text-4xl font-bold lg:text-5xl">
            <span className="relative text-accent-dark lg:block">
              Custom-made
            </span>{" "}
            websites
          </h2>
          <section className="prose">
            <p className="">
              Looking to build your presence online? A website is essential!
              It's the face of your brand, and it should{" "}
              <span className="font-semibold italic text-accent-dark">
                look and feel unique to you
              </span>
              .
            </p>
            <p>
              Here's what you can expect when we build an amazing online
              experience for you:
            </p>
            <ul className="list-square">
              <li>UX-research into your business needs and niche</li>
              <li>High-fidelity mockups in Figma</li>
              <li>Fully-responsive designs</li>
              <li>SEO-friendly and accessible pages</li>
              <li>Easily-customizable content</li>
            </ul>
          </section>
          <div className="mt-10 flex flex-wrap ">
            <Link href="#book-consult">
              <a className="rounded-md bg-black px-4 py-3 text-white transition duration-200 hover:-translate-y-1 focus-visible:outline-offset-2 lg:text-lg">
                Book a FREE consultation
              </a>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CustomWebsiteService;
