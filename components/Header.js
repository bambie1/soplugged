import React, { useState } from "react";
import {
  AppBar,
  Toolbar,
  Button,
  IconButton,
  MenuItem,
  Menu,
  useScrollTrigger,
  Divider,
} from "@material-ui/core";
import MoreIcon from "@material-ui/icons/MoreVert";
import Link from "next/link";
import Image from "next/image";
import { useRouter } from "next/router";

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
  const [mobileMoreAnchorEl, setMobileMoreAnchorEl] = useState(null);
  const router = useRouter();
  const isMobileMenuOpen = Boolean(mobileMoreAnchorEl);
  const currentUser = {};
  const handleSignOut = () => {
    if (
      window.confirm("Would you like to sign out of your SoPlugged account?")
    ) {
      // signOut();
    }
  };

  const handleMobileMenuClose = () => {
    setMobileMoreAnchorEl(null);
  };

  const handleMobileMenuOpen = (event) => {
    setMobileMoreAnchorEl(event.currentTarget);
  };

  const mobileMenuId = "primary-search-account-menu-mobile";
  const renderMobileMenu = (
    <Menu
      anchorEl={mobileMoreAnchorEl}
      anchorOrigin={{ vertical: "top", horizontal: "right" }}
      id={mobileMenuId}
      keepMounted
      transformOrigin={{ vertical: "top", horizontal: "right" }}
      open={isMobileMenuOpen}
      onClose={handleMobileMenuClose}
    >
      <MenuItem onClick={handleMobileMenuClose}>
        <Link href="/search">DIRECTORY</Link>
      </MenuItem>
      {currentUser ? (
        <MenuItem onClick={handleMobileMenuClose}>
          <Link href="/my-business">MY BUSINESS</Link>
        </MenuItem>
      ) : (
        <MenuItem onClick={handleMobileMenuClose}>
          <Link href="/join">JOIN</Link>
        </MenuItem>
      )}

      {currentUser && <Divider />}
      {currentUser && <MenuItem onClick={handleSignOut}>Sign Out</MenuItem>}
    </Menu>
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
                aria-label="show more"
                aria-controls={mobileMenuId}
                aria-haspopup="true"
                onClick={handleMobileMenuOpen}
                color="inherit"
              >
                <MoreIcon />
              </IconButton>
            </div>
          </Toolbar>
        </AppBar>
      </HideOnScroll>
      {renderMobileMenu}
    </>
  );
};

export default Header;
