const toolkit = [
  { title: "Shopify", image: "/images/shopify_logo.svg" },
  { title: "Figma", image: "/images/figma_logo.svg" },
  { title: "Contentful", image: "/images/contentful_logo.png" },
  { title: "Next.js", image: "/images/nextjs_logo.svg" },
  { title: "Vercel", image: "/images/vercel_logo.svg" },
];

const OurToolkit = () => {
  return (
    <section className="mt-20 flex min-h-[25rem] bg-accent/10">
      <div className="my-container flex flex-col justify-center px-10 py-20">
        <h2 className="mb-4 text-center text-3xl font-bold xl:text-4xl">
          Equipped for success
        </h2>
        <p className="mx-auto max-w-2xl text-center">
          We NEVER want to compromise on quality. So, we use the
          best-of-the-best tools to provide you with a top-notch website or
          social-media content.
        </p>

        <ul className="mx-auto mt-8 flex max-w-4xl flex-wrap justify-center gap-4 lg:mt-14 lg:gap-10">
          {toolkit.map((tool) => (
            <img
              className="max-h-[2rem] grayscale-[.95] transition duration-200 hover:grayscale-0 lg:max-h-[3rem]"
              src={tool.image}
              key={tool.image}
              alt={`Logo for ${tool.title}`}
              title={tool.title}
              loading="lazy"
            />
          ))}
        </ul>
      </div>
    </section>
  );
};

export default OurToolkit;
