import dynamic from "next/dynamic";
import { useRouter } from "next/router";
import { FC } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMapMarkerAlt, faShapes } from "@fortawesome/free-solid-svg-icons";
import { ExclamationCircleIcon } from "@heroicons/react/solid";

import { Button } from "@/styled/Button";
import SocialLinks from "@/components/SocialLinks";
import Avatar from "@/components/Avatar/Avatar";
import { IBusiness } from "@/types/Business";

import styles from "./BusinessPage.module.scss";
import { createURL } from "@/utils/algolia";

const Header = dynamic(() => import("../../components/Header/Header"));
const Footer = dynamic(() => import("../../components/Footer/Footer"));

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

  const cleanDescription = business_description.replace(/style="[^"]*"/g, "");

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
  const hasContactLinks = ig_handle || phone_number || business_url;

  const renderBlankPreview = () => (
    <div className="relative flex h-60 w-full items-center justify-center overflow-hidden bg-secondary/20 lg:mb-10 lg:h-80 lg:rounded-lg">
      <span className="whitespace-nowrap font-light tracking-wider text-primary/70 lg:text-lg">
        No preview available.
      </span>

      <div className="absolute -left-10 -top-5 aspect-square w-36 rounded-full border border-primary/10"></div>
      <div className="absolute -right-10 -bottom-5 aspect-square w-36 rounded-full border border-primary/10"></div>
    </div>
  );

  const handleCategoryClick = () => {
    router.push(
      `${createURL({
        menu: {
          category,
        },
      })}`
    );
  };

  const handleLocationClick = () => {
    router.push(
      `${createURL({
        menu: {
          business_location,
        },
      })}`
    );
  };

  const renderFullView = () => (
    <section className={styles.fullView}>
      <div className="flex w-full flex-col items-center gap-8 lg:gap-0">
        {hasPreview ? (
          <ReactImageGallery items={images} showPlayButton={false} />
        ) : (
          renderBlankPreview()
        )}

        {business_description && (
          <div className="w-full max-w-3xl px-4 sm:px-6 lg:px-0">
            <h3 className="mb-2 text-lg font-bold uppercase text-gray-800 lg:text-xl">
              About
            </h3>
            <section
              dangerouslySetInnerHTML={{
                __html: cleanDescription,
              }}
              className="prose max-w-none text-gray-500"
            ></section>
          </div>
        )}
      </div>
      <aside className={styles.stickyWrapper}>
        <div className={styles.pageActions}>
          {hasContactLinks && <SocialLinks business={business} />}
          <div className={styles.contactForm}>
            <ContactForm
              businessEmail={creator?.email || ""}
              businessName={business_name}
              phoneNumber={phone_number}
            />
          </div>
          <div className="grid gap-2 overflow-hidden">
            <ShareButton />
          </div>
        </div>
      </aside>
    </section>
  );

  return (
    <>
      <Header />
      <main className="mb-20 min-h-[90vh] pt-6 lg:mx-auto lg:w-full lg:max-w-7xl lg:px-8 lg:pt-14">
        <section className="px-4 sm:px-6 lg:px-0">
          <div className="flex flex-wrap justify-center gap-4">
            <Avatar name={business_name} url={logo_url} />
            <h1 className="text-center text-4xl font-bold lg:text-5xl">
              {business_name.toUpperCase()}
            </h1>
          </div>

          <div className={styles.info}>
            {category && (
              <Button variant="text" onClick={handleCategoryClick}>
                <FontAwesomeIcon icon={faShapes} className="mr-2" />
                {category}
              </Button>
            )}

            {business_location && (
              <Button variant="text" onClick={handleLocationClick}>
                <FontAwesomeIcon icon={faMapMarkerAlt} className="mr-2" />
                {business_location}
              </Button>
            )}

            {!fixed_to_one_location && !business_location && (
              <button className="button noPointer">CANADA-WIDE</button>
            )}
          </div>
        </section>

        {!verified && (
          <div className={styles.claimBusiness}>
            <div className={`mb-2 text-center ${styles.unverified}`}>
              This business hasn't been claimed by it's owner
            </div>

            <a href="mailto:hello@soplugged.com">
              <Button variant="outlined">
                <div className="flex items-center gap-2">
                  <ExclamationCircleIcon
                    className="h-8 w-8"
                    strokeWidth={0.75}
                  />
                  I own this business
                </div>
              </Button>
            </a>
          </div>
        )}

        <div className="">{renderFullView()}</div>
      </main>
      <Footer />
    </>
  );
};

export default BusinessPage;
