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
        <div className={`container ${styles.hero_content}`}>
          <div className={styles.text}>
            <h3 className={styles.tagLine}>SoPlugged PRO</h3>
            <h1>{post.title}</h1>
            <p>Learn how to grow and improve your online presence</p>
          </div>
        </div>
      </section>
      <PageWrapper>
        <div dangerouslySetInnerHTML={{ __html: post.content.html }} />
      </PageWrapper>
      <Footer tertiary />
    </>
  );
};

export default GuideContentPage;
