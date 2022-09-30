import { NextApiRequest, NextApiResponse } from "next";
const sgMail = require("@sendgrid/mail");

const VERIFIED_SENDER = "hello@soplugged.com";
// These 2 e-mails HAVE to be unique
const RECIPIENT = "benaiahambiebarango@hotmail.com";

const handler = async (req: NextApiRequest, res: NextApiResponse) => {
  try {
    sgMail.setApiKey(process.env.SENDGRID_API_KEY);

    const parsedBody = JSON.parse(req.body);

    const msg = {
      from: VERIFIED_SENDER,
      to: RECIPIENT,
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

    await sgMail.send(msg);

    res.status(200).json({});
  } catch (err: any) {
    console.log(JSON.stringify(err));
    res.status(500).json({ statusCode: 500, message: err.message });
  }
};

export default handler;
