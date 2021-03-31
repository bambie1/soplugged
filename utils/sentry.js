import * as Sentry from "@sentry/node";

export const init = () => {
  if (process.env.NEXT_PUBLIC_SENTRY_DSN) {
    Sentry.init({
      enabled: process.env.NODE_ENV === "production",
      dsn: process.env.NEXT_PUBLIC_SENTRY_DSN,
    });
  }
};
