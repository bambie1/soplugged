import { getDBUser } from "@/utils/dbUser";
import { parseCookies } from "nookies";

export const removeFavorite = async (business_id: number, user: any) => {
  // try {
  const { token } = parseCookies();
  const dbUser = await getDBUser(user);

  if (!dbUser) throw new Error("No db user");

  const res = await fetch(
    `${process.env.NEXT_PUBLIC_SERVER_BASE_URL}/favorite`,
    {
      method: "DELETE",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
        "Firebase-Token": token,
      },
      body: JSON.stringify({
        business_id,
      }),
    }
  );

  // if (!res.ok) {
  //   throw new Error("HTTP status " + res.status);
  // }
  return res;
  // } catch (error) {
  //   console.log({ error });
  //   return { error };
  // }
};
