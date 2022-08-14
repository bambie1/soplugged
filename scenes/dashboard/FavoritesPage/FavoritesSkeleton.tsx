import Skeleton from "@/components/skeletons/Skeleton";

import styles from "./FavoritesPage.module.scss";

const FavoritesSkeleton = () => {
  return (
    <div className="flex flex-col items-center">
      <Skeleton type="title" />

      <div className={styles.favorites}>
        <Skeleton type="box" />
        <Skeleton type="box" />
        <Skeleton type="box" />
        <Skeleton type="box" />
      </div>
    </div>
  );
};

export default FavoritesSkeleton;
