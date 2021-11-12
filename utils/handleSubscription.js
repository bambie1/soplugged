import * as Sentry from "@sentry/node";

export const handleSubscription = async (data, subscription_type) => {
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
    if (!res.ok) {
      throw new Error("HTTP status " + res.status);
    } else {
      return { status: "sent" };
    }
  } catch (error) {
    console.log({ error });
    Sentry.captureException(error);

    return { error };
  }
};
