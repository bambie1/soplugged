import { FC, useEffect, useState } from "react";
import dynamic from "next/dynamic";
import {
  FacebookShareButton,
  TwitterShareButton,
  WhatsappShareButton,
} from "react-share";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebook,
  faTwitter,
  faWhatsapp,
} from "@fortawesome/free-brands-svg-icons";

import { PageWrapper } from "@/components/PageWrapper";
import { ButtonLink } from "@/styled/ButtonLink";

import styles from "./GuideContentPage.module.scss";

const Header = dynamic(() => import("../../components/Header/Header"));
const Footer = dynamic(() => import("../../components/Footer/Footer"));

interface Props {
  post: any;
}

const GuideContentPage: FC<Props> = ({ post }) => {
  const [blogUrl, setBlogUrl] = useState("");

  useEffect(() => {
    setBlogUrl(window.location.href);
  }, []);

  const { title, createdBy, content, subtitle, createdAt } = post;

  return (
    <>
      <Header color="blue" />
      <section className={styles.hero}>
        <div className={`container ${styles.heroContent}`}>
          <div className={styles.text}>
            <p className={styles.subtitle}>{subtitle}</p>
            <h1>{title}</h1>
            <hr />
            <p className={styles.author}>
              <span>{createdBy.name || "SoPlugged team"}</span> &middot;{" "}
              {createdAt.substring(0, 10)}
            </p>
          </div>
        </div>
      </section>
      <PageWrapper isSlim>
        <div
          dangerouslySetInnerHTML={{ __html: content.html }}
          className={styles.cmsContent}
        />

        <div className={styles.blogFooter}>
          <hr />
          <div className={styles.shareDiv}>
            <p>Share:</p>
            <FacebookShareButton url={blogUrl}>
              <FontAwesomeIcon icon={faFacebook} />
            </FacebookShareButton>
            <TwitterShareButton url={blogUrl}>
              <FontAwesomeIcon icon={faTwitter} />
            </TwitterShareButton>
            <WhatsappShareButton url={blogUrl}>
              <FontAwesomeIcon icon={faWhatsapp} />
            </WhatsappShareButton>
          </div>
          <section>
            <p>
              Psst...Black entrepreneurs in Canada can list their business on
              our directory for <b>FREE!</b>
            </p>
            <ButtonLink variant="filled" href="/my-business">
              Get listed
            </ButtonLink>
          </section>
        </div>
      </PageWrapper>
      <Footer tertiary />
    </>
  );
};

export default GuideContentPage;
