import dynamic from "next/dynamic";
import Script from "next/script";
import { FC } from "react";
import { StateMachineProvider, createStore } from "little-state-machine";
import { useWindowSize } from "@reach/window-size";

import { SEO } from "@/components/SEO";

import StepOnePage from "./StepOne";
import StepTwoPage from "./StepTwo";
import StepThreePage from "./StepThree";
import StepFourPage from "./StepFour";
import StepReviewPage from "./StepReview";

const Header = dynamic(() => import("../../components/Header/Header"));

interface Props {
  business: any;
  step?: any;
}

const MyBusinessPage: FC<Props> = ({ business, step }) => {
  const { width } = useWindowSize();

  createStore(
    {
      businessDetails: { ...business },
    },
    {}
  );

  const renderStep = () => {
    switch (step) {
      case "two":
        return <StepTwoPage />;
      case "three":
        return <StepThreePage />;
      case "four":
        return <StepFourPage />;
      case "review":
        return <StepReviewPage />;

      default:
        return <StepOnePage />;
    }
  };

  return (
    <>
      <SEO
        description="Register your business as an Black entrepreneur, and get featured on our platform, for FREE!"
        title="My Business | SoPlugged"
      />
      <Header hideLinks={width >= 768} />
      <StateMachineProvider>{renderStep()}</StateMachineProvider>
      <Script
        src={`https://maps.googleapis.com/maps/api/js?key=${process.env.NEXT_PUBLIC_GOOGLE_API_KEY}&libraries=places`}
        strategy="beforeInteractive"
      />
    </>
  );
};

export default MyBusinessPage;
