import Link from "next/link";

const CustomWebsiteService = () => {
  return (
    <div className="relative flex">
      <div className="my-container relative mt-10 grid lg:mt-0 lg:grid-cols-2 lg:gap-10 xl:gap-20">
        <div className="flex h-full w-full flex-col justify-center lg:items-start">
          <h1 className="mb-6 text-4xl font-bold lg:text-6xl">
            <span className="text-accent-dark lg:block">Custom-made</span>{" "}
            websites
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
          <div className="mt-10 flex flex-wrap ">
            <Link href="#book-consult">
              <a className="rounded-md bg-black px-4 py-3 text-white">
                Book a FREE consultation
              </a>
            </Link>
          </div>
        </div>
        <aside className="relative row-start-1 flex flex-1 items-center justify-center lg:row-start-auto">
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
