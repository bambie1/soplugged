import Footer from "@/src/components/Footer";
import Header from "@/src/components/Header/Header";
import Skeleton from "@/src/components/skeletons/Skeleton";

const BusinessPageSkeleton = () => {
  return (
    <>
      <Header />
      <div className="my-container pt-24">
        <div className="flex flex-col items-center">
          <Skeleton type="title" />
          <Skeleton type="heading" />
        </div>

        <section className="mx-auto max-w-3xl">
          <div className="">
            <Skeleton type="image" />
            <Skeleton type="button" />
            <Skeleton type="text" />
          </div>
          <div className="mt-10 flex justify-center">
            <Skeleton type="button" />
          </div>
        </section>
      </div>
      <Footer />
    </>
  );
};

export default BusinessPageSkeleton;
