import {
  Button,
  Snackbar,
  IconButton,
  Tooltip,
} from "@material/mui-components";
import React, { useState } from "react";
import {
  FavoriteBorderIcon,
  FavoriteIcon,
  CloseIcon,
} from "@material/mui-icons";
import Link from "next/link";
import { addFavorite, removeFavorite } from "src/addRemoveFavorite";
import { useRouter } from "next/router";

const FavoriteButton = ({
  business_id,
  user,
  disabled,
  numberOfLikes,
  mini,
  userLikedBusiness,
}) => {
  const [snackPack, setSnackPack] = React.useState([]);
  const [open, setOpen] = React.useState(false);
  const [likes, setLikes] = React.useState(numberOfLikes);
  const [messageInfo, setMessageInfo] = React.useState(undefined);
  const router = useRouter();

  const [liked, setLiked] = useState(userLikedBusiness);

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
    if (!user?.email || disabled) {
      router.push("/join");
      return;
    }
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
      <Tooltip title={liked ? "Remove from Favorites" : "Add to Favorites"}>
        <span style={{ marginLeft: mini ? "auto" : "initial" }}>
          {likes > 0 ? (
            <Button
              size={mini ? "small" : "medium"}
              variant={mini ? "text" : "outlined"}
              color="secondary"
              startIcon={liked ? <FavoriteIcon /> : <FavoriteBorderIcon />}
              disabled={disabled}
              onClick={handleClick}
              style={{
                marginTop: mini ? "auto" : "8px",
              }}
            >
              {mini ? likes : `Likes - ${likes} `}
            </Button>
          ) : (
            <Button
              size={mini ? "small" : "medium"}
              variant={mini ? "text" : "outlined"}
              color="secondary"
              startIcon={liked ? <FavoriteIcon /> : <FavoriteBorderIcon />}
              onClick={handleClick}
              disabled={disabled}
              style={{ marginTop: mini ? "auto" : "8px" }}
            >
              -
            </Button>
          )}
        </span>
      </Tooltip>

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
