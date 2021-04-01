import { addUser, getUser } from "./handleDBUser";

const updateFavorite = async (fetchUrl, fetchMethod, business_id, token) => {
  try {
    const res = await fetch(fetchUrl, {
      method: fetchMethod,
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
        "Firebase-Token": token,
      },
      body: JSON.stringify({
        business_id,
      }),
    });

    if (!res.ok) {
      throw new Error("HTTP status " + res.status);
    }
    return res;
  } catch (error) {
    return { error };
  }
};

export const addFavorite = async (business_id, user) => {
  try {
    let token = await user.getIdToken();
    let dbUser = await getUser(token);
    if (dbUser === null)
      dbUser = await addUser({ email: user.email, full_name: "" }, token);

    if (dbUser) {
      const fetchUrl = `${process.env.NEXT_PUBLIC_SERVER_BASE_URL}/favorites`;
      return updateFavorite(fetchUrl, "POST", business_id, token);
    }
  } catch (error) {
    return { error };
  }
};
export const removeFavorite = async (business_id, user) => {
  try {
    let token = await user.getIdToken();
    const dbUser = await getUser(token);

    if (dbUser !== null) {
      const fetchUrl = `${process.env.NEXT_PUBLIC_SERVER_BASE_URL}/favorite`;
      return updateFavorite(fetchUrl, "DELETE", business_id, token); //create or update
    }
    return { error: "no user" };
  } catch (error) {
    return { error };
  }
};
