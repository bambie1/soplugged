import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faInstagram } from "@fortawesome/free-brands-svg-icons";
import { faGlobe, faPhone } from "@fortawesome/free-solid-svg-icons";
import { usePlausible } from "next-plausible";

import styles from "./SocialLinks.module.scss";

import { MyEvents } from "@/types/Plausible";

const SocialLinks = ({ business }: any) => {
  const { ig_handle, phone_number, business_url } = business;
  const plausible = usePlausible<MyEvents>();

  return (
    <div className={styles.wrapper}>
      {ig_handle && (
        <button
          title="Instagram page"
          className={`${styles.icons} iconButton`}
          aria-label="Instagram icon"
          onClick={() =>
            plausible("Impression on business page", {
              props: {
                Type: "Instagram",
                Business: business.business_name,
              },
            })
          }
        >
          <a
            aria-label="instagram page"
            href={`https://www.instagram.com/${ig_handle}/`}
            target="_blank"
            rel="noreferrer"
          >
            <FontAwesomeIcon icon={faInstagram} />
          </a>
        </button>
      )}

      {phone_number && (
        <button
          title="Phone number"
          className={`${styles.icons} iconButton`}
          aria-label="Phone icon"
          onClick={() =>
            plausible("Impression on business page", {
              props: {
                Type: "Phone",
                Business: business.business_name,
              },
            })
          }
        >
          <a aria-label="call business" href={`tel:${phone_number}`}>
            <FontAwesomeIcon icon={faPhone} />
          </a>
        </button>
      )}

      {business_url &&
        business_url !== "https://undefined" &&
        business_url !== "https://" && (
          <button
            title="Website"
            className={`${styles.icons} iconButton`}
            aria-label="Website icon"
            onClick={() =>
              plausible("Impression on business page", {
                props: {
                  Type: "Website",
                  Business: business.business_name,
                },
              })
            }
          >
            <a
              aria-label="website url"
              href={business_url}
              target="_blank"
              rel="noreferrer"
            >
              <FontAwesomeIcon icon={faGlobe} />
            </a>
          </button>
        )}
    </div>
  );
};

export default SocialLinks;
