import request from 'superagent';

export const addFavorite = async (favorite) => {
  const res = await request
    .post('/api/favorites')
    .send(favorite);
  return res.body;
};

export const getFavorites = async () => {
  const res = await request
    .get('/api/favorites');
  return res.body;
};
