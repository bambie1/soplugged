import useSWR from "swr";

const fetcher = (url, token) =>
  fetch(url, {
    method: "GET",
    headers: {
      "Firebase-Token": token,
    },
  }).then((r) => r.json());

export function useFavorites(token) {
  const { data, error } = useSWR(
    [`${process.env.NEXT_PUBLIC_SERVER_BASE_URL}/favorites`, token],
    fetcher
  );
  return {
    favorites: data,
    isLoading: !error && (!data || data === undefined),
    isError: error,
  };
}
