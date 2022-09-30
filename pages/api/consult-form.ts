import { NextApiRequest, NextApiResponse } from "next";
const sgMail = require("@sendgrid/mail");

const VERIFIED_SENDER = "hello@soplugged.com";
// These 2 e-mails HAVE to be unique
const VERIFIED_RECIPIENT = "bennieb96@gmail.com";

const handler = async (req: NextApiRequest, res: NextApiResponse) => {
  try {
    sgMail.setApiKey(process.env.SENDGRID_API_KEY);

    const parsedBody = JSON.parse(req.body);

    const msg = {
      to: VERIFIED_RECIPIENT,
      from: VERIFIED_SENDER,
      subject: "New consult request from SoPlugged Pro",
      html: `<h2>Hi SoPlugged team</h2>
      <p>You have a new consult request:</p>
      <ul>
        <li>Name: ${parsedBody.name}</li>
        <li>E-mail: ${parsedBody.email}</li>
        <li>Business name: ${parsedBody.businessName}</li>
        <li>Services needed: ${parsedBody.services}</li>
        <li>Project description: ${parsedBody.description}</li>
      </ul>
      `,
    };

    const response = await sgMail.send(msg);

    console.log({ response });
    res.status(200).json({});
  } catch (err: any) {
    console.log(JSON.stringify(err));
    res.status(500).json({ statusCode: 500, message: err.message });
  }
};

export default handler;
