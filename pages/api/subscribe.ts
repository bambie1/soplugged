import { NextApiRequest, NextApiResponse } from "next";
import * as Sentry from "@sentry/nextjs";

const handler = async (req: NextApiRequest, res: NextApiResponse) => {
  try {
    const data = JSON.parse(req.body);

    const fetchPromise = await fetch(
      `${process.env.NEXT_PUBLIC_SERVER_BASE_URL}/subscriptions`,
      {
        method: "POST",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          subscription: { ...data, subscription_type: "newsletter" },
        }),
      }
    );

    if (fetchPromise.ok) {
      res.status(200).json({});
    } else throw new Error("Newsletter subscription failed");
  } catch (err) {
    Sentry.captureException(err);
    res.status(500).json({});
  }
};

export default handler;
