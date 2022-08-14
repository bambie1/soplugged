import Skeleton from "@/components/skeletons/Skeleton";

const ProfileSkeleton = () => {
  return (
    <div className="flex flex-col items-center">
      <Skeleton type="title" />
      <Skeleton type="input" />
      <Skeleton type="input" />
    </div>
  );
};

export default ProfileSkeleton;
