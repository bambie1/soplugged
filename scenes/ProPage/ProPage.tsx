import dynamic from "next/dynamic";
import Image from "next/image";

import { PageWrapper } from "@/components/PageWrapper";
import { SEO } from "@/components/SEO";
import { Button } from "@/styled/Button";
import { Input } from "@/styled/Input";
import { rgbDataURL } from "@/lib/dataUrl";

import styles from "./ProPage.module.scss";

const Header = dynamic(() => import("../../components/Header/Header"));
const Footer = dynamic(() => import("../../components/Footer/Footer"));

const ProPage = () => {
  return (
    <>
      <SEO title="Professional help for your business' digital needs | SoPluggedPRO" />

      <Header />
      <PageWrapper>
        <section className={styles.pageSection}>
          <aside>
            <p className={styles.comingSoon}>COMING SOON...</p>
            <h1 className={styles.heading}>
              SoPlugged<sup>PRO</sup>
            </h1>
            <p className={styles.tagLine}>
              Professional help for your business' digital needs
            </p>

            <section className={styles.info}>
              <p>
                Everything you need to launch and improve your digital presence
                as a small to medium-sized business.
              </p>

              <p>
                From strategic recommendations to professional services
                (personalized consultation, web design, and email marketing),
                our team of experts is ready to work with you and provide all
                the support you need to grow your business.
              </p>

              <p>
                If you'd like to know when you can access this feature, add your
                e-mail address below to get notified
              </p>
              <form className={styles.form}>
                <Input label="Email Address" type="email" />
                <Button>Notify Me!</Button>
              </form>
            </section>
          </aside>
          <aside>
            <Image
              placeholder="blur"
              blurDataURL={rgbDataURL(207, 207, 207)}
              src="/images/soplugged_pro.png"
              alt="Business consult session"
              width={400}
              height={400}
            />
          </aside>
        </section>
      </PageWrapper>
      <Footer />
    </>
  );
};

export default ProPage;
