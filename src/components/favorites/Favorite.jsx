/* eslint-disable max-len */
import React from 'react';
import PropTypes from 'prop-types';

const Favorite = ({ title, author, description, pubDate }) => (
  <>
    <p>{title}</p>
    <p>{author}</p>
    <p>{description}</p>
    <p>{pubDate}</p>
  </>
);

Favorite.propTypes = {
  title: PropTypes.string.isRequired,
  author: PropTypes.string,
  description: PropTypes.string,
  pubDate: PropTypes.string
};

export default Favorite;