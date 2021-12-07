import { FC } from "react";

import { ButtonLink } from "@/styled/ButtonLink";

import styles from "./Footer.module.scss";
import SubscribeForm from "../SubscribeForm/SubscribeForm";

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
        <SubscribeForm />
        <section className={styles.linksGrid}>
          <aside className={styles.externalLinks}>
            <a href="mailto:hello@soplugged.com" className="button text">
              hello@soplugged.com
            </a>

            <section className={styles.socials}>
              <a
                aria-label="linkedin"
                href="https://www.linkedin.com/company/soplugged/"
                target="_blank"
                rel="noreferrer"
                className="button text"
              >
                LinkedIn
              </a>
              <a
                aria-label="instagram"
                href="https://www.instagram.com/sopluggd/"
                target="_blank"
                rel="noreferrer"
                className="button text"
              >
                IG
              </a>
            </section>

            <a
              href="https://soplugged.kampsite.co/"
              target="_blank"
              rel="noreferrer"
              className="button outlined"
            >
              Make a feature request
            </a>
          </aside>
          <aside className={styles.internalLinks}>
            <ButtonLink href="/faqs">FAQs</ButtonLink>
            <ButtonLink href="/blog">Blog</ButtonLink>
            <ButtonLink href="/our-story">About Us</ButtonLink>
            <ButtonLink href="/sponsors">Sponsors</ButtonLink>
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
            <a
              href="https://docs.google.com/document/d/1l5OVYw8_WuVmhQDXkXdB7zBRYiLVhJ-lrGERdMQXlcc/edit?usp=sharing"
              target="_blank"
              rel="noreferrer"
              className="button text"
            >
              Community Guidelines
            </a>
          </section>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
