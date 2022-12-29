import { FC } from "react";

import PageWrapper from "@/src/layouts/PageWrapper";

import { ButtonLink } from "@/styled/ButtonLink";

const GuidelinesPage: FC = () => {
  return (
    <>
      <PageWrapper isSlim>
        <h1 className="relative mb-4 block text-5xl font-bold text-primary">
          Community Guidelines
        </h1>

        <div className="prose-lg">
          <p>
            The purpose of SoPlugged is to increase brand awareness of
            Black-owned businesses across Canada. We strive to provide a
            platform that connects end-users looking to #buyblack to the perfect
            business that meets their needs.
          </p>
          <p>
            In order to maintain a respectful, inclusive, and safe environment
            for everyone, we've created a set of community guidelines to serve
            as a moral compass for behavior on our platform, define what is
            acceptable in the SoPlugged community, and explain how violations
            are enforced. They aren't tied to any law, rather they reflect our
            expectations and are rooted in our mission to support the Black
            community in Canada!
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
          <p>
            <b>CONSEQUENCES:</b> We will take action when we see someone
            violating these guidelines or if your business is flagged as
            non-Black owned. Sometimes that just means giving someone a warning;
            other times it means revoking certain privileges or removing your
            business from our site. We ask that all community members reach out
            to a member of our team to report any actions that violate these
            guidelines.
          </p>
          <p>
            <b>AGREEMENT:</b> Just like our community, these standards will
            continue to grow, evolve, and change. By continuing to engage with,
            and/or follow this page or posts on this page, you are considered to
            be in agreement with the community guidelines noted above. As always
            please reach out to a member of our team with any questions or
            concerns.
          </p>
        </div>
        <br />
        <div className="flex gap-4">
          <ButtonLink href="/search/all" variant="filled">
            Begin your search
          </ButtonLink>
          <ButtonLink href="/my-business" variant="outlined">
            Add your business
          </ButtonLink>
        </div>
      </PageWrapper>
    </>
  );
};

export default GuidelinesPage;
