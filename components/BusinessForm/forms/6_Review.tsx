import { useFormikContext } from "formik";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faInstagram } from "@fortawesome/free-brands-svg-icons";
import {
  faGlobe,
  faMapMarkerAlt,
  faPhone,
  faShapes,
} from "@fortawesome/free-solid-svg-icons";

const Review = () => {
  const {
    values: {
      business_description,
      business_name,
      business_url,
      category,
      ig_handle,
      phone_number,
      business_location,
      logo_url,
      sample_images,
    },
    isSubmitting,
  } = useFormikContext<any>();

  return (
    <div className="grid gap-5 rounded-md bg-gray-100 p-4 text-gray-700">
      <div className="flex items-center gap-3">
        {logo_url && (
          <img
            src={logo_url}
            alt="business logo"
            className="h-10 w-10 rounded-full"
          />
        )}
        <p className="text-2xl uppercase text-primary lg:text-3xl">
          {business_name}
        </p>
      </div>

      <div className="flex flex-wrap gap-4">
        {category && (
          <div>
            <FontAwesomeIcon icon={faShapes} className="mr-2" />
            {category}
          </div>
        )}

        {business_location && (
          <div>
            <FontAwesomeIcon icon={faMapMarkerAlt} className="mr-2" />
            {business_location}
          </div>
        )}
      </div>

      {sample_images && (
        <div className="grid max-w-sm grid-cols-3 items-center gap-3">
          {sample_images.split(",").map((image: string) => (
            <img
              src={image}
              key={image}
              alt=""
              className="max-h-36 w-full rounded-lg object-cover"
            />
          ))}
        </div>
      )}

      <div className="mt-4 gap-3">
        <span className="font-medium uppercase text-gray-700 underline">
          Description:
        </span>
        <div
          dangerouslySetInnerHTML={{ __html: business_description }}
          className="text-sm text-gray-500 lg:mt-2 lg:max-h-[20rem] lg:overflow-y-auto lg:rounded-lg lg:border lg:border-gray-300 lg:p-3 lg:text-base"
        ></div>
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
  );
};

export default Review;
