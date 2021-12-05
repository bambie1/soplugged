import Skeleton from "@/components/skeletons/Skeleton";
import { BusinessForm } from "layouts/BusinessForm";

const MyBusinessSkeleton = () => {
  return (
    <BusinessForm>
      <Skeleton type="input" />
      <Skeleton type="input" />
      <Skeleton type="input" />
      <Skeleton type="input" />
    </BusinessForm>
  );
};

export default MyBusinessSkeleton;
