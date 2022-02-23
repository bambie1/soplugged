import { FC } from "react";
import dynamic from "next/dynamic";
import Image from "next/image";
import Link from "next/link";

import { PageWrapper } from "@/components/PageWrapper";

import styles from "./ProGuidesPage.module.scss";

const Header = dynamic(() => import("../../components/Header/Header"));
const Footer = dynamic(() => import("../../components/Footer/Footer"));

interface Props {
  posts: any;
}

const ProGuidesPage: FC<Props> = ({ posts }) => {
  return (
    <>
      <Header color="blue" />

      <section className={styles.hero}>
        <div className={`container ${styles.hero_content}`}>
          <div className={styles.text}>
            <h3 className={styles.tagLine}>SoPlugged PRO</h3>
            <h1>Ecommerce-101</h1>
            <p>Learn how to grow and improve your online presence</p>
          </div>
        </div>
      </section>

      <PageWrapper center>
        <ul className={styles.list}>
          {posts.map((post: any) => (
            <li key={post.slug}>
              <Link href={`/pro/guides/${post.slug}`}>
                <a className={styles.postPreview}>
                  <div className={styles.coverPhoto}>
                    <Image
                      src={
                        post.coverImage?.url || "/images/plug_illustrations.svg"
                      }
                      layout="fill"
                      objectFit="cover"
                      alt="post cover photo"
                    />
                  </div>
                  <div className={styles.info}>
                    <h3 title={post.title}>{post.title}</h3>
                    <p>{post.excerpt.substring(0, 70)}...</p>
                  </div>
                </a>
              </Link>
            </li>
          ))}
        </ul>
      </PageWrapper>
      <Footer tertiary />
    </>
  );
};

export default ProGuidesPage;
