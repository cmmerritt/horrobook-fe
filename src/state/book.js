import { useEffect, useState } from 'react';
import { fetchLocBooks } from '../services/libraryOfCongressApi.js';

export const useBooks = () => {
  const [books, setBooks] = useState([]);

  useEffect(() => {
    fetchLocBooks().then(setBooks);
  }, []);

  return books;
};
