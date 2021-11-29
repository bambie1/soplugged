export const getAllSlugs = async () => {
  let res = await fetch(
    `${process.env.NEXT_PUBLIC_SERVER_BASE_URL}/businesses`
  );
  const businesses = await res.json();
  return businesses.map((business: any) => `/business/${business.slug}`);
};
