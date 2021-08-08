import React from 'react';
import { useBooks } from '../../state/book';
import { useParams } from 'react-router-dom';

const BookDetail = () => {
  const { id } = useParams();
  const book = useBooks(id);
  if(!book) return <h1>Loading...</h1>;

  return (
    <section>
      <dl>
        <dt>Title: </dt>
        <dd>{book.item.title}</dd>

        <dt>Author: </dt>
        <dd>{book.item.contributors}</dd>

        <dt>Description: </dt>
        <dd>{book.item.description}</dd>
      </dl>
    </section>
  );
};

export default BookDetail;
