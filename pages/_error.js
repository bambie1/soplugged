import NextErrorComponent from "next/error";
import * as Sentry from "@sentry/nextjs";

import { ErrorPage } from "@/scenes/ErrorPage";

const MyError = ({ err }) => {
  if (err) {
    Sentry.captureException(err);
  }

  return <ErrorPage />;
};

MyError.getInitialProps = async ({ res, err, asPath }) => {
  const errorInitialProps = await NextErrorComponent.getInitialProps({
    res,
    err,
  });

  if (err) {
    Sentry.captureException(err);

    await Sentry.flush(2000);

    return errorInitialProps;
  }
  Sentry.captureException(
    new Error(`_error.js getInitialProps missing data at path: ${asPath}`)
  );
  await Sentry.flush(2000);

  return errorInitialProps;
};

export default MyError;
