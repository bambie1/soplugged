import React, { useState } from "react";
import Image from "next/image";
import {
  Container,
  Typography,
  Grid,
  CustomTextField,
  Button,
} from "@material/mui-components";
import { Alert } from "@material/mui-lab";
import SEO from "@components/SEO";
import { useForm } from "react-hook-form";
import { handleSubscription } from "../utils/handleSubscription";

import styles from "styles/Pro.module.scss";

const ProPage = () => {
  const { register, handleSubmit, errors, reset } = useForm();
  const [submitted, setSubmitted] = useState(false);

  const onSubmit = async (data, e) => {
    const response = await handleSubscription(
      { ...data, first_name: "", last_name: "" },
      "soplugged_for_business"
    );

    if (response.error) console.log("an error occured");
    else setSubmitted(true);

    e.target.reset();
  };

  return (
    <>
      <SEO title="Professional help for your business' digital needs | SoPluggedPRO" />
      <Container className={styles.page}>
        <Grid container spacing={3} className={styles.hero}>
          <Grid item xs={12} md={6}>
            <Typography className={styles.comingSoon}>
              COMING SOON...
            </Typography>
            <Typography variant="h1" className={styles.heading}>
              SoPlugged<sup>PRO</sup>
            </Typography>
            <Typography className={styles.tagLine}>
              Professional help for your business' digital needs
            </Typography>

            <section className={styles.info}>
              <Typography gutterBottom>
                Everything you need to launch and improve your digital presence
                as a small to medium-sized business.
              </Typography>

              <Typography gutterButtom>
                From strategic recommendations to professional services
                (personalized consultation, web design, and email marketing),
                our team of experts is ready to work with you and provide all
                the support you need to grow your business.
              </Typography>

              <form className={styles.form} onSubmit={handleSubmit(onSubmit)}>
                <Typography variant="body2" gutterButtom>
                  If you'd like to know when you can access this feature, add
                  your e-mail below to get notified
                </Typography>
                <br />
                <Grid container spacing={1} className={styles.formGrid}>
                  <Grid item xs={12} sm={8}>
                    <CustomTextField
                      color="secondary"
                      variant="outlined"
                      label="Email address"
                      name="email"
                      id="emailAddress"
                      inputRef={register({
                        required: "Please enter your e-mail address",
                        pattern: {
                          value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                          message: "Please enter a valid email address",
                        },
                      })}
                      error={!!errors.email}
                      helperText={!!errors.email && errors.email.message}
                      fullWidth
                    />
                  </Grid>
                  <Grid item xs={12} sm={4}>
                    <Button
                      type="submit"
                      variant="contained"
                      color="secondary"
                      style={{ maxHeight: "3.5rem" }}
                    >
                      Notify me!
                    </Button>
                  </Grid>
                </Grid>
                {submitted && (
                  <Alert
                    severity="success"
                    variant="outlined"
                    style={{ border: "none" }}
                  >
                    You'll receive an e-mail from us shortly
                  </Alert>
                )}
              </form>
            </section>
          </Grid>
          <Grid item xs={12} md={6} className={styles.imageGrid}>
            <Image
              placeholder="blur"
              src="/images/soplugged_pro.png"
              alt="Business consult session"
              width={400}
              height={400}
              priority
            />
          </Grid>
        </Grid>
      </Container>
    </>
  );
};

export default ProPage;
