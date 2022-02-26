import { FC } from "react";
import dynamic from "next/dynamic";
import Link from "next/link";

import { PageWrapper } from "@/components/PageWrapper";

import styles from "./ProGuidesPage.module.scss";
import { FeaturedGuide } from "@/components/FeaturedGuide";
import { BrandPlug } from "@/components/BrandPlug";

const Header = dynamic(() => import("../../components/Header/Header"));
const Footer = dynamic(() => import("../../components/Footer/Footer"));

interface Props {
  posts: any;
  feature: any;
}

const ProGuidesPage: FC<Props> = ({ posts, feature }) => {
  return (
    <>
      <Header color="blue" />

      <section className={styles.hero}>
        <div className={`container ${styles.heroContent}`}>
          <div className={styles.text}>
            <p className={styles.tagLine}>Ecommerce-101</p>
            <h1>Learn how to grow and improve your online presence</h1>
          </div>
        </div>
      </section>

      <PageWrapper>
        <FeaturedGuide feature={feature} />

        <section className={styles.pageSection}>
          <h3>More reads...</h3>
          <ul className={styles.list}>
            {posts.map((post: any) => (
              <li key={post.slug}>
                <Link href={`/pro/guides/${post.slug}`}>
                  <a className={styles.postPreview}>
                    <span className={styles.colorIcon} />
                    <div className={styles.info}>
                      <h3 title={post.title}>{post.title}</h3>
                      <p>{post.excerpt.substring(0, 70)}...</p>
                    </div>
                  </a>
                </Link>
              </li>
            ))}
          </ul>
        </section>

        <section className={styles.pageSection}>
          <BrandPlug />
        </section>
      </PageWrapper>
      <Footer tertiary />
    </>
  );
};

export default ProGuidesPage;
