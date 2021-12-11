import dynamic from "next/dynamic";
import Image from "next/image";

import { ProHero } from "@/components/ProHero";
import { rgbDataURL } from "@/lib/dataUrl";
import { proFeatures } from "@/lib/proFeatures";

import styles from "./ProPage.module.scss";
import { Button } from "@/styled/Button";

const Header = dynamic(() => import("../../components/Header/Header"));
const Footer = dynamic(() => import("../../components/Footer/Footer"));

const ProPage = () => {
  return (
    <>
      <Header color="blue" />
      <ProHero />
      <div>
        <section className={`${styles.pageSection} container`}>
          <h2 className="center">PRO FEATURES</h2>
          <div className={styles.features}>
            {proFeatures.map(({ text, image }) => (
              <div key={text} className={styles.feature}>
                <Image src={image} width={40} height={40} alt="" />
                <span>{text}</span>
              </div>
            ))}
          </div>
        </section>

        <section className={styles.pageSection}>
          <h2 className="center"> HOW IT WORKS</h2>

          <div>
            <article className={`container ${styles.step}`}>
              <aside className={styles.image}>
                <Image
                  placeholder="blur"
                  blurDataURL={rgbDataURL(207, 207, 207)}
                  src="/images/soplugged_pro.png"
                  alt="Business consult session"
                  width={400}
                  height={400}
                />
              </aside>
              <aside>
                <h3>Book a FREE consultation</h3>

                <p>
                  You’ll be meeting with both our marketing specialist, and
                  developer consultant. During this meeting, we’ll go over
                  deliverables, and invoicing.
                </p>
                <Button>Book Consult</Button>
              </aside>
            </article>
          </div>
          <div>
            <article className={`container ${styles.step}`}>
              <aside>
                <h3>We get to work</h3>

                <p>
                  Discussions have been had, agreements have been made. Now, our
                  team of experts roll up their sleeves to surpass your
                  expectations! You just have to carry on being an amazing
                  entrepreneur, and we’ll check in with you if needed.
                </p>
                <Button>Get Started</Button>
              </aside>
              <aside className={styles.image}>
                <Image
                  placeholder="blur"
                  blurDataURL={rgbDataURL(207, 207, 207)}
                  src="/images/soplugged_pro.png"
                  alt="Business consult session"
                  width={400}
                  height={400}
                />
              </aside>
            </article>
          </div>

          <div>
            <article className={`container ${styles.step}`}>
              <aside className={styles.image}>
                <Image
                  placeholder="blur"
                  blurDataURL={rgbDataURL(207, 207, 207)}
                  src="/images/soplugged_pro.png"
                  alt="Business consult session"
                  width={400}
                  height={400}
                />
              </aside>
              <aside>
                <h3>Ready to go Live!</h3>

                <p>
                  If your request was for a website, we’ll contact you once it’s
                  ready, and have a follow-up meeting to cross ‘t’s and dot
                  ’i’s. After this, you decide if you want ongoing upkeep of the
                  page.
                </p>
                <Button>Book Consult</Button>
              </aside>
            </article>
          </div>
        </section>
      </div>
      <Footer tertiary />
    </>
  );
};

export default ProPage;
