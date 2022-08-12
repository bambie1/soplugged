import { useState } from "react";
import dynamic from "next/dynamic";
import { DialogOverlay, DialogContent } from "@reach/dialog";

import { PageWrapper } from "@/components/PageWrapper";
import { ButtonLink } from "@/styled/ButtonLink";
import { Button } from "@/styled/Button";

import styles from "./SponsorsPage.module.scss";
import Link from "next/link";

const Header = dynamic(() => import("../../components/Header"));
const Footer = dynamic(() => import("../../components/Footer/Footer"));

const SponsorsPage = () => {
  const [showKweeve, setShowKweeve] = useState(false);

  const closeModal = () => {
    setShowKweeve(false);
  };

  return (
    <>
      <Header />
      <main className="my-container mb-16 min-h-[70vh] pt-24">
        <h1 className="relative block text-center text-5xl font-bold">
          Sponsors
        </h1>
        <section className="mt-10 grid items-center gap-10 lg:grid-cols-2">
          <div>
            <p className="mb-4 lg:text-lg">
              At SoPlugged, our biggest inspiration is supporting one another
              and growing our community. Our goal is to normalize buying black
              and we rely on amazing people like you to keep our platform free
              and accessible to Black-owned businesses across Canada.
            </p>
            <p>
              <em>
                All donations go towards maintaining our platform and supporting
                Black-owned businesses across Canada.
              </em>
            </p>

            <div className="mt-4">
              <Link href="/search">
                <a>Search for businesses</a>
              </Link>
            </div>
          </div>

          <div className="h-[30rem] overflow-auto bg-gray-400">
            <iframe
              src="https://kweeve.page/soplugged/embed"
              style={{ border: "none" }}
              width="100%"
              height="700px"
              allow="payment"
            ></iframe>
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
      </main>
      <Footer />
    </>
  );
};

export default SponsorsPage;
