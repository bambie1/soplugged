import slugify from "slugify";

import { IBusiness } from "@/types/Business";

export const updateBusiness = async (data: IBusiness, isNew: boolean) => {
  const businessObject: any = {
    ...data,
    business_name: data.business_name.trim(),
    slug: slugify(data.business_name.trim(), {
      lower: true,
      remove: /[*+~.()'"!:@]/g,
    }),
    business_url: data.business_url?.trim(),
    fixed_to_one_location: false,
    tags: "",
    business_description: data.business_description.trim(),
  };

  const fetchUrl = isNew
    ? `${process.env.NEXT_PUBLIC_SERVER_BASE_URL}/businesses`
    : `${process.env.NEXT_PUBLIC_SERVER_BASE_URL}/business?slug=${
        data.slug || ""
      }`;
  const fetchMethod = isNew ? "POST" : "PATCH";

  const res = await fetch(fetchUrl, {
    method: fetchMethod,
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
      "User-Email": "bennieb96@gmail.com",
      "Super-Secret-Key": "wrong",
    },
    body: JSON.stringify({
      business: businessObject,
    }),
  });

  return res;
};
