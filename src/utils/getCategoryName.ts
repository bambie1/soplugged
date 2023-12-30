import { encodedCategories } from "@/lib/encodedCategories";

export function getCategoryName(slug: string) {
  const decodedSlug = encodedCategories[slug] || slug;

  return decodedSlug.split("+").map(decodeURIComponent).join(" ");
}
