/* eslint-disable max-len */
import React from 'react';
import { useBooks } from '../../state/book.js';
import { useFavorites } from '../../state/favorite.js';
import Book from './Book';
import { Link } from 'react-router-dom';
import { addFavorite } from '../../services/horrobookApi.js';

const BookList = () => {
  const books = useBooks();
  // const { favorites } = useFavorites();

  // const handleFaveClick = (favorite) => {
  //   // const { favorites, setFavorites } = useFavorites();

  //   try {
  //     const addedFave = addFavorite({ favorite });
  //     // const updatedFaves = [...addedFave, favorites];
  //     // setFavorites(updatedFaves);
  //   } catch(err) {
  //     console.log(err.message);
  //   }
  // };
  
  const bookElements = books.map((book) => (
    <li key={book.id}>
      <Link to={`/${book.id}`}>
        <Book {...book} />
      </Link>
      <button onClick={addFavorite(book.title, book.author, book.id)}>Add to favorites</button>
    </li>
  ));

  return <ul>{bookElements}</ul>;
};

export default BookList;
