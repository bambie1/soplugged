import dynamic from "next/dynamic";
import { FC } from "react";
import { StateMachineProvider, createStore } from "little-state-machine";
import { useWindowSize } from "@reach/window-size";

import StepOnePage from "./steps/StepOne";
import StepTwoPage from "./steps/StepTwo";
import StepThreePage from "./steps/StepThree";
import StepFourPage from "./steps/StepFour";
import StepReviewPage from "./steps/StepReview";
import { useBusinessFormContext } from "@/context/businessFormContext";
import StepAgreement from "./steps/StepAgreement";

const Header = dynamic(() => import("../../components/Header/Header"));

interface Props {
  business: any;
  step?: any;
}

const MyBusinessPage: FC<Props> = ({ business, step }) => {
  const { width } = useWindowSize();
  const { agreementSigned } = useBusinessFormContext();

  createStore(
    {
      businessDetails: { ...business },
    },
    {}
  );

  const renderStep = () => {
    if (!business && !agreementSigned) return <StepAgreement />;
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
      <Header hideLinks={width >= 768} />
      <StateMachineProvider>{renderStep()}</StateMachineProvider>
    </>
  );
};

export default MyBusinessPage;
