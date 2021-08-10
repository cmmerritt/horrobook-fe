/* eslint-disable max-len */
import React, { useState } from 'react';
import { addFavorite } from '../../services/horrobookApi';
import FavoriteAddForm from './FavoriteAddForm';
import BookList from '../books/BookList';
import styles from './FormStyles.css';

const Form = () => {

  const [title, setTitle] = useState('');
  const [author, setAuthor] = useState('');
  const [favorite, setFavorite] = useState({});

  const handleChange = ({ target }) => {
    switch(target.name) {
      case 'title':
        setTitle(target.value);
        break;
      case 'author':
        setAuthor(target.value);
        break;
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const newFavorite = await addFavorite({
      title,
      author
    });

    setFavorite(newFavorite);
  };
  

  return (
    <>
      <section className={styles.Form}>
        <h2>Add a new favorite book</h2>
        <FavoriteAddForm {...favorite} onChange={handleChange} onSubmit={handleSubmit} />
      </section>
      <section className={styles.Form}>
        <h2>Some upcoming releases...</h2>
        <BookList />
      </section>
    </>
  );
};

export default Form;
