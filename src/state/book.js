/* eslint-disable max-len */
import { useEffect, useState } from 'react';
import { fetchBookById, fetchLocBooks } from '../services/libraryOfCongressApi.js';

export const useBooks = () => {
  const [books, setBooks] = useState([]);

  useEffect(() => {
    fetchLocBooks().then(setBooks);
  }, []);

  return books;
};

export const useBook = (id) => {
  const [book, setBook] = useState(null);

  useEffect(() => {
    fetchBookById(id).then(setBook);
  }, []);
  console.log(book);
  return book;
};
