import Skeleton from "@/components/skeletons/Skeleton";
import { BusinessForm } from "layouts/BusinessForm";

const MyBusinessSkeleton = () => {
  return (
    <BusinessForm title="" subtitle="">
      <div className="flex w-full flex-col place-content-center items-center self-center">
        <Skeleton type="input" />
        <Skeleton type="input" />
        <Skeleton type="input" />
        <Skeleton type="input" />
      </div>
    </BusinessForm>
  );
};

export default MyBusinessSkeleton;
