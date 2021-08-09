import React from 'react';
import { useBooks } from '../../state/book.js';
import Book from './Book';
import { Link } from 'react-router-dom';

const BookList = () => {
  const books = useBooks();

  const bookElements = books.map((book) => (
    <li key={book.id}>
      <Link to={`/${book.id}`}>
        <Book {...book} />
      </Link>
      <button>Add to favorites</button>
    </li>
  ));

  return <ul>{bookElements}</ul>;
};

export default BookList;
