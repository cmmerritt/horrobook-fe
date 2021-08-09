import React from 'react';
import { useBook } from '../../state/book';
import { useParams } from 'react-router-dom';

const BookDetail = () => {
  const { id } = useParams();
  const book = useBook(id);
  console.log(id);
  if(!book) return <h1>Loading...</h1>;

  return (
    <section>
      <dl>
        <dt>Title: </dt>
        <dd>{book.item.item.title}</dd>

        <dt>Author: </dt>
        <dd>{book.item.contributor_names[0]}</dd>

        <dt>Description: </dt>
        <dd>{book.item.description}</dd>

        <dt>Publication Date: </dt>
        <dd>{book.item.date}</dd>
      </dl>
      <button>Add to favorites</button>
    </section>
  );
};

export default BookDetail;
