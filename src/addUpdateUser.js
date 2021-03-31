const updateUser = async (fetchUrl, fetchMethod, data, token) => {
  try {
    const res = await fetch(fetchUrl, {
      method: fetchMethod,
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
        "Firebase-Token": token,
      },
      body: JSON.stringify({
        full_name: data.fullName,
        email: data.email,
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

export const submitUser = async (data, add, token) => {
  const fetchUrl = data
    ? `${process.env.NEXT_PUBLIC_SERVER_BASE_URL}/user`
    : `${process.env.NEXT_PUBLIC_SERVER_BASE_URL}/users`;
  const fetchMethod = add ? "POST" : "PUT";

  return updateUser(fetchUrl, fetchMethod, data, token); //create or update
};
