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
  Collapse,
  Menu,
  MenuItem,
} from "./mui-components";
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
  ExpandMoreIcon,
  ExpandLessIcon,
  FavoriteIcon,
  AccountCircleIcon,
} from "./mui-icons";
import SignOutAlert from "./SignOutAlert";
import { useAuthUser, withAuthUser } from "next-firebase-auth";
import { Typography } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  navDiv: {
    height: "100%",
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
  nested: {
    paddingLeft: theme.spacing(4),
    "& .MuiListItemText-primary, .MuiSvgIcon-root": {
      fontSize: "0.9rem",
    },
  },
  collapse: {
    position: "absolute",
    background: theme.palette.primary.main,
    marginTop: "8px",
    borderRadius: "5px",
  },
}));

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
  const user = useAuthUser();
  const [drawerOpen, setDrawerOpen] = useState(false);
  const [signOut, setSignOut] = useState(false);
  const [collapseOpen, setCollapseOpen] = React.useState(false);

  const handleClick = () => {
    setCollapseOpen(!collapseOpen);
  };
  const [anchorEl, setAnchorEl] = React.useState(null);

  const handleMenuClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
  };
  const toggleDrawer = (open) => (event) => {
    console.log(event.target.toString());

    if (
      event &&
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
        <ListItem onClick={toggleDrawer(false)} onKeyDown={toggleDrawer(false)}>
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
        <ListItem onClick={toggleDrawer(false)} onKeyDown={toggleDrawer(false)}>
          <Link href="/search">
            <a className={classes.mobileLink}>
              <>
                <ListItemIcon>
                  <SearchIcon />
                </ListItemIcon>
                <ListItemText primary="Directory" />
              </>
            </a>
          </Link>
        </ListItem>
        {user.email ? (
          <>
            <div>
              <ListItem onClick={handleClick}>
                <ListItemIcon>
                  <BusinessCenterIcon />
                </ListItemIcon>
                <ListItemText primary="My Dashboard" />
                {collapseOpen ? <ExpandLessIcon /> : <ExpandMoreIcon />}
              </ListItem>
              <Collapse in={collapseOpen} timeout="auto">
                <List
                  component="div"
                  disablePadding
                  onClick={toggleDrawer(false)}
                >
                  <ListItem button className={classes.nested}>
                    <Link href="/dashboard">
                      <a className={classes.mobileLink}>
                        <>
                          <ListItemIcon>
                            <HomeIcon />
                          </ListItemIcon>
                          <ListItemText primary="Home" />
                        </>
                      </a>
                    </Link>
                  </ListItem>
                  <ListItem button className={classes.nested}>
                    <Link href="/dashboard/favorites">
                      <a className={classes.mobileLink}>
                        <>
                          <ListItemIcon>
                            <FavoriteIcon />
                          </ListItemIcon>
                          <ListItemText primary="Favorites" />
                        </>
                      </a>
                    </Link>
                  </ListItem>
                  <ListItem button className={classes.nested}>
                    <Link href="/dashboard/profile">
                      <a className={classes.mobileLink}>
                        <>
                          <ListItemIcon>
                            <AccountCircleIcon />
                          </ListItemIcon>
                          <ListItemText primary="Profile" />
                        </>
                      </a>
                    </Link>
                  </ListItem>
                </List>
              </Collapse>
            </div>

            <ListItem onClick={() => setSignOut(true)}>
              <ListItemIcon>
                <ExitToAppIcon />
              </ListItemIcon>
              <ListItemText primary="Sign Out" />
            </ListItem>
          </>
        ) : (
          <ListItem
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
        <div style={{ marginTop: "auto" }}>
          <ListItem
            onClick={toggleDrawer(false)}
            onKeyDown={toggleDrawer(false)}
          >
            <Link href="/faqs">
              <a className={classes.mobileLink}>
                <Button>FAQs</Button>
              </a>
            </Link>
          </ListItem>
          <ListItem
            onClick={toggleDrawer(false)}
            onKeyDown={toggleDrawer(false)}
          >
            <Link href="/sponsors">
              <a className={classes.mobileLink}>
                <Button>Sponsors</Button>
              </a>
            </Link>
          </ListItem>
        </div>
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
              {user.email ? (
                <>
                  <div>
                    <Button
                      color="inherit"
                      onClick={handleMenuClick}
                      endIcon={
                        collapseOpen ? <ExpandLessIcon /> : <ExpandMoreIcon />
                      }
                    >
                      MY DASHBOARD
                    </Button>
                    <Menu
                      id="dashboard-menu"
                      anchorEl={anchorEl}
                      keepMounted
                      open={Boolean(anchorEl)}
                      onClose={handleMenuClose}
                      anchorOrigin={{
                        vertical: "bottom",
                        horizontal: "center",
                      }}
                      transformOrigin={{
                        vertical: "top",
                        horizontal: "center",
                      }}
                      getContentAnchorEl={null}
                    >
                      <MenuItem onClick={handleMenuClose}>
                        <Link href="/dashboard">
                          <a className={classes.mobileLink}>
                            <ListItemIcon>
                              <HomeIcon />
                            </ListItemIcon>
                            <ListItemText primary="Home" />
                          </a>
                        </Link>
                      </MenuItem>
                      <MenuItem onClick={handleMenuClose}>
                        <Link href="/dashboard/favorites">
                          <a className={classes.mobileLink}>
                            <ListItemIcon>
                              <FavoriteIcon />
                            </ListItemIcon>
                            <ListItemText primary="Favorites" />
                          </a>
                        </Link>
                      </MenuItem>
                      <MenuItem onClick={handleMenuClose}>
                        <Link href="/dashboard/profile">
                          <a className={classes.mobileLink}>
                            <ListItemIcon>
                              <AccountCircleIcon />
                            </ListItemIcon>
                            <ListItemText primary="Profile" />
                          </a>
                        </Link>
                      </MenuItem>
                    </Menu>
                  </div>

                  <Button color="inherit" onClick={() => setSignOut(true)}>
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
            {signOut && (
              <SignOutAlert
                handleClose={() => setSignOut(false)}
                signOut={user.signOut}
              />
            )}
          </Toolbar>
        </AppBar>
      </HideOnScroll>
    </>
  );
};

export default withAuthUser()(Header);
