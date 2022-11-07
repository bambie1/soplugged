import Header from "@/components/Header/Header";
import Skeleton from "@/components/skeletons/Skeleton";
import { BusinessForm } from "layouts/BusinessForm";

const MyBusinessSkeleton = () => {
  return (
    <>
      <Header variant="auth" className="hidden lg:block" />
      <BusinessForm skeleton>
        <div className="flex w-full flex-col place-content-center items-center self-center">
          <Skeleton type="input" />
          <Skeleton type="input" />
          <Skeleton type="input" />
          <Skeleton type="input" />
        </div>
      </BusinessForm>
    </>
  );
};

export default MyBusinessSkeleton;
