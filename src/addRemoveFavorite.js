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
    console.log("error: ", error);
  }
};

export const sendFavorite = async (business_id, token, add) => {
  const fetchUrl = `${process.env.NEXT_PUBLIC_SERVER_BASE_URL}/${
    add ? "favorites" : "favorite"
  }`;
  const fetchMethod = add ? "POST" : "DELETE";

  return updateFavorite(fetchUrl, fetchMethod, business_id, token); //create or update
};
