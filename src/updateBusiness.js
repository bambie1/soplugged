import { getImageUrl } from "./uploadImage";
import slugify from "slugify";

const updateBusiness = async (
  fetchUrl,
  fetchMethod,
  businessObject,
  userToken
) => {
  try {
    const res = await fetch(fetchUrl, {
      method: fetchMethod,
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
        "Firebase-Token": userToken,
      },
      body: JSON.stringify({
        business: businessObject,
      }),
    });

    if (!res.ok) {
      throw new Error("HTTP status " + res.status);
    }
    return businessObject.slug;
  } catch (error) {
    return { error };
  }
};

export const submitBusinessObject = async (
  data,
  files,
  userToken,
  business
) => {
  const { logo } = data;
  let logoUrl = "";
  let images = [];
  if (logo[0]) logoUrl = await getImageUrl(logo[0]);
  for (let i = 0; i < files.length; i++) {
    files[i] &&
      images.push(
        typeof files[i] === "string" ? files[i] : await getImageUrl(files[i])
      );
  }

  if (!logoUrl) logoUrl = business?.logo_url;

  const businessObject = {
    phone_number: data.ownerPhone,
    business_name: data.businessName.trim(),
    slug: slugify(data.businessName.trim(), { lower: true }),
    business_url: data.businessUrl.trim(),
    business_location: data.businessLocation,
    logo_url: logoUrl || "",
    sample_images: images.join(),
    street_address: data.streetAddress,
    fixed_to_one_location: !data.canadaWide,
    category: data.businessCategory,
    tags: data.businessTags || "",
    business_description: data.businessDescription.trim(),
    ig_handle: data.igHandle,
  };

  const fetchUrl = business
    ? `${process.env.NEXT_PUBLIC_SERVER_BASE_URL}/business?slug=${business.slug}`
    : `${process.env.NEXT_PUBLIC_SERVER_BASE_URL}/businesses`;
  const fetchMethod = business ? "PATCH" : "POST";

  return updateBusiness(fetchUrl, fetchMethod, businessObject, userToken); //create or update
};
