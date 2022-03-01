import Image from "next/image";
import { FC } from "react";

import { Button } from "@/styled/Button";

import styles from "./ProHowItWorks.module.scss";

interface Props {
  ctaHandler: any;
}

const ProHowItWorks: FC<Props> = ({ ctaHandler }) => {
  return (
    <>
      <h2 className="center">HOW IT WORKS</h2>

      <div className={`container ${styles.howItWorks}`}>
        <div className={`${styles.step} ${styles.consult}`}>
          <div className={styles.number}>
            <p>1</p>
          </div>
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
            You’ll be meeting with both our marketing specialist, and developer
            consultant. This is to understand your business needs and room for
            growth.
          </p>
        </div>

        <div className={`${styles.step} ${styles.work}`}>
          <div className={styles.number}>
            <p>2</p>
          </div>
          <div className={styles.stepImage}>
            <Image src="/images/draw.png" width={60} height={60} alt="" />
          </div>
          <h3>We get to work</h3>

          <p>
            It is now time for our experts to roll up their sleeves to exceed
            your expectations! All you need to do, is keep on being an amazing
            entrepreneur, and we'll check in with you if needed.
          </p>
        </div>

        <div className={`${styles.step} ${styles.deliver}`}>
          <div className={styles.number}>
            <p>3</p>
          </div>{" "}
          <div className={styles.stepImage}>
            <Image src="/images/gift-box.png" width={60} height={60} alt="" />
          </div>
          <h3>Ready to go Live!</h3>
          <p>
            If your request was for a website, we’ll contact you once it’s
            ready, and have a follow-up meeting to cross ‘t’s and dot ’i’s.
          </p>
        </div>
      </div>

      <Button big onClick={ctaHandler}>
        Get Started
      </Button>
    </>
  );
};

export default ProHowItWorks;
