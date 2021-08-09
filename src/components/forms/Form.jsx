/* eslint-disable max-len */
import React, { useState } from 'react';
import { addFavorite } from '../../services/horrobookApi';

const Form = () => {

  const [title, setTitle] = useState();
  const [author, setAuthor] = useState();

  const handleSubmit = async (e) => {
    e.preventDefault();
    const obj = {
      title, author
    };
    addFavorite(obj);
    setTimeout(() => {
      window.location.href = '/';
    }, 1000);
  };

  return <form onSubmit={handleSubmit}>
    <input placeholder="Title" onChange={((e) => setTitle(e.target.value))} value={title}></input>
    <input placeholder="Author" onChange={((e) => setAuthor(e.target.value))} value={author}></input>
    <button>Add to favorites</button>
  </form>;
  
};

export default Form;
