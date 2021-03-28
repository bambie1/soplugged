import React from "react";
import {
  Container,
  makeStyles,
  Paper,
  IconButton,
} from "@/components/mui-components";
import Head from "next/head";
import DashboardNav from "@/components/DashboardNav";
import { FavoriteIcon, AccountCircleIcon, HomeIcon } from "./mui-icons";
import { Button, Typography } from "@material-ui/core";
import Link from "next/link";

const useStyles = makeStyles((theme) => ({
  root: {
    zIndex: "1",
    background: "white",
    display: "flex",
    paddingTop: "70px",
    minHeight: "100vh",
    [theme.breakpoints.up("sm")]: {
      height: "100vh",
    },
  },
  container: {
    marginBottom: "60px",
    [theme.breakpoints.up("sm")]: {
      // alignSelf: "center",
      marginBottom: "20px",
      marginTop: "20px",
    },
  },
  desktop: {
    display: "none",
    [theme.breakpoints.up("sm")]: {
      display: "flex",
    },
  },
  children: {
    padding: "16px",
    width: "100%",
    display: "flex",
    flexDirection: "column",
  },
  mobile: {
    display: "block",
    [theme.breakpoints.up("sm")]: {
      display: "none",
    },
  },
  desktopNav: ({ position }) => ({
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-evenly",
    background: "#fffaf2",
    "& > a:first-of-type": {
      background: position === 0 && theme.palette.primary.main,
    },
  }),
  navLink: ({ position }) => ({
    textAlign: "center",
    padding: "8px",
    "&:nth-child(2)": {
      background: position === 1 && theme.palette.primary.main,
    },
    "&:nth-child(3)": {
      background: position === 2 && theme.palette.primary.main,
    },
  }),
}));

const DashboardLayout = ({ title, children, position }) => {
  const classes = useStyles({ position });

  return (
    <>
      <Head>
        <title> {title}</title>
      </Head>
      <main className={classes.root}>
        <Container maxWidth="lg" className={classes.container}>
          <Paper
            className={classes.desktop}
            elevation={4}
            style={{ height: "650px" }}
          >
            <div className={classes.desktopNav}>
              <Link href="/dashboard">
                <a className={classes.navLink}>
                  <IconButton aria-label="home" color="secondary">
                    <HomeIcon />
                  </IconButton>
                  <Typography>Home</Typography>
                </a>
              </Link>
              <Link href="/dashboard/favorites">
                <a className={classes.navLink}>
                  <IconButton aria-label="favorites" color="secondary">
                    <FavoriteIcon />
                  </IconButton>
                  <Typography>Favorites</Typography>
                </a>
              </Link>
              <Link href="/dashboard/profile">
                <a className={classes.navLink}>
                  <IconButton aria-label="profile" color="secondary">
                    <AccountCircleIcon />
                  </IconButton>
                  <Typography>Profile</Typography>
                </a>
              </Link>
            </div>
            <div className={classes.children}>{children}</div>
          </Paper>

          <div className={classes.mobile}>
            {children ? <>{children}</> : <p>Loading ...</p>}
            <DashboardNav position={position} fixed={true} />
          </div>
          <br></br>
          <div className={classes.desktop}>
            <Link href="/search">
              <a>
                <Button variant="contained" color="secondary">
                  Back to Directory
                </Button>
              </a>
            </Link>
          </div>
          <br></br>
        </Container>
      </main>
    </>
  );
};

export default DashboardLayout;
