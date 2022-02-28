import { FC } from "react";
import dynamic from "next/dynamic";
import Link from "next/link";

import { PageWrapper } from "@/components/PageWrapper";
import { FeaturedGuide } from "@/components/FeaturedGuide";
import { ProPlug } from "@/components/ProPlug";
import { ButtonLink } from "@/styled/ButtonLink";

import styles from "./ProGuidesPage.module.scss";

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
        <div className={`container ${styles.hero_content}`}>
          <h3 className={styles.tagLine}>FREE Guides</h3>
          <h1>Learn how to grow and improve your online presence</h1>
          <p className={styles.subTitle}>
            Explore our free guides and resources that we've compiled to help
            you grow your business with ease.
          </p>

          <ButtonLink big href="#list-of-guides" variant="outlined">
            Start reading
          </ButtonLink>
        </div>
      </section>

      <PageWrapper>
        <div className="flex column">
          <FeaturedGuide feature={feature} />

          <section id="list-of-guides" className={styles.pageSection}>
            <h2>All guides</h2>
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
            <ProPlug />
          </section>
        </div>
      </PageWrapper>
      <Footer tertiary />
    </>
  );
};

export default ProGuidesPage;
