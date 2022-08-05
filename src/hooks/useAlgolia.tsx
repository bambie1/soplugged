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
    router.push(
      `/search${createURL({
        menu: {
          business_location: [label],
        },
      })}`
    );
  };

  return { handleCategoryClick, handleLocationClick };
};

export default useAlgolia;
