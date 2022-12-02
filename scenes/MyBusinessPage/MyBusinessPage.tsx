import { useRouter } from "next/router";
import { FC, useEffect, useRef, useState } from "react";
import toast from "react-hot-toast";
import { useSWRConfig } from "swr";
import create from "zustand";

import NameLocation from "@/components/BusinessForm/1_NameLocation";
import Categories from "@/components/BusinessForm/2_Categories";
import Description from "@/components/BusinessForm/3_Description";
import Contact from "@/components/BusinessForm/4_Contact";
import Images from "@/components/BusinessForm/5_Images";
import Review from "@/components/BusinessForm/6_Review";

import { steps as BusinessSteps } from "@/lib/stepsObject";
import { IBusiness } from "@/types/Business";
import { BackArrowButton } from "@/styled/BackArrowButton";
import Introduction from "@/components/BusinessForm/0_Introduction";
import { Button } from "@/styled/Button";
import {
  AlertDialog,
  AlertDialogDescription,
  AlertDialogLabel,
} from "@reach/alert-dialog";

interface Props {
  business: any;
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
}));

const MyBusinessPage: FC<Props> = ({ business }) => {
  const { mutate } = useSWRConfig();
  const router = useRouter();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [showExitModal, setShowExitModal] = useState(false);
  const { currentStep, steps, updateBusiness, handlePreviousStep } =
    useBusinessStore();

  const cancelRef = useRef() as React.MutableRefObject<HTMLButtonElement>;

  const open = () => setShowExitModal(true);
  const close = () => setShowExitModal(false);

  const handleExit = () => {
    router.push("/dashboard");
  };

  useEffect(() => {
    if (business) updateBusiness(business);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [business]);

  const percentage = (currentStep / steps.length) * 100;

  function _renderStepContent() {
    switch (currentStep) {
      case 0:
        return <Introduction />;
      case 1:
        return <NameLocation />;
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

  async function _submitForm(values: any, actions: any) {
    setIsSubmitting(true);

    const businessObj = {
      ...values,
      business_url:
        values.business_url && values.business_url !== "undefined"
          ? "https://" + values.business_url
          : "",
    };

    const updatedBusiness = await fetch("/api/user/updateBusiness", {
      method: !business ? "POST" : "PATCH",
      body: JSON.stringify({
        data: businessObj,
        isNew: !business,
      }),
    }).then((res) => res.json());

    if (updatedBusiness.statusCode !== 500) {
      toast.success(
        !business
          ? "Business created successfully"
          : "Business updated successfully"
      );
      mutate(`${process.env.NEXT_PUBLIC_SERVER_BASE_URL}/business`);
      mutate(
        `${process.env.NEXT_PUBLIC_SERVER_BASE_URL}/business?slug=${updatedBusiness.slug}`
      );
      router.push(`/business/${updatedBusiness.slug}`);
    } else {
      toast.error("An error occurred");
      setIsSubmitting(false);
    }

    actions.setSubmitting(false);
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
          <Button variant="text" onClick={open}>
            Exit
          </Button>
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
        <AlertDialog
          leastDestructiveRef={cancelRef}
          className=""
          onDismiss={close}
        >
          <AlertDialogLabel className="">Please Confirm</AlertDialogLabel>

          <AlertDialogDescription>
            Do you want to exit without saving your changes?
          </AlertDialogDescription>

          <div className="">
            <Button variant="text" ref={cancelRef} onClick={close}>
              No, go back
            </Button>
            <Button variant="outlined" onClick={handleExit}>
              Yes, Exit
            </Button>
          </div>
        </AlertDialog>
      )}
    </>
  );
};

export default MyBusinessPage;
