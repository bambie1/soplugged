const updateUser = async (fetchUrl, fetchMethod, data, token) => {
  try {
    const res = await fetch(fetchUrl, {
      method: fetchMethod,
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
        "Firebase-Token": token,
      },
      body: JSON.stringify(data),
    });

    if (!res.ok) {
      throw new Error("HTTP status " + res.status);
    }
    return res;
  } catch (error) {
    return { error };
  }
};

export const editUser = async (data, token) => {
  const fetchUrl = `${process.env.NEXT_PUBLIC_SERVER_BASE_URL}/user`;
  console.log({ fetchUrl, method: "PUT" });
  return updateUser(fetchUrl, "PUT", data, token);
};

export const addUser = async (data, token) => {
  const fetchUrl = `${process.env.NEXT_PUBLIC_SERVER_BASE_URL}/users`;
  console.log({ fetchUrl, method: "POST" });
  return updateUser(fetchUrl, "POST", data, token);
};

export const getUser = async (token) => {
  const fetchUrl = `${process.env.NEXT_PUBLIC_SERVER_BASE_URL}/user`;
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
    const user = await res.json();
    console.log({ user });
    return user;
  } catch (error) {
    console.log("no user found");
    return null;
  }
};
