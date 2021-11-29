import React, { FC } from "react";
import Image from "next/image";

import { IFavorite } from "@/types/Favorite";
import { BusinessCard } from "@/components/BusinessCard";
import { SEO } from "@/components/SEO";

import styles from "./FavoritesPage.module.scss";
import { ButtonLink } from "@/styled/ButtonLink";

interface Props {
  favorites: IFavorite[];
}

const FavoritesPage: FC<Props> = ({ favorites }) => {
  const renderFavorites = () => {
    if (!favorites.length)
      return (
        <div>
          <Image
            src="/images/Checklist_Monochromatic.svg"
            alt="empty clipboard"
            width={300}
            height={300}
          />
          <h3>No favorites found</h3>
          <p>When you see a business you like, add it to your favorites</p>
          <ButtonLink href="/search" variant="outlined">
            Go to directory
          </ButtonLink>
        </div>
      );

    return (
      <div className={styles.favorites}>
        {favorites.map(({ liked_business, created_at }) => (
          <BusinessCard key={created_at} business={liked_business} />
        ))}
      </div>
    );
  };
  return (
    <>
      <SEO
        title="Favorites | My SoPlugged dashboard"
        description="Manage your business, favorites and profile."
      />
      <h1 className="center">favorites</h1>
      {renderFavorites()}
    </>
  );
};

export default FavoritesPage;
