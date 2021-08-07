import React from 'react';
import { useBooks } from '../../state/book.js';
import Book from './Book';

const BookList = () => {
  const books = useBooks();

  const bookElements = books.map((book) => (
    <li key={book.infoUrl}>
      <Book {...book} />
    </li>
  ));

  return <ul>{bookElements}</ul>;
};

export default BookList;
