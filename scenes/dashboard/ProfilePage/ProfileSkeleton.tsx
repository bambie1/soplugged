import Skeleton from "@/components/skeletons/Skeleton";

const ProfileSkeleton = () => {
  return (
    <div className="flex-center column">
      <Skeleton type="title" />
      <Skeleton type="input" />
      <Skeleton type="input" />
    </div>
  );
};

export default ProfileSkeleton;
