export const fetchUserFavorites = async (token) => {
  const fetchUrl = `${process.env.NEXT_PUBLIC_SERVER_BASE_URL}/favorites`;

  const res = await fetch(fetchUrl, {
    method: "GET",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
      "Firebase-Token": token,
    },
  });
  if (!res.ok)
    return {
      favorites: [],
    };
  const favorites = await res.json();
  return {
    favorites,
  };
};
