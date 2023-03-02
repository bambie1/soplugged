import Image from "next/image";

import { ButtonLink } from "@/styled/ButtonLink";
import PageWrapper from "@/src/layouts/PageWrapper";

const OurStoryPage = () => {
  return (
    <PageWrapper>
      <div className="my-8 grid items-center gap-10 lg:grid-cols-2">
        <section>
          <h1 className="mb-6 text-5xl font-semibold text-primary sm:text-6xl">
            Our story
          </h1>
          <div className="prose-lg">
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
          <div className="mt-8">
            <ButtonLink href="/search/all" variant="outlined" showArrow>
              Visit our directory
            </ButtonLink>
          </div>
        </section>

        <div className="relative aspect-square w-full justify-self-center lg:row-start-auto lg:mx-auto lg:max-w-lg">
          <Image
            src="/soplugged_team.png"
            alt="Image of the soplugged team from left-to-right: Theo, Nina, Benaiah"
            layout="fill"
            objectFit="contain"
          />
        </div>
      </div>
    </PageWrapper>
  );
};

export default OurStoryPage;
