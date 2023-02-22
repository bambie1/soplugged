import qs from "qs";
import { SearchState } from "react-instantsearch-core";

interface IObjectKeys {
  [key: string]: string;
}

export const encodedCategories: IObjectKeys = {
  art: "Art",
  "baking-and-catering": "Baking / Catering",
  "coaching-tutoring": "Coaching / Tutoring",
  consultancy: "Consultancy",
  "content-creating-and-writing": "Content Creating / Writing",
  entertainment: "Entertainment",
  "event-planning": "Event Planning",
  fashion: "Fashion",
  fitness: "Fitness",
  "graphic-design": "Graphic Design",
  groceries: "Groceries",
  "hair-and-beauty": "Hair / Beauty",
  "handcraft-gifting": "Handcraft / Gifting Services",
  "housekeeping-domestic": "Housekeeping / Domestic Services",
  "interior-decor": "Interior Decor",
  "maintenance-repair": "Maintenance/Repair Services",
  "media-services": "Media services",
  "travel-tourism": "Travel / Tourism Service",
  "web-dev-design": "Web Development / Design",
  other: "Other",

  // staging categories
  hair: "Hair",
  beauty: "Beauty",
};

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

function getCategorySlug(name: string) {
  const encodedName = decodedCategories[name] || name;

  return encodedName.split(" ").map(encodeURIComponent).join("+");
}

export function getCategoryName(slug: string) {
  const decodedSlug = encodedCategories[slug] || slug;

  return decodedSlug.split("+").map(decodeURIComponent).join(" ");
}

export const createURL = (state: SearchState) => {
  const isDefaultRoute =
    !state.query &&
    state.page === 1 &&
    state.menu &&
    state.menu.category.length === 0;

  const queryParameters = {} as any;

  if (state.query) {
    queryParameters.query = encodeURIComponent(state.query);
  }
  if (state.page !== 1) {
    queryParameters.page = state.page;
  }
  if (state?.menu?.business_location) {
    queryParameters.city = state.menu.business_location;
  }

  const queryString = qs.stringify(queryParameters, {
    addQueryPrefix: true,
    arrayFormat: "repeat",
  });

  if (isDefaultRoute) {
    return `/black-businesses/${queryString}`;
  }

  const categoryPath = state?.menu?.category
    ? `${getCategorySlug(state.menu.category)}/`
    : "";

  const url = `/black-businesses/${categoryPath}${queryString}`;

  return url;
};
