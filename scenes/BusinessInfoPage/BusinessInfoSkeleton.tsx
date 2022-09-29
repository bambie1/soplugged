import Skeleton from "@/components/skeletons/Skeleton";

const BusinessInfoSkeleton = () => {
  return (
    <div className="flex flex-col">
      <Skeleton type="heading" />
      <Skeleton type="heading" />

      <section className="grid w-full gap-8 lg:grid-cols-2 lg:justify-start">
        <Skeleton type="box" />
        <Skeleton type="box" />
      </section>
    </div>
  );
};

export default BusinessInfoSkeleton;
