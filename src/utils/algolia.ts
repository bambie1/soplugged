// @ts-nocheck

import qs from "qs";

const encodedCategories = {
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

const decodedCategories = Object.keys(encodedCategories).reduce((acc, key) => {
  const newKey = encodedCategories[key];
  const newValue = key;

  return {
    ...acc,
    [newKey]: newValue,
  };
}, {});

function getCategorySlug(name) {
  const encodedName = decodedCategories[name] || name;

  if (typeof encodedName !== "string") return "all";

  return encodedName?.split(" ").map(encodeURIComponent).join("+") ?? "";
}

function getCategoryName(slug) {
  const decodedSlug = encodedCategories[slug] || slug;

  return decodedSlug.split("+").map(decodeURIComponent).join(" ");
}

export const createURL = (state) => {
  const isDefaultRoute =
    !state.query &&
    state.page === 1 &&
    state.menu &&
    state.menu.category.length === 0;

  if (isDefaultRoute) {
    return "";
  }

  const categoryPath = state.menu.category
    ? `${getCategorySlug(state.menu.category)}/`
    : "";
  const queryParameters = {};

  if (state.query) {
    queryParameters.query = encodeURIComponent(state.query);
  }
  if (state.page !== 1) {
    queryParameters.page = state.page;
  }
  if (state.menu.business_location) {
    queryParameters.business_location = state.menu.business_location;
  }

  const queryString = qs.stringify(queryParameters, {
    addQueryPrefix: true,
    arrayFormat: "repeat",
  });

  const url = `/search/${categoryPath}${queryString}`;

  return url;
};
