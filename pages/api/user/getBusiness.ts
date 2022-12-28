import { NextApiRequest, NextApiResponse } from "next";
import { getSession } from "next-auth/react";

const handler = async (req: NextApiRequest, res: NextApiResponse) => {
  try {
    const session = await getSession({ req });

    if (!session?.user) {
      res.status(401).json({ statusCode: 401, message: "Not signed in" });
      return;
    }

    const fetchPromise = await fetch(
      `${process.env.NEXT_PUBLIC_SERVER_BASE_URL}/business`,
      {
        method: "GET",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
          "User-Email": session.user.email!,
          "Super-Secret-Key": process.env.NEXT_SERVER_SECRET!,
        },
      }
    );

    if (fetchPromise.status > 250) res.status(200).json(null);
    else {
      const businesses = await fetchPromise.json();
      const resBusiness = !!businesses.length ? businesses[0] : null;

      res.status(200).json(resBusiness);
    }
  } catch (err: any) {
    res.status(500).json({ statusCode: 500, message: err.message });
  }
};

export default handler;
