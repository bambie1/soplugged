import { usePlausible } from "next-plausible";
import Link from "next/link";
import Image from "next/image";
import { ProCTAType } from "@/types/Plausible";

const CustomWebsiteService = () => {
  const plausible = usePlausible();

  return (
    <div className="relative flex bg-gradient-to-b from-white via-accent/20 to-white">
      <div className="my-container relative mt-10 grid max-w-xl gap-5 lg:mt-0 lg:grid-cols-2 lg:gap-10 xl:gap-20">
        <aside className="relative flex flex-1 items-center justify-center">
          <div className="relative aspect-square w-full">
            <Image
              src="/website_showcase_2.png"
              alt=""
              className=""
              layout="fill"
              objectFit="contain"
            />
          </div>
        </aside>
        <div className="flex h-full w-full flex-col justify-center lg:items-start">
          <h2 className="mb-6 text-4xl font-bold lg:text-5xl">
            <span className="relative text-accent-dark">Custom</span> websites
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
            <Link
              href="#book-consult"
              data-analytics='"Book consult CTA", {"props":{"position":"Custom website"}}'
            >
              <a
                className="rounded-md bg-black px-4 py-3 text-white transition duration-200 hover:-translate-y-1 focus-visible:outline-offset-2 lg:text-lg"
                onClick={() =>
                  plausible("Book consult CTA", {
                    props: { position: "Custom website" } as ProCTAType,
                  })
                }
              >
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
