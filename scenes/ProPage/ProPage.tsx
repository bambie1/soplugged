/* eslint-disable max-len */
import dynamic from "next/dynamic";

import { ProHero } from "@/components/ProHero";
import { FAQs } from "@/components/FAQs";
import { ProHowItWorks } from "@/components/ProHowItWorks";
import { ProPersonas } from "@/components/ProPersonas";
import { ProMoreFeatures } from "@/components/ProMoreFeatures";

import styles from "./ProPage.module.scss";

const Header = dynamic(() => import("../../components/Header/Header"));
const Footer = dynamic(() => import("../../components/Footer/Footer"));

const ProPage = () => {
  const openCalendly = () => {
    window.open("https://calendly.com/soplugged/consultation", "_blank");
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
          <ProMoreFeatures />
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
