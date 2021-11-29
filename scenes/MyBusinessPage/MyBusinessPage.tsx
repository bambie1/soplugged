import dynamic from "next/dynamic";
import { FC } from "react";
import { StateMachineProvider, createStore } from "little-state-machine";

import { SEO } from "@/components/SEO";

import StepOnePage from "./StepOne";
import StepTwoPage from "./StepTwo";
import StepThreePage from "./StepThree";
import StepFourPage from "./StepFour";
import StepReviewPage from "./StepReview";
import { BusinessForm } from "../../layouts/BusinessForm";

const Header = dynamic(() => import("../../components/Header/Header"));

interface Props {
  business: any;
  step?: any;
}

const MyBusinessPage: FC<Props> = ({ business, step }) => {
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
      <Header color="transparent" />
      <StateMachineProvider>
        <BusinessForm>{renderStep()}</BusinessForm>
      </StateMachineProvider>
    </>
  );
};

export default MyBusinessPage;
