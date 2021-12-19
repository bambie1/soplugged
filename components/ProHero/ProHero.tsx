import { FC } from "react";
import Image from "next/image";

import { rgbDataURL } from "@/lib/dataUrl";

import styles from "./ProHero.module.scss";
import { Button } from "@/styled/Button";

const ProHero: FC = () => {
  return (
    <section className={styles.hero}>
      <div className={`container ${styles.hero_content}`}>
        <aside>
          <h1>Professional help for your business' digital needs</h1>
          <p>
            Everything you need to launch and improve your digital presence as a
            small to medium-sized business
          </p>
          <Button>Let's Talk</Button>
        </aside>
        <aside className={styles.image}>
          <Image
            // placeholder="blur"
            // blurDataURL={rgbDataURL(207, 207, 207)}
            src="/images/soplugged_pro.png"
            alt="Business consult session"
            width={400}
            height={400}
            priority
          />
        </aside>
      </div>
    </section>
  );
};

export default ProHero;
