import { NextApiRequest, NextApiResponse } from "next";

import { IBusiness } from "@/types/Business";
var Airtable = require("airtable");

const handler = async (req: NextApiRequest, res: NextApiResponse) => {
  let base = new Airtable({
    apiKey: process.env.AIRTABLE_SOPLUGGED_API_KEY,
  }).base("appMt18vrIMQC8k6h");

  try {
    const { category, location, business_name } = req.query;

    const businesses: IBusiness[] = [];

    const records = await base("Businesses")
      .select({
        maxRecords: 10,
        fields: [
          "id",
          "business_name",
          "business_location",
          "logo_url",
          "sample_images",
          "category",
          "slug",
          "verified",
        ],
        sort: [
          { field: "sample_images", direction: "desc" },
          { field: "verified", direction: "desc" },
          {
            field: "logo_url",
            direction: "desc",
          },
        ],
      })
      .all();

    // @ts-ignore
    records.forEach((record) => {
      businesses.push(record.fields);
    });

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
  } catch (err) {
    console.log({ err });
    res.status(500).json(null);
  }
};

export default handler;
