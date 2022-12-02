import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faInstagram } from "@fortawesome/free-brands-svg-icons";
import {
  faGlobe,
  faMapMarkerAlt,
  faPhone,
  faShapes,
} from "@fortawesome/free-solid-svg-icons";
import ReactImageGallery from "react-image-gallery";

import { useBusinessStore } from "@/scenes/MyBusinessPage/MyBusinessPage";
import { BusinessForm } from "layouts/BusinessForm";
import { Button } from "@/styled/Button";
import { Avatar } from "../Avatar";
import { NoPreviewAvailable } from "@/scenes/BusinessPage/BusinessPage";

const Review = () => {
  const { handleNextStep, business, updateBusiness } = useBusinessStore();

  const {
    business_description,
    business_name,
    business_url,
    category,
    ig_handle,
    phone_number,
    business_location,
    logo_url,
    sample_images,
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

  return (
    <BusinessForm isWide>
      <div className="grid gap-5 rounded-md bg-secondary/5 px-4 py-7 text-gray-700">
        <section className="px-4 sm:px-6 lg:px-0">
          <div className="flex flex-wrap justify-center gap-4">
            <Avatar name={business_name} url={logo_url} />
            <h1 className="text-center text-4xl font-bold lg:text-5xl">
              {business_name.toUpperCase()}
            </h1>
          </div>

          <div className="">
            {category && (
              <Button variant="text">
                <FontAwesomeIcon icon={faShapes} className="mr-2" />
                {category}
              </Button>
            )}

            {business_location && (
              <Button variant="text">
                <FontAwesomeIcon icon={faMapMarkerAlt} className="mr-2" />
                {business_location}
              </Button>
            )}
          </div>
        </section>

        <div className="flex w-full flex-col items-center gap-8 lg:gap-0">
          {hasPreview ? (
            <ReactImageGallery items={images} showPlayButton={false} />
          ) : (
            <NoPreviewAvailable />
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

        <div className="flex flex-wrap gap-5">
          {ig_handle && (
            <p className="flex items-center gap-1 text-sm lg:text-base">
              <FontAwesomeIcon className="text-gray-500" icon={faInstagram} />
              {ig_handle}
            </p>
          )}
          {phone_number && (
            <p className="flex items-center gap-1 text-sm lg:text-base">
              <FontAwesomeIcon className="text-gray-500" icon={faPhone} />
              {phone_number}
            </p>
          )}
          {business_url && (
            <p className="flex items-center gap-1 text-sm lg:text-base">
              <FontAwesomeIcon className="text-gray-500" icon={faGlobe} />
              {business_url}
            </p>
          )}
        </div>
      </div>
    </BusinessForm>
  );
};

export default Review;
