import { FC } from "react";
import dynamic from "next/dynamic";
import Image from "next/image";

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

      <PageWrapper center>
        <h1>FREE Guides</h1>
        <ul className={styles.list}>
          {posts.map((post: any) => (
            <li key={post.slug} className={styles.postPreview}>
              <div className={styles.coverPhoto}>
                <Image
                  src={post.coverImage?.url || "/images/plug_illustrations.svg"}
                  layout="fill"
                  objectFit="cover"
                  alt="post cover photo"
                />
              </div>
              <h3>{post.title}</h3>
              <p>{post.excerpt}</p>
            </li>
          ))}
        </ul>
      </PageWrapper>
      <Footer />
    </>
  );
};

export default ProGuidesPage;
