import { GetServerSideProps, InferGetServerSidePropsType } from "next";
import * as Sentry from "@sentry/nextjs";

import Footer from "@/components/Footer";
import Header from "@/components/Header/Header";
import SEO from "@/components/SEO";

const stripe = require("stripe")(process.env.STRIPE_SECRET_KEY);
var postmark = require("postmark");

var client = new postmark.ServerClient(process.env.POSTMARK_SERVER_API_TOKEN);

const PluggedInSuccessPage = (
  props: InferGetServerSidePropsType<typeof getServerSideProps>
) => {
  const { name } = props.customer;
  const firstName = name.split(" ")[0];

  return (
    <>
      <SEO
        title="Plugged In Conference | SoPlugged"
        description="Network with fellow business-owners, share ideas and learn how to manage your finances as a business owner"
        variant="pluggedin"
      />

      <Header variant="conf" />

      <div className="my-container pt-12 text-center lg:pt-20">
        <div className="light-gradient relative inline-flex  rounded-xl px-3 py-2">
          <img src="/tada.svg" alt="" className="absolute -left-4 top-1 h-7" />
          <p className="ml-1">We've saved you a seat, {firstName}!</p>
        </div>
        <div className="relative mt-2">
          <h1 className="mb-4 text-5xl font-extrabold sm:text-6xl lg:text-8xl">
            <span className="outlinedText conference ml-1">
              Ticket confirmed!
            </span>
          </h1>
          <p className="mx-auto max-w-2xl text-lg font-light text-gray-600 lg:text-xl">
            Please check your email for your e-ticket, and more info about what
            to expect at the event.
          </p>

          <a
            href={`https://twitter.com/intent/tweet?text=${encodeURIComponent(
              "Just got my ticket for #PluggedIn by @sopluggd, claim yours!"
            )}&url=${props.shareUrl}`}
            className="neuButton mt-20"
            target="_blank"
            rel="noreferrer"
          >
            Share on Twitter
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="1"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="feather feather-twitter"
            >
              <path d="M23 3a10.9 10.9 0 0 1-3.14 1.53 4.48 4.48 0 0 0-7.86 3v1A10.66 10.66 0 0 1 3 4s-4 9 5 13a11.64 11.64 0 0 1-7 2c9 5 20 0 20-11.5a4.5 4.5 0 0 0-.08-.83A7.72 7.72 0 0 0 23 3z"></path>
            </svg>
          </a>
        </div>
      </div>

      <div className="my-container mt-6 text-center">
        <img
          src="https://res.cloudinary.com/denbpv9kp/image/upload/v1673299410/soplugged_images/og_images/og-pluggedin_d8bor7.png"
          alt="OG image preview for plugged-in page"
          className="mx-auto w-full max-w-xl rounded-2xl border border-primary/40"
        />
      </div>

      <Footer />
    </>
  );
};

export const getServerSideProps: GetServerSideProps = async ({
  query,
  req,
}) => {
  const host = req.headers.host;

  try {
    const session = await stripe.checkout.sessions.retrieve(query.session_id);
    const customer = await stripe.customers.retrieve(session.customer);
    const shareUrl = `${host}/pluggedin`;

    if (!customer) throw new Error();

    const email = {
      From: "hello@soplugged.com",
      To: customer.email,
      TemplateId: "30186074",
      TemplateModel: {
        product_name: "PluggedIn Conference",
        user_email: customer.email,
        name: customer.name.split(" ")[0],
        share_url: `${host}/pluggedin`,
        action_url: `https://twitter.com/intent/tweet?text=${encodeURIComponent(
          "Just got my ticket for #PluggedIn by @sopluggd, claim yours!"
        )}&url=${host}/pluggedin`,
        support_email: "hello@soplugged.com",
      },
    };

    client.sendEmailWithTemplate(email);

    return {
      props: {
        customer,
        shareUrl,
      },
    };
  } catch (error) {
    console.log({ error });
    Sentry.captureException(error);

    return {
      redirect: {
        permanent: false,
        destination: "/pluggedin",
      },
    };
  }
};

export default PluggedInSuccessPage;
