import { FC, useEffect, useState } from "react";
import useSWR from "swr";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart } from "@fortawesome/free-regular-svg-icons";
import { faHeart as faHeartFilled } from "@fortawesome/free-solid-svg-icons";
import toast from "react-hot-toast";

import { useAuth } from "@/context/authContext";
import { addFavorite } from "@/utils/addFavorite";
import { swrFetchWithToken } from "@/utils/swrFetchWithToken";
import { removeFavorite } from "@/utils/removeFavorite";

interface Props {
  business: any;
}

const FavoriteButton: FC<Props> = ({ business }) => {
  const { user } = useAuth();
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
  };

  if (userLikesBusiness)
    return (
      <button
        onClick={handleClick}
        className="button outlined withIcon"
        disabled={disabled}
      >
        <FontAwesomeIcon icon={faHeartFilled} />
        Added to Favorites
      </button>
    );

  return (
    <button
      onClick={handleClick}
      className="button outlined withIcon"
      disabled={disabled}
    >
      <FontAwesomeIcon icon={faHeart} />
      Add to Favorites
    </button>
  );
};

export default FavoriteButton;
