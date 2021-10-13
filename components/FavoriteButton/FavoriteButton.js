import { Button, Snackbar, IconButton } from "@material/mui-components";
import React, { useState } from "react";
import {
  FavoriteBorderIcon,
  FavoriteIcon,
  CloseIcon,
} from "@material/mui-icons";
import Link from "next/link";
import { addFavorite, removeFavorite } from "src/addRemoveFavorite";
import { useRouter } from "next/router";

const FavoriteButton = ({ business_id, user, disabled, userLikedBusiness }) => {
  const [snackPack, setSnackPack] = useState([]);
  const [open, setOpen] = useState(false);
  const [messageInfo, setMessageInfo] = useState(undefined);
  const router = useRouter();

  const [liked, setLiked] = useState(userLikedBusiness);

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
        setLiked(!liked);
      }
    } else {
      let res = await addFavorite(business_id, user);
      if (!res.error) {
        handleFavorite("Added to Favorites");
        setLiked(!liked);
      }
    }
  };

  const handleFavorite = (message) => {
    setSnackPack((prev) => [...prev, { message, key: new Date().getTime() }]);
  };

  return (
    <>
      <span style={{ marginLeft: "initial" }}>
        <Button
          size={"medium"}
          variant={"outlined"}
          color="secondary"
          startIcon={liked ? <FavoriteIcon /> : <FavoriteBorderIcon />}
          disabled={disabled}
          onClick={handleClick}
          style={{
            marginTop: "8px",
          }}
        >
          {liked ? "Added to favorites" : "Add to favorites"}
        </Button>
      </span>

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
