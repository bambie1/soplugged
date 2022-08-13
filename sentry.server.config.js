import * as Sentry from "@sentry/nextjs";

Sentry.init({
  dsn: "https://c7a983b60e504ec1a993994b4dcff264@o509845.ingest.sentry.io/5604856",
  // Adjust this value in production, or use tracesSampler for greater control
  tracesSampleRate: 0,
});
