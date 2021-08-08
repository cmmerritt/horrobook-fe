import React from 'react';
import { useBook } from '../../state/book';
import { useParams } from 'react-router-dom';

const BookDetail = () => {
  const { id } = useParams();
  const book = useBook(id);
  if(!book) return <h1>Loading...</h1>;

  return (
    <section>
      <dl>
        <dt>Title: </dt>
        <dd>{book.title}</dd>

        <dt>Author: </dt>
        <dd>{book.author}</dd>

        <dt>Description: </dt>
        <dd>{book.description}</dd>
      </dl>
    </section>
  );
};

export default BookDetail;
