import * as Sentry from "@sentry/nextjs";
import { NextApiRequest, NextApiResponse } from "next";
var Airtable = require("airtable");

Airtable.configure({
  endpointUrl: "https://api.airtable.com",
  apiKey: process.env.AIRTABLE_SOPLUGGED_API_KEY,
});
var base = Airtable.base("appMt18vrIMQC8k6h");

const handler = async (req: NextApiRequest, res: NextApiResponse) => {
  try {
    const data = JSON.parse(req.body);
    base("New member Intake").create(
      [
        {
          fields: {
            "E-mail address": data.userEmail,
            "Full Name": data.name,
            "Business Name": data.businessName,
            "Business website": data.businessWebsite,
            "Date added": new Date().toLocaleDateString("en-US", {
              year: "numeric",
              month: "numeric",
              day: "numeric",
            }),
            "Business Description": data.businessDescription,
            Images: data.businessImages,
          },
        },
      ],
      function (err: any) {
        if (err) {
          Sentry.captureException(err);

          res.status(500).json({ err });
        }
      }
    );
    res.status(200).json({});
  } catch (err) {
    Sentry.captureException(err);
    res.status(500).json({});
  }
};

export default handler;
