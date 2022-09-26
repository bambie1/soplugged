import { FC, useEffect, useState } from "react";
import useSWR, { useSWRConfig } from "swr";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart } from "@fortawesome/free-regular-svg-icons";
import { faHeart as faHeartFilled } from "@fortawesome/free-solid-svg-icons";
import toast from "react-hot-toast";
import { useSession } from "next-auth/react";

import { addFavorite } from "@/utils/addFavorite";
import { swrFetchWithToken } from "@/utils/swrFetchWithToken";
import { removeFavorite } from "@/utils/removeFavorite";
import { Button } from "@/styled/Button";

interface Props {
  business: any;
}

const FavoriteButton: FC<Props> = ({ business }) => {
  const { data: session } = useSession();

  const { mutate } = useSWRConfig();
  const [userLikesBusiness, setUserLikesBusiness] = useState(false);

  const {
    id,
    creator: { email },
  } = business;

  const disabled = !session?.user?.email || session?.user?.email === email;

  const { data: favorites, error } = useSWR("/api/user/getFavorites");

  // console.log({ favorites });

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
    if (!session?.user?.email) return;

    if (userLikesBusiness) {
      const res = await removeFavorite(id, session.user.email);

      if (res?.ok) {
        toast.success("Removed from favorites");
        setUserLikesBusiness(!userLikesBusiness);
      } else {
        toast.error("An error occurred");
      }
    } else {
      const res = await addFavorite(id, session.user.email!);

      if (res?.ok) {
        toast.success("Added to favorites");
        setUserLikesBusiness(!userLikesBusiness);
      } else {
        toast.error("An error occurred");
      }
    }

    mutate(`${process.env.NEXT_PUBLIC_SERVER_BASE_URL}/favorites`);
  };

  return (
    <Button onClick={handleClick} disabled={disabled} variant="outlined">
      {userLikesBusiness ? "Added to Favorites" : "Add to Favorites"}
      <FontAwesomeIcon
        icon={userLikesBusiness ? faHeartFilled : faHeart}
        className="ml-3"
      />
    </Button>
  );
};

export default FavoriteButton;
