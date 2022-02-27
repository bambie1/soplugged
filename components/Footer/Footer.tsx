import { FC } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { faInstagram } from "@fortawesome/free-brands-svg-icons";

import { ButtonLink } from "@/styled/ButtonLink";
import SubscribeForm from "../SubscribeForm/SubscribeForm";

import styles from "./Footer.module.scss";

interface Props {
  tertiary?: boolean;
}

const Footer: FC<Props> = ({ tertiary }) => {
  return (
    <footer className={`${styles.footer} ${tertiary && styles.blue}`}>
      <div className={styles.shape_divider_container}>
        <svg
          data-name="Layer 1"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1200 120"
          preserveAspectRatio="none"
        >
          <path
            d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z"
            className={styles.shape_fill}
          ></path>
        </svg>
      </div>

      <div className={`container ${styles.container}`}>
        {!tertiary && <SubscribeForm />}
        <section className={styles.linksGrid}>
          <aside className={styles.externalLinks}>
            <p>Contact us:</p>

            <section className={styles.socials}>
              <button className="iconButton" aria-label="Email icon">
                <a href="mailto:hello@soplugged.com" aria-label="email contact">
                  <FontAwesomeIcon icon={faEnvelope} />
                </a>
              </button>
              <button className="iconButton" aria-label="Instagram icon">
                <a
                  aria-label="instagram"
                  href="https://www.instagram.com/sopluggd/"
                  target="_blank"
                  rel="noreferrer"
                >
                  <FontAwesomeIcon icon={faInstagram} />
                </a>
              </button>
            </section>

            <ButtonLink href="/sponsors" variant="outlined">
              Become a sponsor
            </ButtonLink>
          </aside>
          <aside className={styles.internalLinks}>
            <ButtonLink href="/faqs">FAQs</ButtonLink>
            <ButtonLink href="/our-story">About Us</ButtonLink>
            <a
              href="https://soplugged.kampsite.co/"
              target="_blank"
              rel="noreferrer"
              className="button "
            >
              Make a feature request
            </a>
          </aside>
        </section>

        <div>
          <p className="marginless">
            Copyright&copy; {new Date().getFullYear()}, SoPlugged
          </p>
          <section className={styles.guidelines}>
            <a
              href="https://docs.google.com/document/d/1lq7Be0U3GTswo3kCZ2tHvZ20J_eJbqhQX3XiKAjih20/edit?usp=sharing"
              target="_blank"
              rel="noreferrer"
              className="button text"
            >
              Privacy Policy
            </a>

            <ButtonLink href="/guidelines">Community Guidelines</ButtonLink>
          </section>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
