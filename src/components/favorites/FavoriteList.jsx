import React from 'react';
import { useFavorites } from '../../state/favorite';
import Favorite from './Favorite';
import styles from './FavoriteList.css';

const FavoriteList = () => {
  const favorites = useFavorites();

  const favoritesElements = favorites.map((favorite) => (
    <li key={favorite.id}>
      <Favorite {...favorite} />
    </li>
  ));

  return <ul className={styles.FavoriteList}>{favoritesElements}</ul>;
};

export default FavoriteList;
