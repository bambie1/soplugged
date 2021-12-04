import dynamic from "next/dynamic";
import { FC } from "react";
import { useWindowSize } from "@reach/window-size";
import ReactImageGallery from "react-image-gallery";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faInfoCircle,
  faMapMarkerAlt,
  faShapes,
} from "@fortawesome/free-solid-svg-icons";

import { Button } from "@/styled/Button";
import { PageWrapper } from "@/components/PageWrapper";
import { SEO } from "@/components/SEO";

import styles from "./BusinessPage.module.scss";
import { Footer } from "@/components/Footer";
import Avatar from "@/components/Avatar/Avatar";
import { ButtonLink } from "@/styled/ButtonLink";
import { IBusiness } from "@/types/Business";
import { ShareButton } from "@/components/ShareButton";

const Header = dynamic(() => import("../../components/Header/Header"));
const FavoriteButton = dynamic(
  () => import("../../components/FavoriteButton/FavoriteButton")
);
const ContactForm = dynamic(
  () => import("../../components/ContactForm/ContactForm")
);

interface Props {
  business: IBusiness;
}

const BusinessPage: FC<Props> = ({ business }) => {
  const { width } = useWindowSize();
  const {
    id,
    business_name,
    business_location,
    logo_url,
    sample_images,
    category,
    business_description,
    fixed_to_one_location,
    verified,
  } = business;

  const rawImages = sample_images?.split(",") || [];
  const images = rawImages.map((item: any) => ({
    original: item,
    thumbnail: item,
  }));
  const hasPreview = images.length !== 0 && images[0]?.original?.length !== 0;
  const fullView = hasPreview && verified && width > 960;

  const renderFullView = () => (
    <section className={styles.fullView}>
      <aside className={styles.infoBlock}>
        <ReactImageGallery items={images} showPlayButton={false} />

        <div>
          <h3>About</h3>
          <section
            dangerouslySetInnerHTML={{ __html: business_description }}
          ></section>
        </div>
      </aside>
      <aside className={styles.stickyWrapper}>
        <div className={styles.pageActions}>
          <div className={styles.contactForm}>
            <h3 className="center">Contact</h3>
            <ContactForm />
          </div>
          <div className={styles.buttonGroup}>
            <FavoriteButton businessId={id} />
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
              <FavoriteButton businessId={id} />
              <ShareButton />
            </div>
            <div className={styles.contactForm}>
              <h3>Contact</h3>
              <ContactForm />
            </div>
          </>
        )}
      </div>
    </>
  );

  return (
    <>
      <SEO
        description={`SoPlugged page for ${business_name || "a business"}`}
        title={`${business_name.toUpperCase() || ""} | SoPlugged`}
      />
      <Header color="transparent" />
      <PageWrapper center={!fullView}>
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
              <button className={`button text ${styles.iconText}`}>
                <FontAwesomeIcon icon={faShapes} />
                {category}
              </button>
            )}

            <button className={`button text ${styles.iconText}`}>
              <FontAwesomeIcon icon={faMapMarkerAlt} />
              {business_location}
            </button>
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
      </PageWrapper>
      <Footer />
    </>
  );
};

export default BusinessPage;
