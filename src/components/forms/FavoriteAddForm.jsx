import React from 'react';
import PropTypes from 'prop-types';
import styles from './FavoriteAddForm.css';

const FavoriteAddForm = ({ title, author, onChange, onSubmit }) => {
  return (
    <section className={styles.FavoriteAddForm}>
      <form onSubmit={onSubmit}>
        <label>
        Title:
          <input
            required
            name="title"
            value={title}
            onChange={onChange}
          />
        </label>
        
        <label>
        Author:
          <input 
            required
            name="author"
            value={author}
            onChange={onChange}
          />
        </label>

        <div>
          <button>Add to favorites</button>
        </div>
      </form>
    </section>
  );
};

FavoriteAddForm.propTypes = {
  title: PropTypes.string,
  author: PropTypes.string,
  onChange: PropTypes.func,
  onSubmit: PropTypes.func
};

export default FavoriteAddForm;
