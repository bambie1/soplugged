/* eslint-disable max-len */
import dynamic from "next/dynamic";
import Image from "next/image";
import { openPopupWidget } from "react-calendly";
import { useWindowSize } from "@reach/window-size";

import { ProHero } from "@/components/ProHero";
import { FAQs } from "@/components/FAQs";
import { ProHowItWorks } from "@/components/ProHowItWorks";
import { Button } from "@/styled/Button";
import { rgbDataURL } from "@/lib/dataUrl";

import styles from "./ProPage.module.scss";
import { proPersonas } from "@/lib/proPersonas";

const Header = dynamic(() => import("../../components/Header/Header"));
const Footer = dynamic(() => import("../../components/Footer/Footer"));

const ProPage = () => {
  const { width } = useWindowSize();

  const openCalendly = () => {
    // if (width < 768) {
    window.open(
      "https://calendly.com/benaiahbarango/website-consult?month=2021-12",
      "_blank"
    );
    // } else {
    //   openPopupWidget({
    //     url: "https://calendly.com/benaiahbarango/website-consult?month=2021-12",
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
        <section className={styles.pageSection}>
          <ProHowItWorks ctaHandler={openCalendly} />
        </section>

        <section className={`${styles.pageSection} container`}>
          <h2 className="center">WE MADE IT FOR YOU</h2>

          <div className={styles.personaGroup}>
            {proPersonas.map(({ image, heading, text }) => (
              <div className={styles.persona} key={heading}>
                <div className={styles.personaImage}>
                  <Image
                    src={image}
                    layout="fill"
                    objectFit="cover"
                    alt="business owner showcasing product"
                  />
                </div>
                <div>
                  <h3>{heading}</h3>
                  <p>{text}</p>
                </div>
              </div>
            ))}
          </div>

          <Button big onClick={openCalendly}>
            Let's talk
          </Button>
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
