import { FC } from "react";
import dynamic from "next/dynamic";
import Image from "next/image";
import Link from "next/link";

import { PageWrapper } from "@/components/PageWrapper";

import styles from "./GuideContentPage.module.scss";

const Header = dynamic(() => import("../../components/Header/Header"));
const Footer = dynamic(() => import("../../components/Footer/Footer"));

interface Props {
  post: any;
}

const GuideContentPage: FC<Props> = ({ post }) => {
  return (
    <>
      <Header color="blue" />
      <section className={styles.hero}>
        <div className={`container ${styles.heroContent}`}>
          <div className={styles.text}>
            <h1>{post.title}</h1>
          </div>
        </div>
      </section>
      <PageWrapper>
        <div className={styles.grid}>
          <div
            dangerouslySetInnerHTML={{ __html: post.content.html }}
            className={styles.cmsContent}
          />
          <aside className={styles.aside}></aside>
        </div>
      </PageWrapper>
      <Footer tertiary />
    </>
  );
};

export default GuideContentPage;
