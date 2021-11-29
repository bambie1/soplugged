import { IUser } from "../types/User";

const updateDBUser = async (
  fetchUrl: string,
  fetchMethod: "GET" | "POST" | "PUT",
  user: IUser,
  token: string
) => {
  try {
    const res = await fetch(fetchUrl, {
      method: fetchMethod,
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
        "Firebase-Token": token,
      },
      body: JSON.stringify(user),
    });

    if (!res.ok) {
      throw new Error("HTTP status " + res.status);
    }
    return res;
  } catch (error) {
    return { error };
  }
};

export const editDBUser = async (user: IUser, token: string) => {
  const fetchUrl = `${process.env.NEXT_PUBLIC_SERVER_BASE_URL}/user`;
  return updateDBUser(fetchUrl, "PUT", user, token);
};

export const addDBUser = async (user: IUser, token: string) => {
  const fetchUrl = `${process.env.NEXT_PUBLIC_SERVER_BASE_URL}/users`;
  await updateDBUser(fetchUrl, "POST", user, token);
  return getDBUser(token);
};

export const getDBUser = async (fbUser: any) => {
  const fetchUrl = `${process.env.NEXT_PUBLIC_SERVER_BASE_URL}/user`;
  const token = await fbUser.getIdToken();

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

    if (!dbUser)
      dbUser = addDBUser({ email: fbUser.email, full_name: "" }, token);
    return dbUser;
  } catch (error) {
    return null;
  }
};
