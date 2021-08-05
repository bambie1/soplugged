import React from "react";
import {
  Container,
  makeStyles,
  Paper,
  Box,
  IconButton,
  Button,
  Typography,
} from "@material/mui-components";
import { DashboardNav } from "@components/index";
import { FavoriteIcon, AccountCircleIcon, HomeIcon } from "@material/mui-icons";
import Link from "next/link";
import SEO from "../../SEO";

const useStyles = makeStyles((theme) => ({
  root: {
    zIndex: "1",
    background: "white",
    display: "flex",

    [theme.breakpoints.down("sm")]: {
      minHeight: "100vh",
    },
  },
  container: {
    marginBottom: "60px",
    [theme.breakpoints.up("sm")]: {
      marginBottom: "20px",
      marginTop: "20px",
    },
  },
  desktop: {
    display: "none",
    [theme.breakpoints.up("sm")]: {
      display: "flex",
      // minHeight: "600px",
    },
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
  link: { alignSelf: "flex-end", marginLeft: "8px" },
}));

const DashboardLayout = ({ title, children, position }) => {
  const classes = useStyles({ position });

  return (
    <>
      <SEO
        title={title}
        description={`View your dashboard as a user. ${title}`}
      />
      <main className={classes.root}>
        <Container maxWidth="lg" className={classes.container}>
          <Paper
            className={classes.desktop}
            style={{ minHeight: "600px" }}
            elevation={4}
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
            <Box width="100%" p={2} display="flex" flexDirection="column">
              {children}
            </Box>
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
            <a
              href="https://soplugged.kampsite.co/"
              target="_blank"
              className={classes.link}
            >
              <Button color="secondary">Make a suggestion</Button>
            </a>
          </div>
          <br></br>
        </Container>
      </main>
    </>
  );
};

export default DashboardLayout;
