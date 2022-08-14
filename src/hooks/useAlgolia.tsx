import router from "next/router";

import { createURL } from "@/utils/algolia";

const useAlgolia = () => {
  const handleCategoryClick = (label: string) => {
    router.push(
      `/search${createURL({
        menu: {
          category: [label],
        },
      })}`
    );
  };

  const handleLocationClick = (label: string) => {
    const url = `/search${createURL({
      menu: {
        business_location: label,
      },
    })}`;

    router.push(url);
  };

  const handleCategoryAndLocation = (category: string, location: string) => {
    const url = `/search${createURL({
      menu: {
        category: [category],
        business_location: location,
      },
    })}`;

    router.push(url);
  };

  return {
    handleCategoryClick,
    handleLocationClick,
    handleCategoryAndLocation,
  };
};

export default useAlgolia;
