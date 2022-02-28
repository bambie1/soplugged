import Link from "next/link";
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
import { ProPlug } from "@/components/ProPlug";

import styles from "./GuideContentPage.module.scss";

const Header = dynamic(() => import("../../components/Header/Header"));
const Footer = dynamic(() => import("../../components/Footer/Footer"));

interface Props {
  post: any;
  relatedPosts: any;
}

const GuideContentPage: FC<Props> = ({ post, relatedPosts }) => {
  const [blogUrl, setBlogUrl] = useState("");

  useEffect(() => {
    setBlogUrl(window.location.href);
  }, []);

  const { title, content, subtitle, createdAt } = post;

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
              <span>{"SoPlugged team"}</span> &middot;{" "}
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
          <div className={styles.readMore}>
            <h3>READ MORE...</h3>
            <ul className={styles.list}>
              {relatedPosts.map((post: any) => (
                <li key={post.slug}>
                  <Link href={`/pro/guides/${post.slug}`}>
                    <a className={styles.postPreview}>
                      <span className={styles.colorIcon} />
                      <div className={styles.info}>
                        <h4 title={post.title}>{post.title}</h4>
                        <p>{post.excerpt.substring(0, 70)}...</p>
                      </div>
                    </a>
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <section>
            <ProPlug />
          </section>
        </div>
      </PageWrapper>
      <Footer tertiary />
    </>
  );
};

export default GuideContentPage;
