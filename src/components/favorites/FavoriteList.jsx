import React from 'react';
import { useFavorites } from '../../state/favorite';
import Favorite from './Favorite';

const FavoriteList = () => {
  const favorites = useFavorites();

  const favoritesElements = favorites.map((favorite) => (
    <li key={favorite.id}>
      <Favorite {...favorite} />
    </li>
  ));

  return <ul>{favoritesElements}</ul>;
};

export default FavoriteList;
