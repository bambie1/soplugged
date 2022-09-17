import { useRouter } from "next/router";
import dynamic from "next/dynamic";
import { FC, useEffect } from "react";
import { Form, Formik } from "formik";
import toast from "react-hot-toast";
import slugify from "slugify";
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
import { updateBusiness } from "@/utils/updateBusiness";
import { Button } from "@/styled/Button";

import styles from "./MyBusinessPage.module.scss";

interface Props {
  business: any;
  step?: any;
}

const MyBusinessPage: FC<Props> = ({ business }) => {
  const { mutate } = useSWRConfig();
  const router = useRouter();
  const {
    referralSource,
    referringBusiness,
    currentStep,
    setCurrentStep,
    formSteps,
  } = useBusinessFormContext();

  const isLastStep = currentStep === formSteps.length - 1;

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
        return <Contact />;
      case 4:
        return <Images />;
      case 5:
        return <Review />;
      default:
        return <NameLocation />;
    }
  }

  const renderButtons = () => {
    return (
      <div className={styles.buttons}>
        <Button
          type="button"
          variant="text"
          onClick={handleBack}
          disabled={currentStep === 0}
        >
          Go Back
        </Button>
        <Button type="submit">
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
    const businessObj = !business
      ? {
          ...values,
          business_url: "https://" + values.business_url,
          referral_source: referralSource,
          referral_business_slug: referringBusiness,
        }
      : { ...values, business_url: "https://" + values.business_url };

    const res = await updateBusiness(businessObj, !business);

    if (res.ok) {
      toast.success(
        !business
          ? "Business created successfully"
          : "Business updated successfully"
      );
      mutate(`${process.env.NEXT_PUBLIC_SERVER_BASE_URL}/business`);
      const slug = slugify(values.business_name.trim(), {
        lower: true,
        remove: /[*+~.()'"!:@]/g,
      });
      mutate(
        `${process.env.NEXT_PUBLIC_SERVER_BASE_URL}/business?slug=${slug}`
      );
      router.push(`/business/${slug}`);
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
              <Form id="businessForm" className={styles.form}>
                {_renderStepContent()}
                <div className={styles.navigation}>
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
