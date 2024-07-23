import { faInstagram } from "@fortawesome/free-brands-svg-icons";
import { faGlobe } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import { IBusiness } from "@/types/Business";

const SocialLinks = ({ business }: { business: IBusiness }) => {
  const { ig_handle, website_url } = business;

  const showWebsite =
    website_url &&
    website_url !== "https://undefined" &&
    website_url !== "https://";

  return (
    <div className="flex w-full flex-wrap items-center gap-4 px-4 sm:px-6 lg:px-0">
      {showWebsite && (
        <a
          aria-label="website url"
          href={website_url}
          target="_blank"
          rel="noreferrer"
          className="button outlined flex flex-1 items-center gap-2"
        >
          <FontAwesomeIcon icon={faGlobe} />
          <span className="">Visit website</span>
        </a>
      )}

      {ig_handle && (
        <a
          aria-label="instagram page"
          href={`https://www.instagram.com/${ig_handle}/`}
          target="_blank"
          rel="noreferrer"
          className={`button ${
            showWebsite ? "text" : "outlined flex-1"
          } flex items-center gap-2 `}
        >
          <FontAwesomeIcon icon={faInstagram} />
          <span className="">Instagram page</span>
        </a>
      )}
    </div>
  );
};

export default SocialLinks;
