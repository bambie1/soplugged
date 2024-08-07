import { faMapMarkerAlt, faShapes } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import dynamic from "next/dynamic";
import { FC } from "react";

import MoreLikeThis from "@/components/MoreLikeThis";
import Avatar from "@/src/components/Avatar";
import SocialLinks from "@/src/components/SocialLinks";
import { ButtonLink } from "@/styled/ButtonLink";
import { IBusiness } from "@/types/Business";
import { getCategorySlug, getLocationSlug } from "@/utils/index";

const Header = dynamic(() => import("../../components/Header/Header"));
const Footer = dynamic(() => import("../../components/Footer"));

const ReactImageGallery = dynamic(() => import("react-image-gallery"), {
  loading: () => <div className="aspect-video w-full rounded-lg bg-gray-200" />,
});

interface Props {
  business: IBusiness;
}

export const NoPreviewAvailable = () => (
  <div className="relative flex h-60 w-full items-center justify-center overflow-hidden bg-secondary/20 lg:mb-10 lg:h-80 lg:rounded-lg">
    <span className="whitespace-nowrap font-light tracking-wider text-primary/70 lg:text-lg">
      No preview available.
    </span>

    <div className="absolute -left-10 -top-5 aspect-square w-36 rounded-full border border-primary/10"></div>
    <div className="absolute -bottom-5 -right-10 aspect-square w-36 rounded-full border border-primary/10"></div>
  </div>
);

const BusinessPage: FC<Props> = ({ business }) => {
  const {
    business_name,
    business_location,
    logo_url,
    sample_images,
    category,
    business_description,
    fixed_to_one_location,
    ig_handle,
    phone_number,
    website_url,
  } = business;

  const cleanDescription = business_description.replace(/\\n/g, "<br>");

  const rawImages = sample_images?.split(",") || [];
  const images = rawImages.map((item) => {
    const arr = item.split("/upload/");
    const newImage = arr[1] ? `${arr[0]}/upload/w_1200/${arr[1]}` : item;

    return {
      original: newImage,
      thumbnail: newImage,
    };
  });
  const hasPreview = images.length !== 0 && images[0]?.original?.length !== 0;
  const hasContactLinks = ig_handle || phone_number || website_url;

  return (
    <>
      <Header whiteBg />
      <main className="min-h-[90vh] lg:mb-20">
        <div className="mb-14 pt-6 lg:mx-auto lg:w-full lg:max-w-7xl lg:px-8 lg:pt-14">
          <section className="px-4 sm:px-6 lg:px-0">
            <div className="flex flex-wrap justify-center gap-4">
              <Avatar name={business_name} url={logo_url} />
              <h1 className="text-center text-4xl font-semibold lg:text-5xl">
                {business_name.toUpperCase()}
              </h1>
            </div>

            <div className="flex justify-center gap-4">
              {category && (
                <ButtonLink
                  variant="text"
                  href={`/directory/c/${getCategorySlug(category)}`}
                >
                  <FontAwesomeIcon icon={faShapes} className="mr-2" />
                  {category}
                </ButtonLink>
              )}

              {business_location && (
                <ButtonLink
                  variant="text"
                  href={`/directory/l/${getLocationSlug(business_location)}`}
                >
                  <FontAwesomeIcon icon={faMapMarkerAlt} className="mr-2" />
                  {business_location}
                </ButtonLink>
              )}

              {!fixed_to_one_location && !business_location && (
                <button className="button noPointer">CANADA-WIDE</button>
              )}
            </div>
          </section>

          <section className="mx-auto mt-10 max-w-3xl">
            <div className="flex w-full flex-col items-center gap-8 lg:gap-0">
              {hasPreview ? (
                <ReactImageGallery
                  items={images}
                  showPlayButton={false}
                  showFullscreenButton={false}
                />
              ) : (
                <NoPreviewAvailable />
              )}

              {business_description && (
                <div className="w-full max-w-3xl px-4 sm:px-6 lg:px-0">
                  <h3 className="mb-2 text-lg font-semibold uppercase text-gray-800 lg:text-xl">
                    About
                  </h3>
                  <section
                    dangerouslySetInnerHTML={{
                      __html: cleanDescription,
                    }}
                    className="prose max-w-none whitespace-pre-wrap text-gray-500 prose-p:my-0 prose-strong:text-current"
                  />
                </div>
              )}
            </div>
            <div className="mt-10">
              {hasContactLinks && <SocialLinks business={business} />}
            </div>
          </section>
        </div>

        <MoreLikeThis
          category={category}
          excludeBusiness={business_name}
          location={business_location}
        />
      </main>
      <Footer />
    </>
  );
};

export default BusinessPage;
