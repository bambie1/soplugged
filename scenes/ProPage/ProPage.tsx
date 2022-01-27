/* eslint-disable max-len */
import dynamic from "next/dynamic";
import { openPopupWidget } from "react-calendly";
import { useWindowSize } from "@reach/window-size";

import { ProHero } from "@/components/ProHero";
import { FAQs } from "@/components/FAQs";
import { ProHowItWorks } from "@/components/ProHowItWorks";
import { ProPersonas } from "@/components/ProPersonas";
import { ProGuides } from "@/components/ProGuides";

import styles from "./ProPage.module.scss";

const Header = dynamic(() => import("../../components/Header/Header"));
const Footer = dynamic(() => import("../../components/Footer/Footer"));

const ProPage = () => {
  const { width } = useWindowSize();

  const openCalendly = () => {
    // if (width < 768) {
    window.open(
      "https://calendly.com/benaiahbarango/website-consult",
      "_blank"
    );
    // } else {
    //   openPopupWidget({
    //     url: "https://calendly.com/benaiahbarango/website-consult",
    //     pageSettings: {
    //       backgroundColor: "ffffff",
    //       hideEventTypeDetails: false,
    //       hideLandingPageDetails: false,
    //       primaryColor: "00a2ff",
    //       textColor: "4d5055",
    //     },
    //   });
    // }
  };

  return (
    <>
      <Header color="blue" />
      <ProHero ctaHandler={openCalendly} />
      <div className={styles.wrapper}>
        <section className={`${styles.pageSection} container`}>
          <ProPersonas ctaHandler={openCalendly} />
        </section>
        <section className={styles.pageSection}>
          <ProHowItWorks ctaHandler={openCalendly} />
        </section>
        <section className={styles.pageSection}>
          <ProGuides />
        </section>

        <section className={`container`}>
          <FAQs isPro />
        </section>
      </div>
      <Footer tertiary />
    </>
  );
};

export default ProPage;
