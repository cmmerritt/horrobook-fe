export const fetchBooks = async () => {
  const res = await fetch();
  const json = await res.json();
  return json;
};
