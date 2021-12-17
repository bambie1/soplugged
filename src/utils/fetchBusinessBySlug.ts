export const fetchBusinessBySlug = async (slug: string) => {
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_SERVER_BASE_URL}/business?slug=${slug}`
  );
  return res.json();
};
