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
  makeStyles,
  Menu,
  MenuItem,
  Slide,
} from "@material/mui-components";
import Link from "next/link";
import Image from "next/image";
import { useRouter } from "next/router";
import {
  MenuIcon,
  ExitToAppIcon,
  BusinessCenterIcon,
  SearchIcon,
  PowerIcon,
  HomeIcon,
  MoreVertIcon,
  LocalMallIcon,
} from "@material/mui-icons";
import SignOutAlert from "./SignOutAlert";
import { useAuth } from "@contexts/authContext";

const useStyles = makeStyles((theme) => ({
  navDiv: {
    height: "100%",
    "& .MuiListItem-root": {
      marginTop: "5px",
      marginBottom: "5px",
    },
  },
  list: {
    width: 250,
    minHeight: "100%",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    "& > li": {
      paddingTop: "16px",
      paddingBottom: "16px",
    },
  },
  mobileLink: {
    display: "flex",
    alignItems: "center",
    width: "100%",
  },
}));

function HideOnScroll(props) {
  const { children, window } = props;
  const homeTrigger = useScrollTrigger({
    disableHysteresis: true,
    threshold: 70,
  });
  const trigger = useScrollTrigger({
    target: window ? window() : undefined,
    threshold: 70,
  });

  return (
    <Slide appear={false} direction="down" in={!trigger}>
      {React.cloneElement(children, {
        elevation: homeTrigger ? 1 : 0,
        // elevation: 0,
        color: homeTrigger ? "primary" : "transparent",
      })}
    </Slide>
  );
}

const Header = (props) => {
  const router = useRouter();
  const classes = useStyles();
  const { user } = useAuth();
  const [drawerOpen, setDrawerOpen] = useState(false);
  const [signOut, setSignOut] = useState(false);

  // Sign out menu on desktop
  const [signOutAnchorEl, setSignOutAnchorEl] = React.useState(null);
  const signOutMenuOpen = Boolean(signOutAnchorEl);
  const signOutMenuClick = (event) => {
    setSignOutAnchorEl(event.currentTarget);
  };
  const signOutMenuClose = () => {
    setSignOutAnchorEl(null);
  };

  const isHomePage = router.pathname === "/";
  const isDirectoryPage = router.pathname === "/search";

  const toggleDrawer = (open) => (event) => {
    if (
      event.type === "keydown" &&
      (event.key === "Tab" || event.key === "Shift")
    ) {
      return;
    }
    setDrawerOpen(open);
  };
  const list = () => (
    <div role="presentation" className={classes.navDiv}>
      <List className={classes.list}>
        <ListItem onClick={toggleDrawer(false)}>
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
        <ListItem
          button
          onClick={toggleDrawer(false)}
          onKeyDown={toggleDrawer(false)}
        >
          <Link href="/search">
            <a className={classes.mobileLink}>
              <>
                <ListItemIcon>
                  <SearchIcon />
                </ListItemIcon>
                <ListItemText primary="DIRECTORY" />
              </>
            </a>
          </Link>
        </ListItem>
        <ListItem
          button
          onClick={toggleDrawer(false)}
          onKeyDown={toggleDrawer(false)}
        >
          <Link href="/merch">
            <a className={classes.mobileLink}>
              <>
                <ListItemIcon>
                  <LocalMallIcon />
                </ListItemIcon>
                <ListItemText primary="MERCH" />
              </>
            </a>
          </Link>
        </ListItem>
        {user?.email ? (
          <>
            <div>
              <ListItem
                button
                onClick={toggleDrawer(false)}
                onKeyDown={toggleDrawer(false)}
              >
                <Link href="/dashboard">
                  <a className={classes.mobileLink}>
                    <>
                      <ListItemIcon>
                        <BusinessCenterIcon />
                      </ListItemIcon>
                      <ListItemText primary="MY DASHBOARD" />
                    </>
                  </a>
                </Link>
              </ListItem>
            </div>
            <Divider />
          </>
        ) : (
          <ListItem
            button
            onClick={toggleDrawer(false)}
            onKeyDown={toggleDrawer(false)}
          >
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
        <Divider />

        <ListItem
          button
          onClick={toggleDrawer(false)}
          onKeyDown={toggleDrawer(false)}
        >
          <Link href="/faqs">
            <a className={classes.mobileLink}>
              <Button style={{ justifyContent: "start" }}>FAQs</Button>
            </a>
          </Link>
        </ListItem>
        <ListItem
          button
          onClick={toggleDrawer(false)}
          onKeyDown={toggleDrawer(false)}
        >
          <Link href="/sponsors">
            <a className={classes.mobileLink}>
              <Button style={{ justifyContent: "start" }}>SPONSORS</Button>
            </a>
          </Link>
        </ListItem>

        {user?.email && (
          <div style={{ position: "absolute", bottom: "0" }}>
            <ListItem
              button
              onClick={() => {
                setSignOut(true);
                toggleDrawer(false);
              }}
            >
              <ListItemIcon>
                <ExitToAppIcon />
              </ListItemIcon>
              <ListItemText primary="Sign Out" />
            </ListItem>
          </div>
        )}
      </List>
    </div>
  );

  return (
    <>
      {router.pathname != "/join" && (
        <HideOnScroll {...props} home={isHomePage} directory={isDirectoryPage}>
          <AppBar
            position={isHomePage ? "fixed" : "static"}
            color="transparent"
            elevation={0}
          >
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
              <>
                <div className="sectionDesktop">
                  <Link href="/search">
                    <a>
                      <Button color="inherit">DIRECTORY</Button>
                    </a>
                  </Link>
                  <Link href="/merch">
                    <a>
                      <Button color="inherit">MERCH</Button>
                    </a>
                  </Link>
                  {user?.email ? (
                    <>
                      <Link href="/dashboard">
                        <a>
                          <Button color="inherit" variant="outlined">
                            MY DASHBOARD
                          </Button>
                        </a>
                      </Link>
                      <IconButton
                        aria-label="more"
                        aria-controls="desktop-menu"
                        aria-haspopup="true"
                        onClick={signOutMenuClick}
                      >
                        <MoreVertIcon />
                      </IconButton>
                      <Menu
                        id="desktop-menu"
                        anchorEl={signOutAnchorEl}
                        open={signOutMenuOpen}
                        onClose={signOutMenuClose}
                      >
                        <MenuItem
                          onClick={() => {
                            signOutMenuClose();
                            setSignOut(true);
                          }}
                        >
                          Sign Out
                        </MenuItem>
                      </Menu>
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
                    onClick={toggleDrawer(true)}
                    edge="start"
                  >
                    <MenuIcon />
                  </IconButton>
                  <SwipeableDrawer
                    anchor="right"
                    open={drawerOpen}
                    onClose={toggleDrawer(false)}
                    onOpen={toggleDrawer(true)}
                  >
                    {list()}
                  </SwipeableDrawer>
                </div>
              </>

              {signOut && (
                <SignOutAlert handleClose={() => setSignOut(false)} />
              )}
            </Toolbar>
          </AppBar>
        </HideOnScroll>
      )}
    </>
  );
};

export default Header;
