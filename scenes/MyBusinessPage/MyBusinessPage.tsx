import { useRouter } from "next/router";
import { FC, useEffect, useState } from "react";
import { Form, Formik } from "formik";
import toast from "react-hot-toast";
import { useSWRConfig } from "swr";

import { BusinessForm } from "layouts/BusinessForm";
import Header from "@/components/Header/Header";
import { businessFormSchema } from "@/components/formik";
import NameLocation from "@/components/BusinessForm/forms/1_NameLocation";
import Categories from "@/components/BusinessForm/forms/2_Categories";
import Description from "@/components/BusinessForm/forms/3_Description";
import Contact from "@/components/BusinessForm/forms/4_Contact";
import Images from "@/components/BusinessForm/forms/5_Images";
import Review from "@/components/BusinessForm/forms/6_Review";
import { useBusinessFormContext } from "@/context/businessFormContext";
import { Button } from "@/styled/Button";

import styles from "./MyBusinessPage.module.scss";

interface Props {
  business: any;
}

const MyBusinessPage: FC<Props> = ({ business }) => {
  const { mutate } = useSWRConfig();
  const router = useRouter();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const {
    referralSource,
    referringBusiness,
    currentStep,
    setCurrentStep,
    formSteps,
  } = useBusinessFormContext();

  const isLastStep = currentStep === formSteps.length - 1;
  const isWideStep = currentStep === 1 || currentStep === 2;

  const queryStep = parseInt(
    typeof router.query?.start === "string" ? router.query.start : "-1"
  );

  useEffect(() => {
    if (queryStep !== -1) setCurrentStep(queryStep);
  }, []);

  function _renderStepContent() {
    switch (currentStep) {
      case 1:
        return <Categories />;
      case 2:
        return <Description />;
      case 3:
        return <Images />;
      case 4:
        return <Contact />;
      case 5:
        return <Review />;
      default:
        return <NameLocation />;
    }
  }

  const renderButtons = () => {
    return (
      <div className="mx-auto flex w-full max-w-xl p-2 [&>*]:flex-1">
        <Button type="submit" disabled={isSubmitting}>
          {currentStep === formSteps.length - 1
            ? !business
              ? "Complete setup"
              : "Submit and view page"
            : "Next"}
        </Button>
      </div>
    );
  };

  async function _submitForm(values: any, actions: any) {
    setIsSubmitting(true);

    const businessObj = !business
      ? {
          ...values,
          business_url: "https://" + values.business_url,
          referral_source: referralSource,
          referral_business_slug: referringBusiness,
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
    }

    actions.setSubmitting(false);
  }

  function _handleSubmit(values: any, actions: any) {
    if (isLastStep) {
      _submitForm(values, actions);
    } else {
      setCurrentStep((prevStep: number) => prevStep + 1);
    }
  }

  const handleBack = () => {
    setCurrentStep((prevStep: number) => prevStep - 1);
  };

  return (
    <>
      <Header variant="auth" />
      <BusinessForm>
        <Formik
          initialValues={{
            ...business,
            business_url: business?.business_url
              ?.replace("https://", "")
              .replace("https://", ""),
          }}
          validationSchema={businessFormSchema[currentStep]}
          onSubmit={_handleSubmit}
        >
          {() => (
            <>
              <Form
                id="businessForm"
                className={`grid w-full gap-7 px-2 ${
                  !isWideStep && "max-w-xl"
                } mx-auto`}
              >
                {!(currentStep === 0 || isSubmitting) && (
                  <div className="absolute top-20 left-4 inline-flex md:left-0 md:-top-10">
                    <Button type="button" variant="text" onClick={handleBack}>
                      Go Back
                    </Button>
                  </div>
                )}

                {_renderStepContent()}
                <div className="fixed bottom-0 left-0 flex w-full flex-col shadow-bottom-nav md:absolute md:shadow-none">
                  <progress
                    value={(currentStep / (formSteps.length - 1)) * 100}
                    max="100"
                    className={styles.progress}
                  >
                    {(currentStep / (formSteps.length - 1)) * 100}%
                  </progress>
                  {renderButtons()}
                </div>
              </Form>
            </>
          )}
        </Formik>
      </BusinessForm>
    </>
  );
};

export default MyBusinessPage;
