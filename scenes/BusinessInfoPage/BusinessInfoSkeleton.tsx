import Skeleton from "@/components/skeletons/Skeleton";

import styles from "./BusinessInfoPage.module.scss";

const BusinessInfoSkeleton = () => {
  return (
    <div className="flex flex-col items-center">
      <Skeleton type="title" />
      <Skeleton type="heading" />

      <section className={styles.grid}>
        <Skeleton type="box" />
        <Skeleton type="box" />
        <div className={styles.plugs}>
          <Skeleton type="box" />
        </div>
      </section>
    </div>
  );
};

export default BusinessInfoSkeleton;
