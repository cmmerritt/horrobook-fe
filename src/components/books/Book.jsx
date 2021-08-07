import React from 'react';
import PropTypes from 'prop-types';

const Book = ({ title, author, imageUrl, infoUrl, pubDate }) => (
  <figure>
    <img src={imageUrl} alt={title} height="200px" />
    <figcaption>
      <p>{title}</p>
      <p>{author}</p>
      <p>{infoUrl}</p>
      <p>{pubDate}</p>
    </figcaption>
  </figure>
);

Book.propTypes = {
  title: PropTypes.string.isRequired,
  author: PropTypes.string.isRequired,
  imageUrl: PropTypes.string,
  infoUrl: PropTypes.string,
  pubDate: PropTypes.string
};

export default Book;
