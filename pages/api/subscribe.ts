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
    base("Newsletter Subscription").create(
      [
        {
          fields: {
            Email: data.email,
            "Date added": new Date().toLocaleDateString("en-US", {
              year: "numeric",
              month: "numeric",
              day: "numeric",
            }),
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
