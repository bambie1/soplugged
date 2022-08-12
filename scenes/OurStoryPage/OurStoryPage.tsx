import dynamic from "next/dynamic";

import { ButtonLink } from "@/styled/ButtonLink";
import { PageWrapper } from "@/components/PageWrapper";

const OurStoryPage = () => {
  return (
    <PageWrapper>
      <div className="my-8 grid items-center gap-10 lg:grid-cols-2">
        <section>
          <h1 className="relative mb-4 block text-5xl font-bold">Our story</h1>
          <div className="flex flex-col gap-2">
            <p>
              Hi, I'm Nina, creator, and founder of SoPlugged - an online
              platform that makes <b>#buyingblack</b> easy! Our biggest
              inspiration at SoPlugged is supporting Black entrepreneurs and
              growing our community together.
            </p>
            <p>
              Our search-friendly platform makes it easy to find and connect
              with Black-owned businesses across Canada. It also gives Black
              entrepreneurs the opportunity to increase brand visibility and
              reach a thriving community of people looking to buy black.
            </p>
            <p>
              It's always a beautiful thing to see people join the movement to
              support Black-owned businesses. That's our story and we hope you
              become a part of it!
            </p>
          </div>
          <div className="mt-4 flex gap-4">
            <ButtonLink href="/search" variant="filled">
              Find a business
            </ButtonLink>
            <ButtonLink href="/my-business" variant="outlined">
              Add your business
            </ButtonLink>
          </div>
        </section>
        <section className="ml-auto aspect-square w-full max-w-sm rounded-full border border-black"></section>
      </div>
    </PageWrapper>
  );
};

export default OurStoryPage;
