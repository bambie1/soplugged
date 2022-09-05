export const swrFetchWithToken = async (url: string) => {
  const res = await fetch(url, {
    method: "GET",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
      "User-Email": "bennieb96@gmail.com",
      "Super-Secret-Key": process.env.NEXT_SERVER_SECRET!,
    },
  });

  if (!res.ok) {
    const error: any = new Error("An error occurred while fetching the data.");
    // Attach extra info to the error object.
    error.info = await res.json();
    error.status = res.status;

    throw error;
  }

  return res.json();
};
