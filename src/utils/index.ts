import { encodedCategories } from "@/lib/encodedCategories";
import { encodedLocations } from "@/lib/encodedLocations";

interface IObjectKeys {
  [key: string]: string;
}

export function getCategoryName(slug: string) {
  const decodedSlug = encodedCategories[slug] || slug;

  return decodedSlug.split("+").map(decodeURIComponent).join(" ");
}

const decodedCategories: IObjectKeys = Object.keys(encodedCategories).reduce(
  (acc, key) => {
    const newKey = encodedCategories[key];
    const newValue = key;

    return {
      ...acc,
      [newKey]: newValue,
    };
  },
  {}
);

export function getCategorySlug(name: string) {
  const encodedName = decodedCategories[name] || name;

  return encodedName.split(" ").map(encodeURIComponent).join("+");
}

const decodedLocations: IObjectKeys = Object.keys(encodedLocations).reduce(
  (acc, key) => {
    const newKey = encodedLocations[key];
    const newValue = key;

    return {
      ...acc,
      [newKey]: newValue,
    };
  },
  {}
);

export function getLocationSlug(name: string) {
  const encodedName = decodedLocations[name] || name;

  return encodedName.split(" ").map(encodeURIComponent).join("+");
}
