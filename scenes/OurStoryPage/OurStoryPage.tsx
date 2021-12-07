import dynamic from "next/dynamic";

import { ButtonLink } from "@/styled/ButtonLink";
import { PageWrapper } from "@/components/PageWrapper";

const Header = dynamic(() => import("../../components/Header/Header"));
const Footer = dynamic(() => import("../../components/Footer/Footer"));

const OurStoryPage = () => {
  return (
    <>
      <Header />
      <PageWrapper>
        <h1>our story</h1>
        <p>
          SoPlugged is an online platform that makes #buyingblack easy! Our
          search-friendly platform helps end-users connect to Black-owned
          businesses across Canada. When you{" "}
          <ButtonLink href="/my-business">register</ButtonLink> your business on
          our platform, you increase your brand visibility and get access to a
          thriving community of people looking to support Black-owned
          businesses.
          <br></br> At SoPlugged, our biggest inspiration is supporting one
          another and growing our community. It’s always a beautiful thing to
          see people join the movement to support Black-owned businesses.
          <br></br> That’s our story and we hope you become a part of it!
        </p>
        <div>
          <ButtonLink href="/search">Directory</ButtonLink>
          <ButtonLink href="/sponsors">Sponsors</ButtonLink>
        </div>
      </PageWrapper>
      <Footer />
    </>
  );
};

export default OurStoryPage;
