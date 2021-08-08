/* eslint-disable max-len */
import React from 'react';
import PropTypes from 'prop-types';

const Book = ({ title, author, description, pubDate }) => (
  <>
    <p>{title}</p>
    <p>{author}</p>
    <p>{description}</p>
    <p>{pubDate}</p>
  </>
);

Book.propTypes = {
  title: PropTypes.string.isRequired,
  author: PropTypes.string,
  description: PropTypes.string,
  pubDate: PropTypes.string
};

export default Book;
