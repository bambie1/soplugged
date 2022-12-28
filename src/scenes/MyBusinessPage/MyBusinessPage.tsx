import { useRouter } from "next/router";
import { FC, useEffect, useRef, useState } from "react";
import create from "zustand";

import NameLocation from "@/src/components/BusinessForm/1_NameLocation";
import Categories from "@/src/components/BusinessForm/2_Categories";
import Description from "@/src/components/BusinessForm/3_Description";
import Contact from "@/src/components/BusinessForm/4_Contact";
import Images from "@/src/components/BusinessForm/5_Images";
import Review from "@/src/components/BusinessForm/6_Review";

import { steps as BusinessSteps } from "@/lib/stepsObject";
import { IBusiness } from "@/types/Business";
import { BackArrowButton } from "@/styled/BackArrowButton";
import Introduction from "@/src/components/BusinessForm/0_Introduction";
import { Button } from "@/styled/Button";
import ConfirmModal from "@/src/components/ConfirmModal";
import { QuestionMarkCircleIcon } from "@heroicons/react/outline";
import MessageModal from "@/src/components/MessageModal";

interface Props {
  business: IBusiness;
}

interface NewOrOldBusiness extends IBusiness {
  referral_source?: string;
  referral_business_slug?: string;
}

interface FormState {
  currentStep: number;
  business: NewOrOldBusiness;
  updateBusiness: (business: NewOrOldBusiness) => void;
  handleNextStep: () => void;
  handlePreviousStep: () => void;
  steps: typeof BusinessSteps;
  updateCurrentStep: (value: number) => void;
}

export const useBusinessStore = create<FormState>()((set) => ({
  currentStep: 0,
  steps: BusinessSteps,
  business: {
    business_description: "",
    business_location: "",
    business_name: "",
    category: "",
    slug: "",
    verified: true,
  },
  updateBusiness: (business) => set(() => ({ business })),
  handleNextStep: () =>
    set((state) => ({ currentStep: state.currentStep + 1 })),
  handlePreviousStep: () => {
    return set(({ currentStep }) => ({ currentStep: currentStep - 1 }));
  },
  updateCurrentStep: (value) => set(() => ({ currentStep: value })),
}));

const MyBusinessPage: FC<Props> = ({ business }) => {
  const router = useRouter();
  const [showExitModal, setShowExitModal] = useState(false);
  const [showMessageModal, setShowMessageModal] = useState(false);
  const {
    currentStep,
    steps,
    updateBusiness,
    handlePreviousStep,
    business: StoreBusiness,
  } = useBusinessStore();

  const cancelRef = useRef() as React.MutableRefObject<HTMLButtonElement>;

  const openExitModal = () => setShowExitModal(true);
  const closeExitModal = () => setShowExitModal(false);

  const openMessageModal = () => setShowMessageModal(true);
  const closeMessageModal = () => setShowMessageModal(false);

  const handleExit = () => {
    router.push("/dashboard");
  };

  useEffect(() => {
    if (business)
      updateBusiness({
        ...business,
        business_url: business?.business_url
          ?.replace("https://", "")
          .replace("https://", ""),
      });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [business]);

  const percentage = (currentStep / steps.length) * 100;

  function _renderStepContent() {
    switch (currentStep) {
      case 0:
        return <Introduction />;
      case 1:
        return <NameLocation initialName={business?.business_name} />;
      case 2:
        return <Categories />;
      case 3:
        return <Description />;
      case 4:
        return <Images />;
      case 5:
        return <Contact />;
      default:
        return <Review />;
    }
  }

  return (
    <>
      {_renderStepContent()}

      <div className="my-container fixed left-0 right-0 top-0 bg-white">
        <div className="flex h-16 items-center justify-between">
          <BackArrowButton
            disabled={currentStep === 0}
            onClick={handlePreviousStep}
          >
            Go back
          </BackArrowButton>

          <div className="flex items-center gap-2 md:gap-4">
            <button title="Help" onClick={openMessageModal}>
              <QuestionMarkCircleIcon
                className="mr-1 h-8 w-8"
                strokeWidth={0.8}
              />
            </button>
            <Button
              variant="text"
              onClick={() => {
                if (
                  !StoreBusiness?.business_name ||
                  shallowEqual(StoreBusiness, business)
                )
                  handleExit();
                else openExitModal();
              }}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={0.5}
                stroke="currentColor"
                className="mr-1 h-6 w-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M15.75 9V5.25A2.25 2.25 0 0013.5 3h-6a2.25 2.25 0 00-2.25 2.25v13.5A2.25 2.25 0 007.5 21h6a2.25 2.25 0 002.25-2.25V15m3 0l3-3m0 0l-3-3m3 3H9"
                />
              </svg>
              Exit
            </Button>
          </div>
        </div>

        {currentStep > 0 && (
          <div className="mx-auto mt-5 flex h-1 w-[90%] max-w-lg flex-col overflow-hidden rounded-lg bg-secondary/30">
            <div
              style={{ width: `${percentage}%` }}
              className="h-full bg-gradient-to-r from-secondary to-primary transition-width duration-300"
            ></div>
          </div>
        )}
      </div>

      {showExitModal && (
        <ConfirmModal
          cancelRef={cancelRef}
          onDismiss={closeExitModal}
          handleSuccess={handleExit}
          description="Do you want to exit without saving your changes?"
          successTitle="Yes, Exit"
        />
      )}

      {showMessageModal && (
        <MessageModal cancelRef={cancelRef} onDismiss={closeMessageModal} />
      )}
    </>
  );
};

export default MyBusinessPage;

function shallowEqual(object1: any, object2: any) {
  if (!object1 && !object2) return true;

  if (!object1 || !object2) return false;

  const keys1 = Object.keys(object1);
  const keys2 = Object.keys(object2);
  if (keys1.length !== keys2.length) {
    return false;
  }

  for (let key of keys1) {
    if (object1[key] !== object2[key]) {
      return false;
    }
  }
  return true;
}
