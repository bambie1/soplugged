import slugify from "slugify";
import * as Sentry from "@sentry/node";

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
    Sentry.captureException(error);
    return { error };
  }
};

export const submitBusinessObject = async (data, userToken, business) => {
  const businessObject = {
    phone_number: data.phoneNumber,
    business_name: data.businessName.trim(),
    slug: slugify(data.businessName.trim(), {
      lower: true,
      remove: /[*+~.()'"!:@]/g,
    }),
    business_url: data.businessUrl.trim(),
    business_location: data.businessLocation,
    logo_url: data.logoUrl,
    sample_images: data.sampleImages,
    street_address: data.streetAddress,
    fixed_to_one_location: !data.canadaWide,
    category: data.businessCategory,
    tags: data.businessTags || "",
    business_description: data.businessDescription.trim(),
    ig_handle: data.igHandle,
  };
  if (!business) {
    businessObject.referral_source = data.backEndReferral;
    businessObject.referral_business_slug = data.backEndReferralBusiness;
  }

  const fetchUrl = business
    ? `${process.env.NEXT_PUBLIC_SERVER_BASE_URL}/business?slug=${business.slug}`
    : `${process.env.NEXT_PUBLIC_SERVER_BASE_URL}/businesses`;
  const fetchMethod = business ? "PATCH" : "POST";

  return updateBusiness(fetchUrl, fetchMethod, businessObject, userToken); //create or update
};
