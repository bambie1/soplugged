import Link from "next/link";

const ProductPhotography = () => {
  return (
    <div className="my-container relative grid lg:grid-cols-2 lg:gap-10 xl:gap-20">
      <aside className="relative flex max-h-[30rem] flex-1 items-center justify-center px-10 lg:max-h-max">
        <img
          src="/instagram_reel.svg"
          alt="2 iPhones placed side-by-side displaying instagram reels"
          className="max-h-full"
        />
      </aside>
      <div className="flex flex-col justify-center lg:items-start">
        <h1 className="mb-6 text-4xl font-bold lg:text-6xl">
          <span className="text-accent-dark">Product</span> photography
        </h1>
        <section className="prose">
          <p className="lg:text-lg">
            You will receive a fully developed content strategy for your
            business or brand, as well as one month of support while you
            implement it.
          </p>
          <p className="">This service includes:</p>
          <ul>
            <li>
              A content strategy that includes your content plan (content
              pillars, content prompts, content ideas, and a content bank)
            </li>
            <li>
              Designed Instagram post templates for reels, single feed posts,
              story, polls, and quotes.
            </li>
            <li>
              Caption framework and hashtag strategy Community management and
              engagement.
            </li>
          </ul>
        </section>

        <div className="mt-10 flex items-center">
          <Link href="#book-consult">
            <a className="rounded-md bg-black px-4 py-3 text-white transition duration-200 hover:-translate-y-1 focus-visible:outline-offset-2 lg:text-lg">
              Book a FREE consultation
            </a>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ProductPhotography;
