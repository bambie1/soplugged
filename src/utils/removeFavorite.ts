import { getDBUser } from "@/utils/dbUser";
import { parseCookies } from "nookies";

export const removeFavorite = async (business_id: number, email: string) => {
  const { token } = parseCookies();
  const dbUser = await getDBUser(email);

  if (!dbUser) return null;

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

  return res;
};
