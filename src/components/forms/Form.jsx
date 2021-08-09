/* eslint-disable max-len */
import React, { useState } from 'react';
import { addFavorite } from '../../services/horrobookApi';
import FavoriteAddForm from './FavoriteAddForm';

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
    <section>
      <h2>Add a new favorite book</h2>
      <FavoriteAddForm {...favorite} onChange={handleChange} onSubmit={handleSubmit} />
    </section>
  );
};

export default Form;
