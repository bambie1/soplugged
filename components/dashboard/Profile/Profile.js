import React from "react";
import {
  Grid,
  CustomTextField,
  Typography,
  Button,
  makeStyles,
} from "@material/mui-components";
import { useForm } from "react-hook-form";

const useStyles = makeStyles((theme) => ({
  grid: { "& > *": { width: "100%" } },
  form: { maxWidth: "500px", margin: "40px auto" },
}));

const Profile = ({ user, email, submitHandler }) => {
  const classes = useStyles();
  const [infoChanged, setInfoChanged] = React.useState(false);
  const { register, handleSubmit, errors } = useForm();
  const onSubmit = async (data) => {
    setInfoChanged(false);
    await submitHandler(data);
  };

  return (
    <>
      <Typography variant="h1" gutterBottom={true} align="center">
        Edit Profile
      </Typography>
      <form className={classes.form} onSubmit={handleSubmit(onSubmit)}>
        <Grid container spacing={2}>
          <Grid item xs={12} className={classes.grid}>
            <CustomTextField
              color="secondary"
              name="full_name"
              label="Full Name"
              variant="outlined"
              defaultValue={user?.full_name || ""}
              onChange={() => setInfoChanged(true)}
              inputRef={register({
                required: "Please enter your first name",
                minLength: {
                  value: 3,
                  message: "Full name must be at least 3 characters",
                },
              })}
              error={!!errors.full_name}
              helperText={!!errors.full_name && errors.full_name.message}
            />
          </Grid>
          <Grid item xs={12} className={classes.grid}>
            <CustomTextField
              color="secondary"
              name="email"
              label="E-mail"
              variant="outlined"
              defaultValue={user?.email || email}
              inputRef={register}
              disabled
            />
          </Grid>
          <Grid item xs={12}>
            <Button
              type="submit"
              variant="contained"
              color="secondary"
              disabled={!infoChanged}
            >
              Update Profile
            </Button>
          </Grid>
        </Grid>
      </form>
    </>
  );
};

export default Profile;
