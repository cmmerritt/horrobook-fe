import { useEffect, useState } from 'react';
import { fetchBooks } from '../services/googleBooksApi.js';

export const useBooks = () => {
  const [books, setBooks] = useState([]);

  useEffect(() => {
    fetchBooks().then(setBooks);
  }, []);

  return books;
};
