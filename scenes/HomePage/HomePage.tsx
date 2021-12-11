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
      <PageWrapper hasHero>
        <div className="flex-column">
          <section className={`${styles.pageSection} ${styles.reverse}`}>
            <aside>
              <h2>Want to #BuyBlack?</h2>
              <p>
                We have businesses based in Ottawa, Toronto, and across Canada
                that you can choose from. Whether you're looking for a hair
                stylist or a caterer for your next event, we've got you covered.
                Once you find a business you like, you can contact them directly
                on our platform, or through their preferred means of
                communication.
              </p>
              <ButtonLink variant="filled" href="/search">
                Search
              </ButtonLink>
            </aside>
            <aside>
              <Image
                placeholder="blur"
                blurDataURL={rgbDataURL(247, 244, 244)}
                src="/images/search_businesses_tiny.png"
                width={400}
                height={272}
                alt="Search for businesses"
              />
            </aside>
          </section>

          <TopCategories />
          <section className={styles.pageSection}>
            <aside>
              <Image
                placeholder="blur"
                blurDataURL={rgbDataURL(247, 244, 244)}
                src="/images/add_business.png"
                width={400}
                height={350}
                alt="Add a business"
              />
            </aside>
            <aside>
              <h2>Want to add your business?</h2>
              <p>
                You can do so for <u>FREE!</u> Simply click the 'JOIN' button to
                register, and follow the instructions to add your business to
                our directory. Once complete, you can begin to field quotesand
                requests through your preferred means of communication.
              </p>
              <ButtonLink variant="filled" href="/my-business">
                Register
              </ButtonLink>
            </aside>
          </section>
          <section className={`${styles.pageSection} ${styles.reverse}`}>
            <aside>
              <h2>Become a Sponsor</h2>
              <p>
                At SoPlugged, our biggest inspiration is supporting one another
                and growing our community. Our goal is to normalize buying black
                and we rely on amazing people like you to keep our platform free
                and accessible to Black-owned businesses across Canada.
              </p>
              <p className={styles.subText}>
                All donations go towards maintaining our platform and supporting
                Black-owned businesses across Canada.
              </p>
              <ButtonLink variant="filled" href="/sponsors">
                Become a sponsor
              </ButtonLink>
            </aside>
            <aside>
              <Image
                placeholder="blur"
                blurDataURL={rgbDataURL(247, 244, 244)}
                src="/images/support_team.png"
                alt="Become a sponsor"
                width={400}
                height={400}
              />
            </aside>
          </section>

          <FAQs />
        </div>
      </PageWrapper>
      <Footer />
    </>
  );
};

export default HomePage;
