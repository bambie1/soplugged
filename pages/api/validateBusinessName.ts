import { NextApiRequest, NextApiResponse } from "next";
import slugify from "slugify";

const handler = async (req: NextApiRequest, res: NextApiResponse) => {
  try {
    const { businessName } = JSON.parse(req.body);

    console.log({ businessName });
    const newSlug = slugify(businessName.trim(), {
      lower: true,
      remove: /[*+~.()'"!:@]/g,
      strict: true,
    });

    const fetchPromise = await fetch(
      `${process.env.NEXT_PUBLIC_SERVER_BASE_URL}/business?slug=${newSlug}`
    );

    console.log({ fetchPromise });

    if (fetchPromise.ok) res.status(500).json(null);
    else {
      res.status(200).json({});
    }
  } catch (err: any) {
    console.log({ err });
    res.status(200).json({});
  }
};

export default handler;
