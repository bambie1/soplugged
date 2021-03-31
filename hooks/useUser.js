import useSWR from "swr";

const fetcher = (url, token) =>
  fetch(url, {
    method: "GET",
    headers: {
      "Firebase-Token": token,
    },
  }).then((r) => r.json());

export function useUser(token) {
  const { data, error } = useSWR(
    [`${process.env.NEXT_PUBLIC_SERVER_BASE_URL}/user`, token],
    fetcher
  );
  return {
    user: data,
    isLoading: !error && (!data || data === undefined),
    isError: error,
  };
}
