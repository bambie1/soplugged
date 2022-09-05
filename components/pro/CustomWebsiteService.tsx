import Link from "next/link";

const CustomWebsiteService = () => {
  return (
    <div className="relative flex">
      <div className="my-container relative mt-10 grid lg:mt-0 lg:grid-cols-7 lg:gap-10 xl:gap-20">
        <div className="col-span-4 flex h-full w-full flex-col justify-center lg:items-start">
          <h1 className="mb-6 text-4xl font-bold lg:text-6xl">
            <span className="relative text-accent-dark lg:block">
              Custom-made
            </span>{" "}
            websites
          </h1>
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
        <aside className="relative col-span-3 row-start-1 flex flex-1 items-center justify-center lg:row-start-auto">
          <img
            src="/custom_website.svg"
            alt="2 iPhones placed side-by-side displaying instagram reels"
            className="z-[1]"
          />
        </aside>
      </div>
      {/* <div className="absolute top-5 h-[80%] w-full skew-y-3 bg-accent/30 lg:top-10"></div> */}
    </div>
  );
};

export default CustomWebsiteService;
