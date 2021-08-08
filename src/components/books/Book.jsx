/* eslint-disable max-len */
import React from 'react';
import PropTypes from 'prop-types';

const Book = ({ title, author, imageUrl, infoUrl, snippet, pubDate }) => (
  <figure>
    <img src={imageUrl} alt={title} height="200px" />
    <figcaption>
      <p>{title}</p>
      <p>{author}</p>
      <p>{infoUrl}</p>
      <p>{snippet}</p>
      <p>{pubDate}</p>
    </figcaption>
  </figure>
);

Book.propTypes = {
  title: PropTypes.string.isRequired,
  author: PropTypes.string,
  imageUrl: PropTypes.string,
  infoUrl: PropTypes.string,
  snippet: PropTypes.string,
  pubDate: PropTypes.string
};

export default Book;
