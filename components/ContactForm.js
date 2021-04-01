import React from "react";
import { Button, TextField, makeStyles } from "./mui-components";
import Link from "next/link";

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

const ContactForm = ({ user, business_id }) => {
  const classes = useStyles();

  return (
    <form className={classes.paper}>
      <TextField
        name="userEmail"
        variant="outlined"
        value={user?.email || "E-mail"}
        onChange={() => console.log("user")}
        disabled
      />
      <TextField
        name="userName"
        label="Full Name"
        variant="outlined"
        disabled={!user?.email}
      />
      <TextField
        name="userMessage"
        label="Message"
        variant="outlined"
        rows={5}
        rowsMax={Infinity}
        multiline
        disabled={!user?.email}
      />
      {user?.email ? (
        <Button variant="contained" color="secondary">
          Send Message
        </Button>
      ) : (
        <Link href="/join">
          <a target="_blank">
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
