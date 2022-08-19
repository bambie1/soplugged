import dynamic from "next/dynamic";
import Link from "next/link";
import { useRouter } from "next/router";
import { FC } from "react";
import { useWindowSize } from "@reach/window-size";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faInfoCircle,
  faMapMarkerAlt,
  faPen,
  faShapes,
} from "@fortawesome/free-solid-svg-icons";

import { Button } from "@/styled/Button";
import { SocialLinks } from "@/components/SocialLinks";
import { Footer } from "@/components/Footer";
import Avatar from "@/components/Avatar/Avatar";
import { IBusiness } from "@/types/Business";
import { useAuth } from "@/context/authContext";

import styles from "./BusinessPage.module.scss";
import { createURL } from "@/utils/algolia";
import { IconButton } from "@/styled/IconButton";

const Header = dynamic(() => import("../../components/Header"));
const FavoriteButton = dynamic(
  () => import("../../components/FavoriteButton/FavoriteButton")
);
const ContactForm = dynamic(
  () => import("../../components/ContactForm/ContactForm")
);
const ShareButton = dynamic(
  () => import("../../components/ShareButton/ShareButton")
);
const ReactImageGallery = dynamic(() => import("react-image-gallery"), {
  loading: () => <div className="aspect-video w-full rounded-lg bg-gray-200" />,
});

interface Props {
  business: IBusiness;
}

const BusinessPage: FC<Props> = ({ business }) => {
  const { width } = useWindowSize();
  const { user } = useAuth();
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
    ig_handle,
    phone_number,
    business_url,
  } = business;

  const rawImages = sample_images?.split(",") || [];
  const images = rawImages.map((item: any) => {
    const arr = item.split("/upload/");
    const newImage = arr[1] ? `${arr[0]}/upload/w_1200/${arr[1]}` : item;

    return {
      original: newImage,
      thumbnail: newImage,
    };
  });
  const hasPreview = images.length !== 0 && images[0]?.original?.length !== 0;
  const fullView = hasPreview && verified && width > 960;
  const hasContactLinks = ig_handle || phone_number || business_url;

  const handleCategoryClick = () => {
    router.push(
      `/search${createURL({
        menu: {
          category: [category],
        },
      })}`
    );
  };

  const handleLocationClick = () => {
    router.push(
      `/search${createURL({
        menu: {
          business_location: [business_location],
        },
      })}`
    );
  };

  const renderFullView = () => (
    <section className={styles.fullView}>
      <div className={styles.infoBlock}>
        <ReactImageGallery items={images} showPlayButton={false} />

        <div>
          <h3 className="mb-2 text-lg font-bold uppercase text-gray-800 lg:text-xl">
            About
          </h3>
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
          {hasContactLinks && <SocialLinks business={business} />}
          <div className="grid gap-2">
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
            <h3 className="mb-2 text-lg font-bold uppercase text-gray-800 lg:text-xl">
              About
            </h3>
            <section
              className={styles.description}
              dangerouslySetInnerHTML={{ __html: business_description }}
            ></section>
          </div>
        )}
        <SocialLinks business={business} />
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
      <Header hideSearch />
      <main className="my-container mb-20 pt-28">
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
              <IconButton isText onClick={handleCategoryClick}>
                <FontAwesomeIcon icon={faShapes} />
                {category}
              </IconButton>
            )}

            {business_location && (
              <IconButton isText onClick={handleLocationClick}>
                <FontAwesomeIcon icon={faMapMarkerAlt} />
                {business_location}
              </IconButton>
            )}

            {!fixed_to_one_location && !business_location && (
              <button className="button noPointer">CANADA-WIDE</button>
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

        {user?.email === creator?.email && (
          <Link href="/my-business?start=0">
            <a>
              <button className={`iconButton ${styles.editButton}`}>
                <FontAwesomeIcon icon={faPen} />
              </button>
            </a>
          </Link>
        )}
      </main>
      <Footer />
    </>
  );
};

export default BusinessPage;
