import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faInstagram } from "@fortawesome/free-brands-svg-icons";
import { faGlobe, faPhone } from "@fortawesome/free-solid-svg-icons";

import styles from "./SocialLinks.module.scss";

const SocialLinks = ({ business }: any) => {
  const { ig_handle, phone_number, business_url } = business;

  return (
    <div className={styles.wrapper}>
      {ig_handle && (
        <button
          title="Instagram page"
          className={`${styles.icons} iconButton`}
          aria-label="Instagram icon"
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
        >
          <a aria-label="call business" href={`tel:${phone_number}`}>
            <FontAwesomeIcon icon={faPhone} />
          </a>
        </button>
      )}

      {business_url && (
        <button
          title="Website"
          className={`${styles.icons} iconButton`}
          aria-label="Website icon"
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
