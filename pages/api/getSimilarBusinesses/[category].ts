import { NextApiRequest, NextApiResponse } from "next";

const handler = async (req: NextApiRequest, res: NextApiResponse) => {
  try {
    const { category } = req.query;

    const fetchPromise = await fetch(
      `${process.env.NEXT_PUBLIC_SERVER_BASE_URL}/businesses?category=${category}`
    );

    if (!fetchPromise.ok) {
      throw new Error(
        `Error while fetching businesses in ${category} category`
      );
    } else {
      const businesses = await fetchPromise.json();

      res.status(200).json(businesses);
    }
  } catch (err) {
    console.log({ err });
    res.status(500).json(null);
  }
};

export default handler;
