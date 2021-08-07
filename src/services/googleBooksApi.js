/* eslint-disable max-len */

export const fetchBooks = async () => {
  const res = await fetch('https://www.googleapis.com/books/v1/volumes?q=horror&orderBy=newest');
  const json = await res.json();
  return json;
};
