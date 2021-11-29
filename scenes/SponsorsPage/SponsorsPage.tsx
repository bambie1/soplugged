import dynamic from "next/dynamic";

import { PageWrapper } from "@/components/PageWrapper";
import { SEO } from "@/components/SEO";
import { ButtonLink } from "@/styled/ButtonLink";

import styles from "./SponsorsPage.module.scss";

const Header = dynamic(() => import("../../components/Header/Header"));
const Footer = dynamic(() => import("../../components/Footer/Footer"));

const SponsorsPage = () => {
  return (
    <>
      <SEO
        title="Become a Sponsor | SoPlugged"
        description="Our goal is to give black business a wider platform in Canada for free. Help us maintain this goal by donating."
      />
      <Header />
      <PageWrapper>
        <h1 className="center">sponsors</h1>
        <section className={styles.section}>
          <aside>
            <p>
              At SoPlugged, our biggest inspiration is supporting one another
              and growing our community. Our goal is to normalize buying black
              and we rely on amazing people like you to keep our platform free
              and accessible to Black-owned businesses across Canada.
            </p>
            <hr style={{ width: "100%", maxWidth: "150px" }}></hr>
            <p>
              <em>
                All donations go towards maintaining our platform and supporting
                Black-owned businesses across Canada.
              </em>
            </p>
          </aside>
          <aside>
            <iframe
              src="https://kweeve.page/soplugged/embed"
              style={{ border: "none" }}
              width="100%"
              height="700px"
              allow="payment"
            ></iframe>
          </aside>
        </section>
        <ButtonLink href="/search" variant="outlined">
          Back to Directory
        </ButtonLink>
      </PageWrapper>
      <Footer />
    </>
  );
};

export default SponsorsPage;
