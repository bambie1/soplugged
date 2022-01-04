import { PageWrapper } from "@/components/PageWrapper";
import Skeleton from "@/components/skeletons/Skeleton";

import styles from "./BusinessPage.module.scss";

const BusinessPageSkeleton = () => {
  return (
    <PageWrapper center>
      <Skeleton type="title" />
      <Skeleton type="heading" />

      <section className={styles.skeletonView}>
        <div className={styles.info}>
          <Skeleton type="image" />
          <Skeleton type="button" />
          <Skeleton type="text" />
        </div>
        <div className={styles.contact}>
          <Skeleton type="contact" />
          <Skeleton type="input" />
          <Skeleton type="input" />
        </div>
      </section>
    </PageWrapper>
  );
};

export default BusinessPageSkeleton;
