import React, { useState } from "react";
import { useForm } from "react-hook-form";
import {
  Button,
  Typography,
  Grid,
  TextField,
  Container,
  makeStyles,
} from "@material/mui-components";
import { Alert } from "@material/mui-lab";
import * as Sentry from "@sentry/node";

// no external styles used here

const useStyles = makeStyles((theme) => ({
  grid: { justifyContent: "center", marginBottom: "8px" },
  subscribe: {
    padding: "40px 8px",
    // background: "#fffaf2",
    marginTop: "40px",
  },
  container: {
    padding: "0px",
    "& > *": {
      margin: "8px 0px",
    },
    textAlign: "center",
  },
}));

const SubscribeForm = () => {
  const classes = useStyles();
  const { register, handleSubmit, errors, reset } = useForm();
  const [submitted, setSubmitted] = useState(false);
  const onSubmit = async (data, e) => {
    try {
      const res = await fetch(
        `${process.env.NEXT_PUBLIC_SERVER_BASE_URL}/newsletter_subscriptions`,
        {
          method: "POST",
          headers: {
            Accept: "application/json",
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            subscription: data,
          }),
        }
      );
      if (!res.ok) {
        throw new Error("HTTP status " + res.status);
      } else {
        setSubmitted(true);
        e.target.reset();
      }
    } catch (error) {
      Sentry.captureException(error);
    }
  };

  return (
    <div className={classes.subscribe}>
      <Container maxWidth="md" className={classes.container}>
        <Typography variant="h6" component="h3">
          Stay Plugged-in
        </Typography>
        <Typography>
          Join our mailing list to receive news and updates on new service
          features, blog posts, and be in the know!
        </Typography>
        <form onSubmit={handleSubmit(onSubmit)}>
          <Grid container spacing={1} className={classes.grid}>
            <Grid item xs={12} sm={6} md={4}>
              <TextField
                variant="outlined"
                id="firstName"
                label="First Name"
                name="first_name"
                inputRef={register({
                  required: "Please enter your first name",
                  minLength: {
                    value: 2,
                    message: "First name must be at least 2 characters",
                  },
                })}
                error={!!errors.first_name}
                helperText={!!errors.first_name && errors.first_name.message}
                fullWidth
                className={classes.input}
              />
            </Grid>
            <Grid item xs={12} sm={6} md={4}>
              <TextField
                variant="outlined"
                label="Last Name"
                id="lastName"
                name="last_name"
                inputRef={register({
                  required: "Please enter your last name",
                })}
                error={!!errors.last_name}
                helperText={!!errors.last_name && errors.last_name.message}
                fullWidth
                className={classes.input}
              />
            </Grid>
            <Grid item xs={12} sm={6} md={4}>
              <TextField
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
                className={classes.input}
              />
            </Grid>
            <Grid item xs={12} sm={4}>
              <Button type="submit" variant="outlined" color="secondary">
                SUBSCRIBE
              </Button>
            </Grid>
          </Grid>
          {submitted && (
            <Alert severity="info">
              Thanks for Plugging in! You'll receive an e-mail from us shortly
            </Alert>
          )}
        </form>
      </Container>
    </div>
  );
};

export default SubscribeForm;