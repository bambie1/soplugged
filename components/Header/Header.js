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
  LocalMallIcon,
  HelpIcon,
  PeopleAltIcon,
} from "@material/mui-icons";
import { SignOutAlert } from "@components/index";
import { useAuth } from "@contexts/authContext";

const useStyles = makeStyles((theme) => ({
  navDiv: {
    height: "100%",
    "& .MuiListItem-root": {
      marginTop: "5px",
      marginBottom: "5px",
    },
  },
  toolBar: {
    maxWidth: "1400px",
    margin: "auto",
    width: "100%",
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

  const isHomePage = router.pathname === "/";
  const isProPage = router.pathname === "/pro-test";

  const toggleDrawer = (open) => (event) => {
    if (
      event.type === "keydown" &&
      (event.key === "Tab" || event.key === "Shift")
    ) {
      return;
    }
    setDrawerOpen(open);
  };

  const LaptopLink = ({ href, text, variant = "text" }) => (
    <Link href={href} passHref>
      <Button color="secondary" variant={variant}>
        {text}
      </Button>
    </Link>
  );

  const MobileLink = ({ href, icon, text, heading = false }) => {
    return (
      <ListItem
        button
        onClick={toggleDrawer(false)}
        onKeyDown={toggleDrawer(false)}
      >
        <Link href={href}>
          <a className={classes.mobileLink}>
            <>
              <ListItemIcon>{icon}</ListItemIcon>
              <ListItemText
                primary={text}
                primaryTypographyProps={{ variant: heading ? "h5" : "body1" }}
              />
            </>
          </a>
        </Link>
      </ListItem>
    );
  };

  const list = () => (
    <div role="presentation" className={classes.navDiv}>
      <List className={classes.list}>
        <MobileLink href="/" text="SoPlugged" icon={<HomeIcon />} heading />
        <MobileLink href="/search" text="DIRECTORY" icon={<SearchIcon />} />
        <Divider />
        <MobileLink href="/merch" text="MERCH" icon={<LocalMallIcon />} />

        <MobileLink href="/faqs" text="FAQs" icon={<HelpIcon />} />
        <MobileLink href="/sponsors" text="SPONSORS" icon={<PeopleAltIcon />} />
        <Divider />
        {user?.email ? (
          <>
            <div>
              <MobileLink
                href="/dashboard"
                text="MY DASHBOARD"
                icon={<BusinessCenterIcon />}
              />
            </div>
            <Divider />
          </>
        ) : (
          <MobileLink href="/join" text="JOIN" icon={<PowerIcon />} />
        )}

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

  const renderAppBar = () => (
    <AppBar
      position={isHomePage || isProPage ? "fixed" : "static"}
      color="transparent"
      elevation={0}
    >
      <Toolbar className={classes.toolBar}>
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
            <LaptopLink href="/search" text="DIRECTORY" />
            <LaptopLink href="/merch" text="MERCH" />

            {user?.email ? (
              <>
                <LaptopLink
                  href="/dashboard"
                  text="MY DASHBOARD"
                  variant="outlined"
                />
                <IconButton
                  aria-label="Sign out"
                  onClick={() => {
                    setSignOut(true);
                  }}
                >
                  <ExitToAppIcon />
                </IconButton>
              </>
            ) : (
              <LaptopLink href="/join" text="JOIN" variant="outlined" />
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

        {signOut && <SignOutAlert handleClose={() => setSignOut(false)} />}
      </Toolbar>
    </AppBar>
  );

  if (router.pathname === "/join") return null;
  if (isHomePage)
    return <HideOnScroll {...props}>{renderAppBar()}</HideOnScroll>;

  return renderAppBar();
};

export default Header;
