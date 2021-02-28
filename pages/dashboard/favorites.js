import React from "react";
import { Typography, Paper, Button } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import DashboardLayout from "../../components/DashboardLayout";

const useStyles = makeStyles((theme) => ({
  noBusiness: {
    backgroundColor: theme.palette.secondary.light,
    padding: "16px",
    "& > *": {
      margin: "8px 0px",
    },
  },
}));

const Favorites = () => {
  const classes = useStyles();
  const hasFavorites = false;

  return (
    <>
      <DashboardLayout>
        <Paper>
          {hasFavorites ? (
            <div>
              <Typography></Typography>
            </div>
          ) : (
            <div className={classes.noBusiness}>
              <Typography variant="h6">
                No Businessed have been saved to your favorites yet
              </Typography>
              <Typography>
                Browse through our directory, and click the 'Heart' icon on a
                business that you'd like to save for later
              </Typography>
              <Link href="/search">
                <a>
                  <Button variant="contained" color="secondary">
                    Browse
                  </Button>
                </a>
              </Link>
            </div>
          )}
        </Paper>
      </DashboardLayout>
    </>
  );
};

export default Favorites;
