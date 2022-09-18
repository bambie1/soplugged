import { getDBUser } from "@/utils/dbUser";

export const addFavorite = async (business_id: number, user: any) => {
  // try {
  const dbUser = await getDBUser(user);

  if (!dbUser) return null;

  const fetchUrl = `${process.env.NEXT_PUBLIC_SERVER_BASE_URL}/favorites`;
  const res = await fetch(fetchUrl, {
    method: "POST",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
      "User-Email": user,
      "Super-Secret-Key": process.env.NEXT_SERVER_SECRET!,
    },
    body: JSON.stringify({
      business_id,
    }),
  });

  return res;
};
