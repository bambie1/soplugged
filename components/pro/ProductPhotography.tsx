import Link from "next/link";

const ProductPhotography = () => {
  return (
    <div className="my-container relative grid lg:grid-cols-2 lg:gap-10 xl:gap-20">
      <div className="flex flex-col justify-center lg:items-start">
        <h2 className="mb-6 text-4xl font-bold lg:text-5xl">
          <span className="text-accent-dark">Product</span> photography
        </h2>
        <section className="prose">
          <p className="lg:text-lg">
            High-quality, professional, engaging product photos for your
            website, social media and marketing promotions.
          </p>
        </section>

        <div className="mt-10 flex items-center">
          <Link href="#book-consult">
            <a className="rounded-md bg-black px-4 py-3 text-white transition duration-200 hover:-translate-y-1 focus-visible:outline-offset-2 lg:text-lg">
              Book a FREE consultation
            </a>
          </Link>
        </div>
      </div>
      <aside className="relative row-start-1 flex max-h-[30rem] flex-1 items-center justify-center px-10 lg:row-start-auto lg:max-h-max">
        <img
          src="/instagram_reel.svg"
          alt="2 iPhones placed side-by-side displaying instagram reels"
          className="max-h-full"
        />
      </aside>
    </div>
  );
};

export default ProductPhotography;
