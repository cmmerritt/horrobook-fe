import request from 'superagent';

export const addFavorite = async (favorite) => {
  const res = await request
    .post('http://localhost:7890/api/v1/favorites')
    .send(favorite);
  console.log(res.body);
  return res.body;
};

export const getFavorites = async () => {
  const res = await request
    .get('http://localhost:7890/api/v1/favorites');
  return res.body;
};
