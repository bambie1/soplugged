import * as Sentry from "@sentry/node";

export const sendEmail = async (email) => {
  try {
    const res = await fetch(
      `${process.env.NEXT_PUBLIC_SERVER_BASE_URL}/emails`,
      {
        method: "POST",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          email,
        }),
      }
    );
    if (!res.ok) {
      throw new Error("HTTP status " + res.status);
    } else {
      return { status: "success" };
    }
  } catch (error) {
    console.log("error");
    Sentry.captureException(error);
    return { error };
  }
};
