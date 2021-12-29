import { useRouter } from "next/router";
import { useFormikContext } from "formik";

import { Input } from "@/styled/Input";
import TextArea from "@/styled/TextArea/TextArea";

const Review = () => {
  const router = useRouter();
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
  } = useFormikContext<any>();

  if (
    !(business_location && business_name && business_description && category)
  ) {
    router.push("/my-business?step=name_location");
  }

  return (
    <>
      <Input noHelper value={business_name} label="Business Name" disabled />
      <Input
        noHelper
        value={business_location}
        label="Business Location"
        disabled
      />

      {sample_images && (
        <p>{sample_images.split(",").length} image(s) uploaded</p>
      )}

      <Input noHelper value={category} label="Category" disabled />
      {ig_handle && (
        <Input noHelper value={ig_handle} label="IG Handle" disabled />
      )}
      {phone_number && (
        <Input noHelper value={phone_number} label="Phone Number" disabled />
      )}

      <TextArea
        value={business_description.replace(/<[^>]*>?/gm, "")}
        label="Description"
        noScroll
        disabled
      />
    </>
  );
};

export default Review;
