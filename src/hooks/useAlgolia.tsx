import { useRouter } from "next/router";

import { createURL } from "@/components/algolia/AlgoliaSearch";

const useAlgolia = () => {
  const router = useRouter();

  const handleCategoryClick = (label: string) => {
    router.push(
      `/search${createURL({
        refinementList: {
          category: [label],
        },
      })}`
    );
  };

  const handleLocationClick = (label: string) => {
    router.push(
      `/search${createURL({
        refinementList: {
          business_location: [label],
        },
      })}`
    );
  };

  return { handleCategoryClick, handleLocationClick };
};

export default useAlgolia;
