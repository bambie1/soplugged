import { NextApiRequest, NextApiResponse } from "next";
import slugify from "slugify";
import * as Sentry from "@sentry/nextjs";
import { getSession } from "next-auth/react";

const handler = async (req: NextApiRequest, res: NextApiResponse) => {
  try {
    const { businessName } = JSON.parse(req.body);

    const newSlug = slugify(businessName.trim(), {
      lower: true,
      remove: /[*+~.()'"!:@]/g,
      strict: true,
    });

    const fetchPromise = await fetch(
      `${process.env.NEXT_PUBLIC_SERVER_BASE_URL}/business?slug=${newSlug}`
    );

    if (fetchPromise.ok) {
      const session = await getSession({ req });

      Sentry.captureEvent({
        message: "Duplicate business attempted",
        breadcrumbs: [
          {
            message: `User: ${session?.user?.email}`,
          },
        ],
      });
      res.status(500).json(null);
    } else {
      res.status(200).json({});
    }
  } catch (err) {
    console.log({ err });
    res.status(200).json({});
  }
};

export default handler;
