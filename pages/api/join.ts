import { NextApiRequest, NextApiResponse } from "next";
import * as Sentry from "@sentry/nextjs";
var Airtable = require("airtable");

Airtable.configure({
  endpointUrl: "https://api.airtable.com",
  apiKey: process.env.AIRTABLE_API_KEY,
});
var base = Airtable.base("appgdjdPKc3Rv2EFn");

const handler = async (req: NextApiRequest, res: NextApiResponse) => {
  try {
    const data = JSON.parse(req.body);
    base("Members").create(
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
