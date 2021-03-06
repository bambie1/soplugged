import React, { useState } from "react";
import {
  AppBar,
  Toolbar,
  Button,
  useScrollTrigger,
  IconButton,
  ListItemText,
  ListItem,
  List,
  ListItemIcon,
  SwipeableDrawer,
  Divider,
} from "@material-ui/core";
import Link from "next/link";
import Image from "next/image";
import { useRouter } from "next/router";
import { makeStyles } from "@material-ui/core/styles";
import ListAltIcon from "@material-ui/icons/ListAlt";
import MenuIcon from "@material-ui/icons/Menu";
import ExitToAppIcon from "@material-ui/icons/ExitToApp";
import BusinessCenterIcon from "@material-ui/icons/BusinessCenter";
import PowerIcon from "@material-ui/icons/Power";
import HomeIcon from "@material-ui/icons/Home";
import { useAuth } from "../contexts/auth";
import SignOutAlert from "./SignOutAlert";

const useStyles = makeStyles({
  list: {
    width: 250,
  },
  mobileLink: {
    display: "flex",
    alignItems: "center",
  },
});

function HideOnScroll(props) {
  const { children } = props;
  const trigger = useScrollTrigger({
    disableHysteresis: true,
    threshold: 0,
  });

  if (props.home === true) {
    return React.cloneElement(children, {
      elevation: trigger ? 4 : 0,
      color: trigger ? "primary" : "transparent",
    });
  }
  return children;
}

const Header = (props) => {
  const router = useRouter();
  const classes = useStyles();
  const { user } = useAuth();
  const anchor = "right";
  const [state, setState] = useState({
    right: false,
  });
  const [signOut, setSignOut] = useState(false);
  const handleSignOut = async () => {
    setSignOut(true);
  };

  const toggleDrawer = (anchor, open) => (event) => {
    if (
      event &&
      event.type === "keydown" &&
      (event.key === "Tab" || event.key === "Shift")
    ) {
      return;
    }
    setState({ ...state, [anchor]: open });
  };
  const list = (anchor) => (
    <div
      role="presentation"
      onClick={toggleDrawer(anchor, false)}
      onKeyDown={toggleDrawer(anchor, false)}
    >
      <List className={classes.list}>
        <ListItem>
          <Link href="/">
            <a className={classes.mobileLink}>
              <>
                <ListItemIcon>
                  <HomeIcon />
                </ListItemIcon>
                <ListItemText
                  primary="SoPlugged"
                  primaryTypographyProps={{ variant: "h5" }}
                />
              </>
            </a>
          </Link>
        </ListItem>
        <Divider />
        <ListItem>
          <Link href="/search">
            <a className={classes.mobileLink}>
              <>
                <ListItemIcon>
                  <ListAltIcon />
                </ListItemIcon>
                <ListItemText primary="Directory" />
              </>
            </a>
          </Link>
        </ListItem>
        {user ? (
          <>
            <ListItem>
              <Link href="/my-business">
                <a className={classes.mobileLink}>
                  <>
                    <ListItemIcon>
                      <BusinessCenterIcon />
                    </ListItemIcon>
                    <ListItemText primary="My Business" />
                  </>
                </a>
              </Link>
            </ListItem>
            <ListItem onClick={handleSignOut}>
              <ListItemIcon>
                <ExitToAppIcon />
              </ListItemIcon>
              <ListItemText primary="Sign Out" />
            </ListItem>
          </>
        ) : (
          <ListItem>
            <Link href="/join">
              <a className={classes.mobileLink}>
                <>
                  <ListItemIcon>
                    <PowerIcon />
                  </ListItemIcon>
                  <ListItemText primary="JOIN" />
                </>
              </a>
            </Link>
          </ListItem>
        )}
      </List>
    </div>
  );

  return (
    <>
      <HideOnScroll {...props} home={router.pathname === "/"}>
        <AppBar>
          <Toolbar>
            <Link href="/">
              <a>
                <Image
                  src="/soplugged-logo.png"
                  alt="SoPlugged Logo"
                  width={40}
                  height={40}
                />
              </a>
            </Link>
            <div className="gap"></div>
            <div className="sectionDesktop">
              <Link href="/search">
                <a>
                  <Button color="inherit">DIRECTORY</Button>
                </a>
              </Link>
              {user ? (
                <>
                  <Link href="/my-business">
                    <a>
                      <Button color="inherit">MY BUSINESS</Button>
                    </a>
                  </Link>
                  <Button color="inherit" onClick={handleSignOut}>
                    Sign Out
                  </Button>
                </>
              ) : (
                <Link href="/join">
                  <a>
                    <Button color="inherit" variant="outlined">
                      JOIN
                    </Button>
                  </a>
                </Link>
              )}
            </div>
            <div className="sectionMobile">
              <IconButton
                color="secondary"
                aria-label="open drawer"
                onClick={toggleDrawer(anchor, true)}
                edge="start"
              >
                <MenuIcon />
              </IconButton>
              <SwipeableDrawer
                anchor={anchor}
                open={state[anchor]}
                onClose={toggleDrawer(anchor, false)}
                onOpen={toggleDrawer(anchor, true)}
              >
                {list(anchor)}
              </SwipeableDrawer>
            </div>
            {signOut && <SignOutAlert handleClose={() => setSignOut(false)} />}
          </Toolbar>
        </AppBar>
      </HideOnScroll>
    </>
  );
};

export default Header;
