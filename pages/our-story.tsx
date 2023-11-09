import Image from "next/image";

import { ButtonLink } from "@/styled/ButtonLink";
import PageWrapper from "@/src/layouts/PageWrapper";
import SEO from "@/src/components/SEO";

const OurStory = () => {
  return (
    <>
      <SEO
        title="Our Story | SoPlugged"
        description="Learn about SoPlugged and our mission to support and empower Black-owned businesses across Canada. Our free online directory connects communities with local Black-owned businesses, helping to promote economic growth and diversity. Join us in our mission today."
      />
      <PageWrapper
        title="Our Story"
        subTitle="More than just a platform, we're a powerful ecosystem dedicated to lifting up black entrepreneurs across Canada"
      >
        <div className="my-8 grid gap-10 lg:grid-cols-2">
          <section>
            <div className="prose lg:prose-lg">
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
            <div className="mt-8 flex items-center gap-4">
              <ButtonLink href="/search/all" variant="outlined">
                Join our community
              </ButtonLink>
              <ButtonLink href="/partners">Partner with us</ButtonLink>
            </div>
          </section>

          <div className="ml-auto grid w-full grid-cols-2 gap-4 lg:-mt-40 lg:max-w-lg">
            <div className="space-y-4">
              <div className="relative aspect-[3/4] w-full overflow-hidden rounded-lg shadow-md shadow-primary/40">
                <Image
                  src="/people/nina_and_toffy.jpeg"
                  alt="Nina and Toffy"
                  layout="fill"
                  objectFit="cover"
                />
              </div>
              <div className="relative aspect-[3/4] w-full overflow-hidden rounded-lg shadow-md shadow-primary/40">
                <Image
                  src="/nina_and_ben.jpeg"
                  alt="Nina and Benaiah"
                  layout="fill"
                  objectFit="cover"
                />
              </div>
            </div>

            <div className="mt-8 space-y-4 lg:mt-14">
              <div className="relative aspect-[3/4] w-full overflow-hidden rounded-lg shadow-md shadow-primary/40">
                <Image
                  src="/people/theo.jpeg"
                  alt="Theo"
                  layout="fill"
                  objectFit="cover"
                />
              </div>
              <div className="relative aspect-[3/4] w-full overflow-hidden rounded-lg shadow-md shadow-primary/40">
                <Image
                  src="/people/nina_ben_marilyn.jpeg"
                  alt="Nina, Benaiah and Marilyn"
                  layout="fill"
                  objectFit="cover"
                />
              </div>
            </div>
          </div>
        </div>
      </PageWrapper>
    </>
  );
};

export default OurStory;
