import { NextApiRequest, NextApiResponse } from "next";

import { IBusiness } from "@/types/Business";

const handler = async (req: NextApiRequest, res: NextApiResponse) => {
  try {
    const { category, location, business_name } = req.query;

    const fetchPromise = await fetch(
      `${process.env.NEXT_PUBLIC_SERVER_BASE_URL}/businesses`
    );

    if (!fetchPromise.ok) {
      throw new Error(
        `Error while fetching businesses in ${category} category`
      );
    } else {
      const businesses = (await fetchPromise.json()) as IBusiness[];

      const filteredBusinesses = businesses.filter(
        (business) => business.business_name !== business_name
      );

      const sortedBusinesses = filteredBusinesses
        // @ts-ignore
        .sort((a, b) => !!b.verified - !!a.verified)
        // @ts-ignore
        .sort((a, b) => !!b.sample_images?.length - !!a.sample_images?.length)
        .sort((a, b) => {
          if (a.category === category && b.category !== category) {
            return -1;
          }
          if (a.category !== category && b.category === category) {
            return 1;
          }
          return 0;
        })
        .sort((a, b) => {
          if (
            a.business_location === location &&
            b.business_location !== location
          ) {
            return -1;
          }
          if (
            a.business_location !== location &&
            b.business_location === location
          ) {
            return 1;
          }
          return 0;
        })
        .slice(0, 4);

      res.status(200).json(sortedBusinesses);
    }
  } catch (err) {
    console.log({ err });
    res.status(500).json(null);
  }
};

export default handler;
