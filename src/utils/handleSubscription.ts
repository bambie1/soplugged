import * as Sentry from "@sentry/nextjs";

export const handleSubscription = async (
  data: any,
  subscription_type: string
) => {
  try {
    const res = await fetch(
      `${process.env.NEXT_PUBLIC_SERVER_BASE_URL}/subscriptions`,
      {
        method: "POST",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          subscription: { ...data, subscription_type },
        }),
      }
    );
    if (!res.ok) throw new Error("HTTP status " + res.status);

    return { res };
  } catch (error) {
    Sentry.captureException(error);

    return { error };
  }
};
