import dynamic from "next/dynamic";
import Image from "next/image";
import { openPopupWidget } from "react-calendly";
import { useWindowSize } from "@reach/window-size";

import { ProHero } from "@/components/ProHero";
import { proFeatures } from "@/lib/proFeatures";
import { Button } from "@/styled/Button";

import styles from "./ProPage.module.scss";
import { FAQs } from "@/components/FAQs";

const Header = dynamic(() => import("../../components/Header/Header"));
const Footer = dynamic(() => import("../../components/Footer/Footer"));

const ProPage = () => {
  const { width } = useWindowSize();

  const openCalendly = () => {
    if (width < 768) {
      location.assign(
        "https://calendly.com/benaiahbarango/website-consult?month=2021-12"
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
      <div>
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
                developer consultant. During this meeting, we’ll go over
                deliverables, and invoicing.
              </p>
            </div>

            <div className={`${styles.step} ${styles.work}`}>
              <div className={styles.stepImage}>
                <Image src="/images/draw.png" width={60} height={60} alt="" />
              </div>
              <h3>We get to work</h3>

              <p>
                Our team of experts roll up their sleeves to surpass your
                expectations, while you carry on being an amazing entrepreneur.
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
          <h2 className="center">Pro Features</h2>
          <div className={styles.features}>
            {proFeatures.map(({ text, image }) => (
              <div key={text} className={styles.feature}>
                <Image src={image} width={40} height={40} alt="" />
                <span>{text}</span>
              </div>
            ))}
          </div>
        </section>

        <FAQs />
      </div>
      <Footer tertiary />
    </>
  );
};

export default ProPage;
