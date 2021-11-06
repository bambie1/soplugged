import React from "react";
import Image from "next/image";

import SEO from "@components/SEO";
import { ProHero } from "@components/index";
import { Grid } from "@material/mui-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faHandshake,
  faNewspaper,
  faCalendarAlt,
} from "@fortawesome/free-regular-svg-icons";

import styles from "styles/Pro.module.scss";

const SectionTitle = ({ title }) => (
  <h3 className={styles.sectionTitle}>{title}</h3>
);

const Pro = () => {
  return (
    <>
      <SEO title="Professional help for your business' digital needs | SoPluggedPRO" />
      <ProHero />
      <main className="body_content">
        <SectionTitle title="PRO FEATURES" />
        <section className={styles.pageSection}>
          <div className={styles.features}>
            <Grid container spacing={2}>
              <Grid item xs={12} sm={6} md={3}>
                <div className={styles.feature}>
                  <FontAwesomeIcon
                    icon={faCalendarAlt}
                    className={styles.featureIcon}
                  />
                  <p>Consulting sessions with our marketing expert</p>
                </div>
              </Grid>
              <Grid item xs={12} sm={6} md={3}>
                <div className={styles.feature}>
                  <FontAwesomeIcon
                    icon={faHandshake}
                    className={styles.featureIcon}
                  />
                  <p> Website design by one of our specialists</p>
                </div>
              </Grid>
              <Grid item xs={12} sm={6} md={3}>
                <div className={styles.feature}>
                  <FontAwesomeIcon
                    icon={faNewspaper}
                    className={styles.featureIcon}
                  />
                  <p>
                    FREE guides on how build or improve your digital presence
                  </p>
                </div>
              </Grid>
              <Grid item xs={12} sm={6} md={3}>
                <div className={styles.feature}>
                  <FontAwesomeIcon
                    icon={faHandshake}
                    className={styles.featureIcon}
                  />
                  <p>The best, and only the best</p>
                </div>
              </Grid>
            </Grid>
          </div>
        </section>
        <SectionTitle title="HOW IT WORKS" />
        <section className={styles.pageSection}>
          <article className={styles.stepArticle}>
            <Image
              placeholder="blur"
              src="/images/search_businesses_tiny.png"
              width={400}
              height={272}
              alt="Book a free consultation"
            />
            <aside>
              <h4>Book a FREE consultation</h4>
              <p>
                You’ll be meeting with both our marketing specialist, and
                developer consultant. During this meeting, we’ll go over
                deliverables, and invoicing.
              </p>
            </aside>
          </article>
          <article className={styles.stepArticle}>
            <aside>
              <h4>We get to work!</h4>
              <p>
                Discussions have been had, agreements have been made. Now, our
                team of experts roll up their sleeves to surpass your
                expectations! You just have to carry on being an amazing
                entrepreneur, and we’ll check in with you if needed.
              </p>
            </aside>
            <Image
              placeholder="blur"
              src="/images/search_businesses_tiny.png"
              width={400}
              height={272}
              alt="Book a free consultation"
            />
          </article>
          <article className={styles.stepArticle}>
            <Image
              placeholder="blur"
              src="/images/search_businesses_tiny.png"
              width={400}
              height={272}
              alt="Book a free consultation"
            />
            <aside>
              <h4>Ready to go live</h4>
              <p>
                If your request was for a website, we’ll contact you once it’s
                ready, and have a follow-up meeting to cross ‘t’s and dot ’i’s.
                After this, you decide if you want ongoing upkeep of the page.
              </p>
            </aside>
          </article>
        </section>
      </main>
    </>
  );
};

export default Pro;
