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
import DashboardIcon from "@material-ui/icons/Dashboard";
import ExitToAppIcon from "@material-ui/icons/ExitToApp";
import BusinessCenterIcon from "@material-ui/icons/BusinessCenter";

const useStyles = makeStyles({
  list: {
    width: 250,
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
  const anchor = "right";
  const [state, setState] = useState({
    right: false,
  });
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
  const menuList = [
    { text: "Directory", icon: <ListAltIcon />, link: "/directory" },
    { text: "Dashboard", icon: <DashboardIcon />, link: "/dashboard" },
    { text: "My Business", icon: <BusinessCenterIcon />, link: "/tester" },
    { text: "Sign Out", icon: <ExitToAppIcon />, link: "/join" },
  ];
  const list = (anchor) => (
    <div
      role="presentation"
      onClick={toggleDrawer(anchor, false)}
      onKeyDown={toggleDrawer(anchor, false)}
    >
      <List className={classes.list}>
        {menuList.map((item) => (
          <Link href={item.link} key={item.text}>
            <a>
              <ListItem button style={{ margin: "25px 0px" }}>
                <ListItemIcon>{item.icon}</ListItemIcon>
                <ListItemText primary={item.text} />
              </ListItem>
            </a>
          </Link>
        ))}
      </List>
      <Divider />
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
              <Link href="/my-business">
                <a>
                  <Button color="inherit">MY BUSINESS</Button>
                </a>
              </Link>
              <Link href="/dashboard">
                <a>
                  <Button color="inherit">DASHBOARD</Button>
                </a>
              </Link>
              <Link href="/join">
                <a>
                  <Button color="inherit">JOIN</Button>
                </a>
              </Link>
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
          </Toolbar>
        </AppBar>
      </HideOnScroll>
    </>
  );
};

export default Header;
