import { useRouter } from "next/router";
import dynamic from "next/dynamic";
import { FC } from "react";
import { useWindowSize } from "@reach/window-size";
import { Form, Formik } from "formik";
import toast from "react-hot-toast";
import slugify from "slugify";
import { useSWRConfig } from "swr";

import { BusinessForm } from "layouts/BusinessForm";
import { businessFormSchema } from "@/components/formik";
import NameLocation from "@/components/BusinessForm/forms/1_NameLocation";
import Categories from "@/components/BusinessForm/forms/2_Categories";
import Description from "@/components/BusinessForm/forms/3_Description";
import Contact from "@/components/BusinessForm/forms/4_Contact";
import Images from "@/components/BusinessForm/forms/5_Images";
import Review from "@/components/BusinessForm/forms/6_Review";
import { steps, stepsObject } from "@/lib/stepsObject";
import { useBusinessFormContext } from "@/context/businessFormContext";
import { updateBusiness } from "@/utils/updateBusiness";
import { Button } from "@/styled/Button";

import styles from "./MyBusinessPage.module.scss";

const Header = dynamic(() => import("../../components/Header/Header"));

interface Props {
  business: any;
  step?: any;
}

const MyBusinessPage: FC<Props> = ({ business, step }) => {
  const { mutate } = useSWRConfig();
  const { width } = useWindowSize();
  const router = useRouter();
  const { isNew, setIsNew, referralSource, referringBusiness } =
    useBusinessFormContext();

  const current = stepsObject[step] || 1;
  const isLastStep = current === steps.length - 1;

  function _renderStepContent() {
    switch (step) {
      case "category":
        return <Categories />;
      case "description":
        return <Description />;
      case "contact":
        return <Contact />;
      case "images":
        return <Images />;
      case "review":
        return <Review />;
      default:
        return <NameLocation />;
    }
  }

  const renderButtons = (isSubmitting: boolean) => {
    return (
      <div className={styles.buttons}>
        <Button
          type="button"
          variant="text"
          onClick={handleBack}
          disabled={current <= 1}
        >
          Go Back
        </Button>
        <Button type="submit" disabled={isSubmitting}>
          {current === steps.length - 1
            ? isNew
              ? "Complete setup"
              : "Submit and view page"
            : "Next"}
        </Button>
      </div>
    );
  };

  async function _submitForm(values: any, actions: any) {
    const businessObj = isNew
      ? {
          ...values,
          referral_source: referralSource,
          referral_business_slug: referringBusiness,
        }
      : { ...values };

    const res = await updateBusiness(businessObj, isNew);

    if (res.ok) {
      toast.success(
        isNew
          ? "Business created successfully"
          : "Business updated successfully"
      );
      mutate(`${process.env.NEXT_PUBLIC_SERVER_BASE_URL}/business`);
      setIsNew(false);
      const slug = slugify(values.business_name.trim(), {
        lower: true,
        remove: /[*+~.()'"!:@]/g,
      });
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
      router.push(`/my-business?step=${steps[current + 1].step}`, undefined, {
        shallow: true,
      });

      actions.setTouched({});
      actions.setSubmitting(false);
    }
  }

  function handleBack() {
    router.push(`/my-business?step=${steps[current - 1]["step"]}`, undefined, {
      shallow: true,
    });
  }

  return (
    <>
      <Header hideLinks={width >= 768} />
      <BusinessForm>
        <Formik
          initialValues={{ ...business }}
          validationSchema={businessFormSchema[current - 1]}
          validateOnChange={false}
          onSubmit={_handleSubmit}
        >
          {({ isSubmitting }) => (
            <>
              <Form id="businessForm" className={styles.form}>
                {_renderStepContent()}
                <div className={styles.navigation}>
                  <progress
                    value={(current / (steps.length - 1)) * 100}
                    max="100"
                    className={styles.progress}
                  >
                    {(current / (steps.length - 1)) * 100}%
                  </progress>
                  {renderButtons(isSubmitting)}
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
