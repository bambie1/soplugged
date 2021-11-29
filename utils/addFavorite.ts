import { getDBUser } from "@/utils/dbUser";

export const addFavorite = async (business_id: any, user: any) => {
  try {
    let token = await user.getIdToken();
    let dbUser = await getDBUser(user);

    console.log({ dbUser });
    if (dbUser) {
      const fetchUrl = `${process.env.NEXT_PUBLIC_SERVER_BASE_URL}/favorites`;
      const res = await fetch(fetchUrl, {
        method: "POST",
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
    }
  } catch (error) {
    return { error };
  }
};
