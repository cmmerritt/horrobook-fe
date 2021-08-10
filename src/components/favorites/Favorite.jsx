/* eslint-disable max-len */
import React from 'react';
import PropTypes from 'prop-types';

const Favorite = ({ title, author }) => (
  <>
    <p>{title}</p>
    <p>{author}</p>
  </>
);

Favorite.propTypes = {
  title: PropTypes.string.isRequired,
  author: PropTypes.string,
};

export default Favorite;
