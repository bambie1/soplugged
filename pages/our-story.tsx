import Image from "next/image";
import Link from "next/link";

import SEO from "@/src/components/SEO";
import PageWrapper from "@/src/layouts/PageWrapper";
import { ButtonLink } from "@/styled/ButtonLink";

const OurStory = () => {
  return (
    <>
      <SEO
        title="Our Story | SoPlugged"
        description="Learn about SoPlugged and our mission to support and empower Black-owned businesses across Canada. Our free online directory connects communities with local Black-owned businesses, helping to promote economic growth and diversity. Join us in our mission today."
      />
      <PageWrapper
        title="Our Story"
        subTitle="Committed to empowering black entrepreneurs across Canada through useful business resources, networking opportunities and lots more!"
      >
        <div className="my-8 grid gap-10 lg:grid-cols-2">
          <section>
            <div className="prose lg:prose-lg">
              <p>
                SoPlugged was born out of a desire to address the visibility gap
                Black-owned businesses face in Canada. Recognizing the
                challenges that Black entrepreneurs encounter in promoting their
                businesses, we launched SoPlugged as an{" "}
                <Link href="/directory">online directory</Link> that facilitates
                connections between consumers and over 100 Black-owned
                businesses across the country. Our mission is to empower these
                businesses by providing a platform to showcase their offerings
                and connect with new customers.
              </p>
              <p>
                Since our inception in 2021, SoPlugged has grown to more than a
                directory. We started{" "}
                <a
                  href="https://tbmpodcast.soplugged.com/"
                  target="_blank"
                  rel="noreferrer"
                >
                  The Business Mindset Podcast
                </a>{" "}
                where we interview Black entrepreneurs in Canada as we explore
                their journey to building a successful business.
              </p>
              <p>
                We also host a yearly event -{" "}
                <Link href="/pluggedin">PluggedIn Conference</Link>, a
                networking event that brings Black entrepreneurs and business
                leaders from across Canada together to learn from one another as
                well as from our invited guests like{" "}
                <a
                  href="https://renitheresource.com/"
                  target="_blank"
                  rel="noreferrer"
                >
                  Reni, the Resource
                </a>
                .
              </p>
            </div>
            <div className="mt-8 flex items-center gap-4">
              <ButtonLink href="/join" variant="outlined">
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
