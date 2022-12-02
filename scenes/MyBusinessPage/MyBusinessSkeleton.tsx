import Skeleton from "@/components/skeletons/Skeleton";
import { BackArrowButton } from "@/styled/BackArrowButton";
import { Button } from "@/styled/Button";
import { BusinessForm } from "layouts/BusinessForm";

const MyBusinessSkeleton = () => {
  return (
    <>
      <div className="my-container fixed left-0 right-0 top-0 bg-white">
        <div className="flex h-16 items-center justify-between">
          <BackArrowButton disabled>Go back</BackArrowButton>
          <Button variant="text" disabled>
            Exit
          </Button>
        </div>
      </div>
      <BusinessForm title="" subtitle="">
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
