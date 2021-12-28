import { Form, Formik, FormikHelpers } from "formik";
import dynamic from "next/dynamic";
import toast from "react-hot-toast";

import { FormikInput } from "@/components/formik";
import { Button } from "@/styled/Button";
import { handleSubscription } from "@/utils/handleSubscription";

import styles from "./ProPage.module.scss";

const Header = dynamic(() => import("../../components/Header/Header"));

interface Values {
  email: string;
  first_name: string;
  last_name: string;
}

const ComingSoon = () => {
  const handleSubmit = async (
    values: Values,
    { setSubmitting, resetForm }: FormikHelpers<Values>
  ) => {
    const res = await handleSubscription(values, "newsletter");

    if (res.ok) {
      toast.success("Successfully added to waitlist!");
    } else {
      toast.error("An error occurred");
    }
    setSubmitting(false);
    resetForm();
  };

  return (
    <>
      <Header color="blue" />

      <div className={styles.comingSoonWrapper}>
        <div className={`container ${styles.content}`}>
          <div className={styles.text}>
            <h3 className={styles.tagLine}>Coming Soon...</h3>
            <h1>Scale your business with ease</h1>
            <p>
              From strategic recommendations to professional services
              (personalized consultation, web design, and email marketing), our
              team of experts is ready to work with you and provide all the
              support you need to grow your business.
            </p>

            <Formik
              initialValues={{ email: "", first_name: "", last_name: "" }}
              onSubmit={handleSubmit}
            >
              {({ isSubmitting }) => (
                <Form className={styles.proForm}>
                  <FormikInput
                    type="email"
                    name="email"
                    placeholder="john@gmail.com"
                    label="E-mail address"
                  />
                  <Button type="submit" disabled={isSubmitting}>
                    Join the waitlist
                  </Button>
                </Form>
              )}
            </Formik>
          </div>
          <aside className={styles.image}></aside>
        </div>
      </div>
    </>
  );
};

export { ComingSoon };
