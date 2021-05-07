import React from "react";
import {
  makeStyles,
  BottomNavigationAction,
  BottomNavigation,
} from "@material/mui-components";
import { FavoriteIcon, AccountCircleIcon, HomeIcon } from "@material/mui-icons";
import { useRouter } from "next/router";

const useStyles = makeStyles((theme) => ({
  bottomNav: {
    position: "fixed",
    zIndex: "2",
    width: "100%",
    bottom: "0",
    right: "0",
    background: theme.palette.primary.main,
    height: "56px",
    display: "flex",
    justifyContent: "center",
    "& > *": {
      color: theme.palette.secondary.main,
    },
    "& > .MuiBottomNavigationAction-root.Mui-selected": {
      color: "white",
    },
  },
  navLinks: {
    display: "flex",
    flexDirection: "column",
  },
}));

const DashboardNav = ({ position }) => {
  const [value, setValue] = React.useState(position);
  const classes = useStyles();
  const router = useRouter();
  const handleClick = (href) => {
    router.push(href);
  };

  return (
    <>
      <BottomNavigation
        value={value}
        onChange={(event, newValue) => {
          setValue(newValue);
        }}
        showLabels
        className={classes.bottomNav}
      >
        <BottomNavigationAction
          label="Home"
          onClick={() => handleClick("/dashboard")}
          icon={<HomeIcon />}
        />
        <BottomNavigationAction
          label="Favorites"
          onClick={() => handleClick("/dashboard/favorites")}
          icon={<FavoriteIcon />}
        />
        <BottomNavigationAction
          label="Profile"
          onClick={() => handleClick("/dashboard/profile")}
          icon={<AccountCircleIcon />}
        />
      </BottomNavigation>
    </>
  );
};

export default DashboardNav;
