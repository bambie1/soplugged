import { NextApiRequest, NextApiResponse } from "next";

const handler = async (req: NextApiRequest, res: NextApiResponse) => {
  try {
    const { email } = JSON.parse(req.body);

    await fetch(`${process.env.SERVER_BASE_URL}/emails`, {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        email,
      }),
    });

    res.status(200).json({});
  } catch (err: any) {
    console.log({ err });
    res.status(500).json({ message: "E-mail not sent" });
  }
};

export default handler;
