import { parseCookies } from "nookies";

import { IUser } from "../types/User";

const updateDBUser = async (
  fetchUrl: string,
  fetchMethod: "GET" | "POST" | "PUT",
  user: IUser
) => {
  const { token } = parseCookies();

  const res = await fetch(fetchUrl, {
    method: fetchMethod,
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
      "Firebase-Token": token,
    },
    body: JSON.stringify(user),
  });

  return res;
};

export const editDBUser = async (user: IUser) => {
  await getDBUser(user.email);

  const fetchUrl = `${process.env.NEXT_PUBLIC_SERVER_BASE_URL}/user`;
  return updateDBUser(fetchUrl, "PUT", user);
};

export const addDBUser = async (user: IUser) => {
  const fetchUrl = `${process.env.NEXT_PUBLIC_SERVER_BASE_URL}/users`;
  return updateDBUser(fetchUrl, "POST", user);
};

export const getDBUser = async (email: string) => {
  const fetchUrl = `${process.env.NEXT_PUBLIC_SERVER_BASE_URL}/user`;
  const { token } = parseCookies();

  try {
    const res = await fetch(fetchUrl, {
      method: "GET",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
        "Firebase-Token": token,
      },
    });
    if (!res.ok) throw new Error("HTTP status " + res.status);

    let dbUser = await res.json();

    if (!dbUser) await addDBUser({ email, full_name: "" });

    return dbUser || { email, full_name: "" };
  } catch (error) {
    return null;
  }
};
