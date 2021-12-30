/* eslint-disable max-len */
import dynamic from "next/dynamic";
import Image from "next/image";
import { openPopupWidget } from "react-calendly";
import { useWindowSize } from "@reach/window-size";

import { ProHero } from "@/components/ProHero";
import { Button } from "@/styled/Button";
import { FAQs } from "@/components/FAQs";
import { rgbDataURL } from "@/lib/dataUrl";

import styles from "./ProPage.module.scss";

const Header = dynamic(() => import("../../components/Header/Header"));
const Footer = dynamic(() => import("../../components/Footer/Footer"));

const ProPage = () => {
  const { width } = useWindowSize();

  const openCalendly = () => {
    if (width < 768) {
      window.open(
        "https://calendly.com/benaiahbarango/website-consult?month=2021-12",
        "_blank"
      );
    } else {
      openPopupWidget({
        url: "https://calendly.com/benaiahbarango/website-consult?month=2021-12",
        pageSettings: {
          backgroundColor: "ffffff",
          hideEventTypeDetails: false,
          hideLandingPageDetails: false,
          primaryColor: "00a2ff",
          textColor: "4d5055",
        },
      });
    }
  };

  return (
    <>
      <Header color="blue" />
      <ProHero ctaHandler={openCalendly} />
      <div className={styles.wrapper}>
        <section className={styles.pageSection}>
          <h2 className="center"> How It Works</h2>

          <div className={`container ${styles.howItWorks}`}>
            <div className={`${styles.step} ${styles.consult}`}>
              <div className={styles.stepImage}>
                <Image
                  src="/images/consultation.png"
                  width={60}
                  height={60}
                  alt=""
                />
              </div>
              <h3>Book a FREE consultation</h3>

              <p>
                You’ll be meeting with both our marketing specialist, and
                developer consultant. This is to understand your business needs
                and room for growth.
              </p>
            </div>

            <div className={`${styles.step} ${styles.work}`}>
              <div className={styles.stepImage}>
                <Image src="/images/draw.png" width={60} height={60} alt="" />
              </div>
              <h3>We get to work</h3>

              <p>
                It is now time for our experts to roll up their sleeves to
                exceed your expectations! All you need to do, is keep on being
                an amazing entrepreneur, and we'll check in with you if needed.
              </p>
            </div>

            <div className={`${styles.step} ${styles.deliver}`}>
              <div className={styles.stepImage}>
                <Image
                  src="/images/gift-box.png"
                  width={60}
                  height={60}
                  alt=""
                />
              </div>
              <h3>Ready to go Live!</h3>

              <p>
                If your request was for a website, we’ll contact you once it’s
                ready, and have a follow-up meeting to cross ‘t’s and dot ’i’s.
              </p>
            </div>
          </div>

          <Button big onClick={openCalendly}>
            Get Started
          </Button>
        </section>

        <section className={`${styles.pageSection} container`}>
          <h2 className="center">And there's more...</h2>

          <div className={styles.features}>
            <div className={`container ${styles.feature} ${styles.reverse}`}>
              <div className={styles.text}>
                <h3>ON-THE-GO SUPPORT</h3>

                <p>
                  With our team of experts by your side, you’ll have all the
                  support you need to grow your business.
                </p>
                <Button big onClick={openCalendly}>
                  Let's Talk
                </Button>
              </div>
              <aside className={styles.image}>
                <Image
                  placeholder="blur"
                  blurDataURL={rgbDataURL(207, 207, 207)}
                  src="/images/support_team.png"
                  alt="Business consult session"
                  width={300}
                  height={300}
                />
              </aside>
            </div>
            <div className={`container ${styles.feature} ${styles.reverse}`}>
              <aside className={styles.image}>
                <Image
                  placeholder="blur"
                  blurDataURL={rgbDataURL(207, 207, 207)}
                  src="/images/support_team.png"
                  alt="Business consult session"
                  width={300}
                  height={300}
                />
              </aside>
              <div className={styles.text}>
                <h3>FREE GUIDES ON BEST-PRACTICES</h3>

                <p>
                  You've come to the right place. Explore our free guides and
                  resources that we've compiled to help you grow your business
                  with ease.
                </p>
                <Button big>Start reading</Button>
              </div>
            </div>
          </div>
        </section>

        <section className={`${styles.pageSection} container`}>
          <FAQs isPro />
        </section>
      </div>
      <Footer tertiary />
    </>
  );
};

export default ProPage;
