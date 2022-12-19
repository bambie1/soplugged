import { GetServerSideProps, InferGetServerSidePropsType } from "next";
import Link from "next/link";
import { ShareIcon } from "@heroicons/react/outline";

import { Footer } from "@/components/Footer";
import Header from "@/components/Header/Header";
import SEO from "@/components/SEO";

const stripe = require("stripe")(process.env.STRIPE_SECRET_KEY);

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

      <Header />

      <div className="my-container pt-12 text-center lg:pt-20">
        <div className="light-gradient relative inline-flex  rounded-xl px-3 py-2">
          <img src="/tada.svg" alt="" className="absolute -left-4 top-1 h-7" />
          <p className="ml-1">We've saved you a seat, {firstName}!</p>
        </div>
        <div className="relative mt-2">
          <div className="absolute inset-0 -z-10 bg-radial-pluggedin"></div>
          <h1 className="mb-4 text-5xl font-extrabold sm:text-6xl lg:text-8xl">
            <span className="outlinedText conference ml-1">
              Ticket confirmed
            </span>
          </h1>
          <p className="mx-auto mb-4 max-w-2xl text-lg font-light text-gray-600 lg:text-2xl">
            Please check your email for your e-ticket, and more info about what
            to expect at the event.
          </p>
          <Link href="#tickets">
            <a className="neuButton">
              Spread the word!
              <ShareIcon className="h-6 w-6" />
            </a>
          </Link>
        </div>
      </div>

      <div className="my-container mt-10 text-center lg:mt-20">
        <p>soplugged.com/pluggedin</p>

        <img
          src="/og-pluggedin.png"
          alt="OG image preview for plugged-in page"
          className="mx-auto w-full max-w-xl rounded-2xl border border-primary"
        />
      </div>

      <Footer />
    </>
  );
};

export const getServerSideProps: GetServerSideProps = async ({ query }) => {
  const session = await stripe.checkout.sessions.retrieve(query.session_id);
  const customer = await stripe.customers.retrieve(session.customer);

  return {
    props: {
      customer,
    },
  };
};

export default PluggedInSuccessPage;
