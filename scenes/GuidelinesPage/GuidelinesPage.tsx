import { FC } from "react";
import dynamic from "next/dynamic";

import { PageWrapper } from "@/components/PageWrapper";

import styles from "./GuidelinesPage.module.scss";

const Header = dynamic(() => import("../../components/Header/Header"));
const Footer = dynamic(() => import("../../components/Footer/Footer"));

const GuidelinesPage: FC = () => {
  return (
    <>
      <Header />
      <PageWrapper>
        <h1 className="center">Community Guidelines</h1>

        <p>
          The purpose of SoPlugged is to increase brand awareness of Black-owned
          businesses across Canada. We strive to provide a platform that
          connects end-users looking to #buyblack to the perfect business that
          meets their needs.
        </p>

        {/* eslint-disable-next-line max-len */}
        <p>
          In order to maintain a respectful, inclusive, and safe environment for
          everyone, we’ve created a set of community guidelines to serve as a
          moral compass for behavior on our platform, define what is acceptable
          in the SoPlugged community, and explain how violations are enforced.
          They aren’t tied to any law, rather they reflect our expectations and
          are rooted in our mission to support the Black community in Canada!
        </p>

        <p>
          We want to create the best experience for all community members, and
          ask that you respect and follow these guidelines:
        </p>
        <ul>
          <li>
            Business registration on SoPlugged is solely reserved for Black
            entrepreneurs in Canada.
          </li>
          <li>
            As you respond to potential customers, communicate respectfully.
            There will be zero tolerance for bullying.
          </li>
          <li>
            Do not post any pictures or content that could be considered
            defamatory, indecent, hateful, racist, xenophobic, homophobic,
            sexist, disgraceful, vulgar, or inappropriate.
          </li>
          <li>
            Respect the privacy and personal information of other community
            members.
          </li>
        </ul>
      </PageWrapper>
      <Footer />
    </>
  );
};

export default GuidelinesPage;
