import { FC, useEffect, useState } from "react";
import useSWR, { useSWRConfig } from "swr";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart } from "@fortawesome/free-regular-svg-icons";
import { faHeart as faHeartFilled } from "@fortawesome/free-solid-svg-icons";
import toast from "react-hot-toast";

import { addFavorite } from "@/utils/addFavorite";
import { swrFetchWithToken } from "@/utils/swrFetchWithToken";
import { removeFavorite } from "@/utils/removeFavorite";
import { IconButton } from "@/styled/IconButton";

interface Props {
  business: any;
}

const FavoriteButton: FC<Props> = ({ business }) => {
  const { user } = {
    user: {
      email: "",
    },
  };
  const { mutate } = useSWRConfig();
  const [userLikesBusiness, setUserLikesBusiness] = useState(false);

  const {
    id,
    creator: { email },
  } = business;

  const disabled = !user || user.email === email;

  const { data: favorites, error } = useSWR(
    `${process.env.NEXT_PUBLIC_SERVER_BASE_URL}/favorites`,
    swrFetchWithToken
  );

  useEffect(() => {
    if (favorites?.length) {
      for (let i = 0; i < favorites.length; i++) {
        if (favorites[i].liked_business.id === id) {
          setUserLikesBusiness(true);
          break;
        }
      }
    }
  }, [favorites, id]);

  const handleClick = async () => {
    setUserLikesBusiness(!userLikesBusiness);
    if (userLikesBusiness) {
      const res = await removeFavorite(id, user.email);

      if (res?.ok) {
        toast.success("Removed from favorites");
      } else {
        toast.error("An error occurred");
      }
    } else {
      const res = await addFavorite(id, user.email);

      if (res?.ok) {
        toast.success("Added to favorites");
      } else {
        toast.error("An error occurred");
      }
    }

    mutate(`${process.env.NEXT_PUBLIC_SERVER_BASE_URL}/favorites`);
  };

  return (
    <IconButton
      title={userLikesBusiness ? "Added to Favorites" : "Add to Favorites"}
      onClick={handleClick}
      disabled={disabled}
      isOutlined
    >
      <FontAwesomeIcon icon={userLikesBusiness ? faHeartFilled : faHeart} />
    </IconButton>
  );
};

export default FavoriteButton;
