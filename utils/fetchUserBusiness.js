export const fetchUserBusiness = async (token) => {
  const fetchUrl = `${process.env.NEXT_PUBLIC_SERVER_BASE_URL}/business`;

  const res = await fetch(fetchUrl, {
    method: "GET",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
      "Firebase-Token": token,
    },
  });
  if (!res.ok) return { business: null, token };
  const business = await res.json();
  return {
    business: business[0] || null,
    token,
  };
};
