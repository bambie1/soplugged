import React from "react";
import {
  Button,
  CustomTextField,
  makeStyles,
  Typography,
} from "@material/mui-components";
import Link from "next/link";
import { useForm } from "react-hook-form";
import swal from "sweetalert";
import { Alert } from "@material/mui-lab";
import * as Sentry from "@sentry/node";

const useStyles = makeStyles((theme) => ({
  paper: {
    padding: "8px",
    maxWidth: "500px",
    margin: "auto",
    "& > *": {
      width: "100%",
      margin: "5px 0px",
    },
  },
}));

const ContactForm = ({ user, business_email }) => {
  const classes = useStyles();
  const { register, handleSubmit, errors, reset } = useForm();
  const [showError, setShowError] = React.useState(false);

  const onSubmit = async (data) => {
    try {
      const res = await fetch(
        `${process.env.NEXT_PUBLIC_SERVER_BASE_URL}/emails`,
        {
          method: "POST",
          headers: {
            Accept: "application/json",
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            email: {
              from: "hello@soplugged.com",
              to: business_email,
              subject: `New Message on SoPlugged from ${
                data.userName || "a customer"
              }`,
              content: data.userMessage,
              reply_to: user.email,
            },
          }),
        }
      );
      if (!res.ok) {
        throw new Error("HTTP status " + res.status);
      } else {
        swal({
          title: "Message sent!",
          text: `Your message has been sent to the owner, and they will be in touch.\n\n Please keep an eye on ${user.email} `,
          icon: "success",
          button: "OK!",
        });
        reset();
      }
    } catch (error) {
      setShowError(true);
      Sentry.captureException(error);
    }
  };

  return (
    <form className={classes.paper} onSubmit={handleSubmit(onSubmit)}>
      {showError && (
        <Alert severity="error">
          An error occured while sending your message. Please try again later
        </Alert>
      )}
      <CustomTextField
        color="secondary"
        name="userName"
        label="Full Name"
        variant="outlined"
        inputRef={register({
          required: "Please enter your name",
        })}
        error={!!errors.userName}
        helperText={!!errors.userName && errors.userName.message}
        disabled={!user?.email}
      />
      <CustomTextField
        color="secondary"
        name="userMessage"
        label="Message"
        variant="outlined"
        rows={5}
        rowsMax={7}
        multiline
        inputRef={register({
          required: "You can't send an empty message",
        })}
        error={!!errors.userMessage}
        helperText={!!errors.userMessage && errors.userMessage.message}
        disabled={!user?.email}
      />
      {user?.email ? (
        <>
          <Button
            variant="contained"
            color="secondary"
            type="submit"
            disabled={user?.email == business_email}
          >
            Send Message
          </Button>
          <Typography variant="caption">
            {user?.email && `Sending message as ${user.email}`}
          </Typography>
        </>
      ) : (
        <Link href="/join">
          <a>
            <Button variant="outlined" color="secondary">
              Sign In to send Message
            </Button>
          </a>
        </Link>
      )}
    </form>
  );
};

export default ContactForm;
