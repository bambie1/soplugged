import React, { useState } from "react";
import {
  Avatar,
  Container,
  Typography,
  Grid,
  Paper,
  Divider,
  Button,
  List,
  ListItemText,
  ListItem,
  ListItemIcon,
} from "@material-ui/core";
import FavoriteIcon from "@material-ui/icons/Favorite";
import ContactMailIcon from "@material-ui/icons/ContactMail";
import { makeStyles } from "@material-ui/core/styles";
import Head from "next/head";
import Link from "next/link";
import EditIcon from "@material-ui/icons/Edit";

const useStyles = makeStyles((theme) => ({
  page: {
    padding: theme.spacing(10, 1, 2),
    minHeight: "85vh",
    textAlign: "center",
  },
  paper: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    padding: "8px 3px",
    marginBottom: "16px",
    "& > *": { margin: "8px 0px" },
  },
  profilePic: {
    width: "70px",
    height: "70px",
  },
  profileSection: {
    marginBottom: "20px",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
  noBusiness: {
    backgroundColor: theme.palette.secondary.light,
    padding: "16px",
    "& > *": {
      margin: "8px 0px",
    },
  },
}));

const Dashboard = ({ children, ...props }) => {
  const classes = useStyles();

  return (
    <>
      <Head>
        <meta
          name="description"
          content="Online platform connecting you to black-owned businesses across Canada. If you're an entrepreneur, register your business to be featured on our platform or join our mailing list to stay plugged in."
        />
        <title>My Dashboard | SoPlugged</title>
      </Head>
      <Container maxWidth="lg" className={classes.page}>
        <Typography variant="h5" component="h1">
          My SoPlugged Dashboard
        </Typography>
        <Grid container spacing={2} style={{ marginTop: "16px" }}>
          <Grid item xs={12} sm={4}>
            <Paper className={classes.paper}>
              <div className={classes.profileSection}>
                <Avatar className={classes.profilePic}>B</Avatar>
                <Typography variant="caption">Benaiah Barango</Typography>
              </div>
              <Divider />
              <Typography variant="body2">Joined in 2020</Typography>
              <Link href="/edit-business/step1">
                <a>
                  <Button
                    variant="outlined"
                    startIcon={<EditIcon />}
                    size="small"
                  >
                    Edit Profile
                  </Button>
                </a>
              </Link>
            </Paper>
            <Paper>
              <List component="nav" aria-label="main mailbox folders">
                <ListItem button component="a" href="#favorites">
                  <ListItemIcon>
                    <FavoriteIcon />
                  </ListItemIcon>
                  <ListItemText primary="My Favorites" />
                </ListItem>
                <ListItem button>
                  <ListItemIcon>
                    <ContactMailIcon />
                  </ListItemIcon>
                  <ListItemText primary="Businesses contacted" />
                </ListItem>
              </List>
            </Paper>
          </Grid>
          <Grid item xs={12} sm={8}>
            {children}
          </Grid>
        </Grid>
      </Container>
    </>
  );
};

export default Dashboard;
