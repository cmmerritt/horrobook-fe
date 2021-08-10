/* eslint-disable max-len */
import React from 'react';
import PropTypes from 'prop-types';
import styles from './Favorite.css';

const Favorite = ({ title, author }) => (
  <div className={styles.Favorite}>
    <p>{title}</p>
    <p>{author}</p>
  </div>
);

Favorite.propTypes = {
  title: PropTypes.string.isRequired,
  author: PropTypes.string,
};

export default Favorite;
