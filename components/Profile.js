import React from "react";
import {
  Grid,
  TextField,
  Typography,
  Button,
  makeStyles,
} from "./mui-components";
import { useForm } from "react-hook-form";

const useStyles = makeStyles((theme) => ({
  grid: { "& > *": { width: "100%" } },
  form: { maxWidth: "500px", margin: "40px auto" },
}));

const Profile = ({ user, email, submitHandler }) => {
  const classes = useStyles();
  const { register, handleSubmit, watch, errors } = useForm();

  const onSubmit = (data) => submitHandler({ fullName: data.fullName, email });

  return (
    <>
      <Typography variant="h1" gutterBottom={true} align="center">
        Edit Profile
      </Typography>
      <form className={classes.form} onSubmit={handleSubmit(onSubmit)}>
        <Grid container spacing={2}>
          <Grid item xs={12} className={classes.grid}>
            <TextField
              name="fullName"
              label="Full Name"
              variant="outlined"
              defaultValue={user?.full_name || ""}
              inputRef={register}
            />
          </Grid>
          <Grid item xs={12} className={classes.grid}>
            <TextField
              name="email"
              label="E-mail"
              variant="outlined"
              defaultValue={user?.email || email}
              inputRef={register}
              disabled
            />
          </Grid>
          <Grid item xs={12}>
            <Button type="submit" variant="contained" color="secondary">
              Update Profile
            </Button>
          </Grid>
        </Grid>
      </form>
    </>
  );
};

export default Profile;
