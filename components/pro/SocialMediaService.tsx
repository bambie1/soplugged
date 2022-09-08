import Link from "next/link";

const SocialMediaService = () => {
  return (
    <div className="my-container relative grid lg:grid-cols-2 lg:gap-10 xl:gap-20">
      <div className="flex flex-col justify-center lg:items-start lg:py-10">
        <h2 className="mb-6 text-4xl font-bold lg:text-5xl">
          <span className="text-accent-dark">Full-scope</span> social media
          management
        </h2>
        <section className="prose">
          <p className="lg:text-lg">
            You will receive a fully developed content strategy for your
            business or brand, as well as one month of support while you
            implement it.
          </p>
          <p className="">This service includes:</p>
          <ul className="list-square">
            <li>
              A content strategy that includes your content plan (content
              pillars, content prompts, content ideas, and a content bank)
            </li>
            <li>
              Designed Instagram post templates for reels, single feed posts,
              story, polls, and quotes.
            </li>
            <li>Caption framework and hashtag strategy.</li>
            <li>Community management and engagement.</li>
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
      <aside className="relative row-start-1 flex max-h-[30rem] flex-1 items-center justify-center px-10 py-10 lg:row-start-auto lg:max-h-max">
        <img
          loading="lazy"
          src="/instagram_reel.svg"
          alt="2 iPhones placed side-by-side displaying instagram reels"
          className="max-h-full"
        />
      </aside>
    </div>
  );
};

export default SocialMediaService;
