import { Footer } from "@/components/Footer";
import Header from "@/components/Header";
import Skeleton from "@/components/skeletons/Skeleton";

import styles from "./BusinessPage.module.scss";

const BusinessPageSkeleton = () => {
  return (
    <>
      <Header />
      <div className="my-container pt-24">
        <div className="flex flex-col items-center">
          <Skeleton type="title" />
          <Skeleton type="heading" />
        </div>

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
      </div>
      <Footer />
    </>
  );
};

export default BusinessPageSkeleton;
