import dynamic from "next/dynamic";
import { DialogOverlay, DialogContent } from "@reach/dialog";

import { PageWrapper } from "@/components/PageWrapper";
import { ButtonLink } from "@/styled/ButtonLink";
import { Button } from "@/styled/Button";

import styles from "./SponsorsPage.module.scss";
import { useState } from "react";

const Header = dynamic(() => import("../../components/Header/Header"));
const Footer = dynamic(() => import("../../components/Footer/Footer"));

const SponsorsPage = () => {
  const [showKweeve, setShowKweeve] = useState(false);

  const closeModal = () => {
    setShowKweeve(false);
  };

  return (
    <>
      <Header />
      <PageWrapper center>
        <h1>sponsors</h1>
        <section className={`${styles.section} flex-center column`}>
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

          <div className="pageButtons column">
            <Button onClick={() => setShowKweeve(true)}>
              Show your support
            </Button>
            <ButtonLink href="/search" variant="text">
              Back to Directory
            </ButtonLink>
          </div>
        </section>

        <DialogOverlay
          className={styles.dialogOverlay}
          isOpen={showKweeve}
          onDismiss={closeModal}
        >
          <DialogContent
            className={styles.dialogContent}
            aria-label="Kweeve donation form"
          >
            <iframe
              src="https://kweeve.page/soplugged/embed"
              style={{ border: "none" }}
              width="100%"
              height="700px"
              allow="payment"
            ></iframe>
          </DialogContent>
        </DialogOverlay>
      </PageWrapper>
      <Footer />
    </>
  );
};

export default SponsorsPage;
