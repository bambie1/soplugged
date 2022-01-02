import dynamic from "next/dynamic";
import Link from "next/link";
import { FC } from "react";
import { useWindowSize } from "@reach/window-size";
import ReactImageGallery from "react-image-gallery";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faInfoCircle,
  faMapMarkerAlt,
  faPen,
  faShapes,
} from "@fortawesome/free-solid-svg-icons";

import { Button } from "@/styled/Button";
import { ButtonLink } from "@/styled/ButtonLink";
import { useAlgoliaSearch } from "@/context/algoliaSearchContext";
import { PageWrapper } from "@/components/PageWrapper";
import { Footer } from "@/components/Footer";
import Avatar from "@/components/Avatar/Avatar";
import { IBusiness } from "@/types/Business";
import { useAuth } from "@/context/authContext";

import styles from "./BusinessPage.module.scss";
import { useRouter } from "next/router";

const Header = dynamic(() => import("../../components/Header/Header"));
const FavoriteButton = dynamic(
  () => import("../../components/FavoriteButton/FavoriteButton")
);
const ContactForm = dynamic(
  () => import("../../components/ContactForm/ContactForm")
);
const ShareButton = dynamic(
  () => import("../../components/ShareButton/ShareButton")
);

interface Props {
  business: IBusiness;
}

const BusinessPage: FC<Props> = ({ business }) => {
  const { width } = useWindowSize();
  const { user } = useAuth();
  const { setCategory, setLocation } = useAlgoliaSearch();
  const router = useRouter();
  const {
    business_name,
    business_location,
    logo_url,
    sample_images,
    category,
    business_description,
    fixed_to_one_location,
    verified,
    creator,
  } = business;

  const rawImages = sample_images?.split(",") || [];
  const images = rawImages.map((item: any) => ({
    original: item,
    thumbnail: item,
  }));
  const hasPreview = images.length !== 0 && images[0]?.original?.length !== 0;
  const fullView = hasPreview && verified && width > 960;

  const handleCategoryClick = () => {
    setCategory(category);
    router.push("/search");
  };

  const handleLocationClick = () => {
    setLocation(business_location);
    router.push("/search");
  };

  const renderFullView = () => (
    <section className={styles.fullView}>
      <div className={styles.infoBlock}>
        <ReactImageGallery items={images} showPlayButton={false} />

        <div>
          <h3>About</h3>
          <section
            dangerouslySetInnerHTML={{ __html: business_description }}
          ></section>
        </div>
      </div>
      <aside className={styles.stickyWrapper}>
        <div className={styles.pageActions}>
          <div className={styles.contactForm}>
            <ContactForm businessEmail={creator?.email || ""} />
          </div>
          <div className={styles.buttonGroup}>
            <FavoriteButton business={business} />
            <ShareButton />
          </div>
        </div>
      </aside>
    </section>
  );

  const renderStackedView = () => (
    <>
      <div className={styles.stackedView}>
        {hasPreview && (
          <ReactImageGallery items={images} showPlayButton={false} />
        )}
        {business_description && (
          <div>
            <h3>About</h3>
            <section
              className={styles.description}
              dangerouslySetInnerHTML={{ __html: business_description }}
            ></section>
          </div>
        )}
        {verified && (
          <>
            <div className={styles.buttonGroup}>
              <FavoriteButton business={business} />
              <ShareButton />
            </div>
            <div className={styles.contactForm}>
              <ContactForm businessEmail={creator?.email || ""} />
            </div>
          </>
        )}
      </div>
    </>
  );

  return (
    <>
      <Header color="transparent" />
      <PageWrapper>
        <section className="center">
          <div className={styles.businessHeader}>
            <Avatar name={business_name} url={logo_url} />
            <h1 className={styles.businessName}>
              {business_name.toUpperCase()}
            </h1>
          </div>
          {!verified && (
            <div className={`flex-center ${styles.unverified}`}>
              <FontAwesomeIcon icon={faInfoCircle} />
              This business hasn't been claimed by it's owner
            </div>
          )}

          <div className={styles.info}>
            {category && (
              <button
                className="button text withIcon"
                onClick={handleCategoryClick}
              >
                <FontAwesomeIcon icon={faShapes} />
                {category}
              </button>
            )}

            {business_location && (
              <button
                className="button text withIcon"
                onClick={handleLocationClick}
              >
                <FontAwesomeIcon icon={faMapMarkerAlt} />
                {business_location}
              </button>
            )}

            {!fixed_to_one_location && (
              <button className="button">CANADA-WIDE</button>
            )}
          </div>
        </section>

        {fullView ? renderFullView() : renderStackedView()}

        {!verified && (
          <div className={styles.claimBusiness}>
            <p>Are you the owner of this business?</p>
            <a href="mailto:hello@soplugged.com">
              <Button>Let us know</Button>
            </a>
          </div>
        )}
        <div className={`flex-center ${styles.backToSearch}`}>
          <ButtonLink href="/search" variant="outlined">
            Back to search
          </ButtonLink>
        </div>

        {user?.email === creator?.email && (
          <Link href="/my-business">
            <a>
              <button className={`iconButton ${styles.editButton}`}>
                <FontAwesomeIcon icon={faPen} />
              </button>
            </a>
          </Link>
        )}
      </PageWrapper>
      <Footer />
    </>
  );
};

export default BusinessPage;
