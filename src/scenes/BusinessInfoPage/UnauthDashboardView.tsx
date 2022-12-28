import SignInModal from "@/src/components/SignInModal";
import BusinessInfoSkeleton from "./BusinessInfoSkeleton";

const UnauthDashboardView = () => {
  return (
    <>
      <BusinessInfoSkeleton />
      <SignInModal />
    </>
  );
};

export default UnauthDashboardView;
