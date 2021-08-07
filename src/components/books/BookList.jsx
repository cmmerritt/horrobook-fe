import React from 'react';
import { useBooks } from '../../state/book.js';
import Book from './Book';

const BookList = () => {
  const books = useBooks();
  console.log(books);
  
  const bookElements = books.map((book) => (
    <li key={book.id}>
      <Book {...book} />
    </li>
  ));

  return <ul>{bookElements}</ul>;
};

export default BookList;
