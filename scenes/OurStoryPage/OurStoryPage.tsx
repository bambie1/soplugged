/* eslint-disable max-len */
import dynamic from "next/dynamic";

import { ButtonLink } from "@/styled/ButtonLink";
import { PageWrapper } from "@/components/PageWrapper";

const Header = dynamic(() => import("../../components/Header"));
const Footer = dynamic(() => import("../../components/Footer/Footer"));

const OurStoryPage = () => {
  return (
    <>
      <Header />
      <PageWrapper isSlim>
        <h1 className="center">our story</h1>
        <p>
          Hi, I'm Nina, creator, and founder of SoPlugged - an online platform
          that makes <b>#buyingblack</b> easy! Our biggest inspiration at
          SoPlugged is supporting Black entrepreneurs and growing our community
          together.
        </p>
        <p>
          Our search-friendly platform makes it easy to find and connect with
          Black-owned businesses across Canada. It also gives Black
          entrepreneurs the opportunity to increase brand visibility and reach a
          thriving community of people looking to buy black.
        </p>

        <p>
          It's always a beautiful thing to see people join the movement to
          support Black-owned businesses. That's our story and we hope you
          become a part of it!
        </p>
        <div className="pageButtons">
          <ButtonLink href="/search" variant="filled">
            Find a business
          </ButtonLink>
          <ButtonLink href="/my-business" variant="outlined">
            Add your business
          </ButtonLink>
        </div>
      </PageWrapper>
      <Footer />
    </>
  );
};

export default OurStoryPage;
