import Image from "next/image";
import dynamic from "next/dynamic";

import { Hero } from "@/components/Hero";
import { PageWrapper } from "@/components/PageWrapper";
import { ButtonLink } from "@/styled/ButtonLink";
import { rgbDataURL } from "@/lib/dataUrl";

import styles from "./HomePage.module.scss";
import { FAQs } from "@/components/FAQs";

const Header = dynamic(() => import("../../components/Header/Header"));
const Footer = dynamic(() => import("../../components/Footer/Footer"));
const TopCategories = dynamic(
  () => import("../../components/TopCategories/TopCategories")
);

const HomePage = () => {
  return (
    <>
      <Header color="brown" />
      <Hero />
      <PageWrapper hasHero isFullWidth>
        <div className="flex-column">
          <h2 className="container">Popular Categories</h2>
          <div className={styles.mobileCarousel}>
            <ul>
              {[1, 2, 3, 4, 5, 6].map((item) => (
                <li key={item} className={styles.item}></li>
              ))}
            </ul>
          </div>
          <section
            className={`${styles.pageSection} ${styles.reverse} container`}
          >
            <div className="">
              <h2>What is SoPlugged?</h2>
              <p>
                We LOVE #buyingblack, and as we encourage everyone to buy-black,
                we're reducing the obstacles that you could possibly face if you
                wanted to support a local black-owned business. Check out some
                of our popular categories to get started!
              </p>
              <ButtonLink variant="filled" href="/search">
                Explore all categories
              </ButtonLink>
            </div>
            <aside className={`${styles.decor}`}>
              <div className={styles.categoryImages}>
                <ul className={styles.column}>
                  {[1, 2, 3].map((item) => (
                    <li key={item} className={styles.item}></li>
                  ))}
                </ul>
                <ul className={styles.column}>
                  {[1, 2, 3].map((item) => (
                    <li key={item} className={styles.item}></li>
                  ))}
                </ul>
              </div>
            </aside>
          </section>

          <section className={`container ${styles.locationFilter}`}>
            <h2>Filter by location</h2>
            <ul>
              {[...Array(6)].map((item) => (
                <li key={item}></li>
              ))}
            </ul>
          </section>
          <FAQs />
        </div>
      </PageWrapper>
      <Footer />
    </>
  );
};

export default HomePage;
