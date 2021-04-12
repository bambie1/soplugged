import {
  Typography,
  Button,
  Snackbar,
  IconButton,
  makeStyles,
} from "./mui-components";
import React, { useState } from "react";
import { FavoriteBorderIcon, FavoriteIcon, CloseIcon } from "./mui-icons";
import Link from "next/link";
import { addFavorite, removeFavorite } from "src/addRemoveFavorite";
import * as Sentry from "@sentry/node";

const useStyles = makeStyles((theme) => ({
  button: {
    alignSelf: "center",
    marginTop: "8px",
  },
}));

const FavoriteButton = ({
  business_id,
  user,
  disabled,
  numberOfLikes,
  mini,
}) => {
  const [snackPack, setSnackPack] = React.useState([]);
  const [open, setOpen] = React.useState(false);
  const [likes, setLikes] = React.useState(numberOfLikes);
  const classes = useStyles();
  const [messageInfo, setMessageInfo] = React.useState(undefined);
  const [favorites, setFavorites] = React.useState([]);

  let userLikedBusiness = false;
  React.useEffect(() => {
    let token = user?.za || null;
    if (token) {
      fetch(`${process.env.NEXT_PUBLIC_SERVER_BASE_URL}/favorites`, {
        method: "GET",
        headers: {
          "Firebase-Token": token,
        },
      })
        .then((r) => r.json())
        .then((data) => setFavorites(data))
        .catch((err) => Sentry.captureException(err));
    }
  }, [user]);

  favorites.map((item) => {
    if (item.liked_business.id === business_id) userLikedBusiness = true;
  });

  const [liked, setLiked] = useState(userLikedBusiness);

  React.useEffect(() => {
    setLiked(userLikedBusiness);
  }, [userLikedBusiness]);

  React.useEffect(() => {
    setLikes(numberOfLikes);
  }, [numberOfLikes]);

  React.useEffect(() => {
    if (snackPack.length && !messageInfo) {
      setMessageInfo({ ...snackPack[0] });
      setSnackPack((prev) => prev.slice(1));
      setOpen(true);
    } else if (snackPack.length && messageInfo && open) {
      // setOpen(false);
    }
  }, [snackPack, messageInfo, open]);

  const handleClose = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }
    setOpen(false);
  };
  const handleExited = () => {
    setMessageInfo(undefined);
  };
  const handleClick = async () => {
    if (liked) {
      let res = await removeFavorite(business_id, user);
      if (!res.error) {
        handleFavorite("Removed from favorites");
        setLikes(likes - 1);
        setLiked(!liked);
      }
    } else {
      let res = await addFavorite(business_id, user);
      if (!res.error) {
        handleFavorite("Added to Favorites");
        setLikes(likes + 1);
        setLiked(!liked);
      }
    }
  };
  const handleFavorite = (message) => {
    setSnackPack((prev) => [...prev, { message, key: new Date().getTime() }]);
  };
  return (
    <>
      <Button
        variant={mini ? "text" : "contained"}
        color={mini ? "secondary" : "primary"}
        startIcon={liked ? <FavoriteIcon /> : <FavoriteBorderIcon />}
        onClick={handleClick}
        disabled={!user?.email || disabled}
        className={classes.button}
      >
        {mini ? likes : `Likes - ${likes} `}
      </Button>
      {!user?.email && !mini && (
        <a
          href="/join"
          style={{
            textDecoration: "underline",
            display: "block",
          }}
        >
          <Typography variant="caption">
            Please sign in to add business to your favorites
          </Typography>
        </a>
      )}

      <Snackbar
        key={messageInfo ? messageInfo.key : undefined}
        anchorOrigin={{
          vertical: "bottom",
          horizontal: "left",
        }}
        open={open}
        autoHideDuration={6000}
        onClose={handleClose}
        onExited={handleExited}
        message={messageInfo ? messageInfo.message : undefined}
        action={
          <React.Fragment>
            <Link href="/dashboard/favorites">
              <a>
                <Button color="primary" size="small" onClick={handleClose}>
                  View All
                </Button>
                <IconButton
                  size="small"
                  aria-label="close"
                  color="inherit"
                  onClick={handleClose}
                >
                  <CloseIcon fontSize="small" />
                </IconButton>
              </a>
            </Link>
          </React.Fragment>
        }
      />
    </>
  );
};

export default FavoriteButton;
