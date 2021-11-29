import { parseCookies } from "nookies";

export const swrFetchWithToken = (url: string) => {
  const { token } = parseCookies();

  return fetch(url, {
    method: "GET",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
      "Firebase-Token": token,
    },
  }).then((res) => res.json());
};
