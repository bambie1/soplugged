import { useRouter } from "next/router";
import { FC, useState } from "react";
import toast from "react-hot-toast";
import { useSWRConfig } from "swr";
import create from "zustand";

import Header from "@/components/Header/Header";
import NameLocation from "@/components/BusinessForm/1_NameLocation";
import Categories from "@/components/BusinessForm/2_Categories";
import Description from "@/components/BusinessForm/3_Description";
import Contact from "@/components/BusinessForm/4_Contact";
import Images from "@/components/BusinessForm/5_Images";
import Review from "@/components/BusinessForm/6_Review";
import { TermsAndConditions } from "@/components/BusinessForm/TermsAndConditions";

import { Button } from "@/styled/Button";

import { steps as BusinessSteps } from "@/lib/stepsObject";
import { IBusiness } from "@/types/Business";

import styles from "./MyBusinessPage.module.scss";

interface Props {
  business: any;
}

interface FormState {
  currentStep: number;
  business: IBusiness | null;
  updateBusiness: (business: IBusiness) => void;
  handleNextStep: () => void;
  handlePreviousStep: () => void;
  steps: typeof BusinessSteps;
}

export const useBusinessStore = create<FormState>()((set) => ({
  currentStep: 0,
  steps: BusinessSteps,
  business: null,
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
  const { currentStep, steps } = useBusinessStore();

  function _renderStepContent() {
    switch (currentStep) {
      case 0:
        return <TermsAndConditions />;
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

    const businessObj = !business
      ? {
          ...values,
          business_url:
            values.business_url && values.business_url !== "undefined"
              ? "https://" + values.business_url
              : "",
          // referral_source: referralSource,
          // referral_business_slug: referringBusiness,
        }
      : { ...values, business_url: "https://" + values.business_url };

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
      <Header variant="auth" />

      {_renderStepContent()}
    </>
  );
};

export default MyBusinessPage;
