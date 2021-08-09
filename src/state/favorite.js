import { useEffect, useState } from 'react';
import { getFavorites } from '../services/horrobookApi';

export const useFavorites = () => {
  const [favorites, setFavorites] = useState([]);

  useEffect(() => {
    getFavorites().then(setFavorites);
  }, []);


  return favorites;
};

