import React from "react";
import {
  Grid,
  Paper,
  Avatar,
  TextField,
  Divider,
  Typography,
  Button,
  makeStyles,
} from "./mui-components";

const useStyles = makeStyles((theme) => ({
  grid: { "& > *": { width: "100%" } },
  form: { maxWidth: "500px", margin: "40px auto" },
}));

const Dashboard = ({ data, email }) => {
  const classes = useStyles();

  return (
    <>
      <Typography variant="h1" gutterBottom={true} align="center">
        Edit Profile
      </Typography>
      <form className={classes.form}>
        <Grid container spacing={2}>
          <Grid item xs={12} className={classes.grid}>
            <TextField name="fullName" label="Full Name" variant="outlined" />
          </Grid>
          <Grid item xs={12} className={classes.grid}>
            <TextField
              name="email"
              label="E-mail"
              variant="outlined"
              defaultValue={email}
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

export default Dashboard;
