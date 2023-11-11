import { NextApiRequest, NextApiResponse } from "next";
import * as Sentry from "@sentry/nextjs";

var postmark = require("postmark");

// Send an email:
var client = new postmark.ServerClient(process.env.POSTMARK_SERVER_API_TOKEN);

const handler = async (req: NextApiRequest, res: NextApiResponse) => {
  try {
    const { email } = JSON.parse(req.body);

    await client.sendEmailWithTemplate(email);

    res.status(200).json({});
  } catch (err) {
    console.log({ err });
    Sentry.captureException(err);

    res.status(500).json({ message: "E-mail not sent" });
  }
};

export default handler;
