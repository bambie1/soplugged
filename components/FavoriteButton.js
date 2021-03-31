import { Typography, Button, Snackbar, IconButton } from "./mui-components";
import React, { useState } from "react";
import { FavoriteBorderIcon, FavoriteIcon, CloseIcon } from "./mui-icons";
import Link from "next/link";
import { sendFavorite } from "src/addRemoveFavorite";
import { useFavorites } from "@/hooks/useFavorites";

const FavoriteButton = ({ business_id, user, disabled, numberOfLikes }) => {
  const [snackPack, setSnackPack] = React.useState([]);
  const [open, setOpen] = React.useState(false);
  const [messageInfo, setMessageInfo] = React.useState(undefined);
  let userLikedBusiness = false;
  let token = user.firebaseUser?.za || null;
  const { favorites, isLoading, isError } = useFavorites(token);
  if (favorites) {
    favorites.map((item) => {
      if (item.liked_business.id === business_id) userLikedBusiness = true;
    });
  }

  const [liked, setLiked] = useState(userLikedBusiness);
  React.useEffect(() => {
    setLiked(userLikedBusiness);
  }, [userLikedBusiness]);

  React.useEffect(() => {
    if (snackPack.length && !messageInfo) {
      setMessageInfo({ ...snackPack[0] });
      setSnackPack((prev) => prev.slice(1));
      setOpen(true);
    } else if (snackPack.length && messageInfo && open) {
      setOpen(false);
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
    let token = await user.getIdToken();
    if (liked) {
      let res = await sendFavorite(business_id, token, false);
      if (res) handleFavorite("Removed from favorites");
    } else {
      let res = await sendFavorite(business_id, token, true);
      if (res) handleFavorite("Added to Favorites");
    }
    setLiked(!liked);
  };
  const handleFavorite = (message) => {
    setSnackPack((prev) => [...prev, { message, key: new Date().getTime() }]);
  };
  return (
    <>
      <Button
        variant="contained"
        color="primary"
        startIcon={liked ? <FavoriteIcon /> : <FavoriteBorderIcon />}
        onClick={handleClick}
        disabled={!user?.email || disabled}
      >
        {liked ? "Liked" : "Like"} - {numberOfLikes}
      </Button>
      {!user?.email && (
        <a
          target="_blank"
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
