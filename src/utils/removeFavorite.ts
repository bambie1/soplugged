import { getDBUser } from "@/utils/dbUser";

export const removeFavorite = async (business_id: number, email: string) => {
  const dbUser = await getDBUser(email);

  if (!dbUser) return null;

  const res = await fetch(
    `${process.env.NEXT_PUBLIC_SERVER_BASE_URL}/favorite`,
    {
      method: "DELETE",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
        "User-Email": "bennieb96@gmail.com",
        "Super-Secret-Key": process.env.NEXT_SERVER_SECRET!,
      },
      body: JSON.stringify({
        business_id,
      }),
    }
  );

  return res;
};
