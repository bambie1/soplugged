import { parseCookies } from "nookies";
import * as Sentry from "@sentry/nextjs";

export const swrFetchWithToken = async (url: string) => {
  const { token } = parseCookies();

  const res = await fetch(url, {
    method: "GET",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
      "Firebase-Token": token,
    },
  });

  if (!res.ok) {
    const error: any = new Error("An error occurred while fetching the data.");
    // Attach extra info to the error object.
    error.info = await res.json();
    error.status = res.status;

    Sentry.captureException(error);

    throw error;
  }

  return res.json();
};
