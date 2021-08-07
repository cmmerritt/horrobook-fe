/* eslint-disable max-len */

export const fetchBooks = async () => {
  const res = await fetch('https://www.googleapis.com/books/v1/volumes?q=horror&orderBy=newest');
  const json = await res.json();
  const bookArray = json.items;
  const map = bookArray.map(book => ({
    title: book.volumeInfo.title,
    author: book.volumeInfo.authors,
    imageUrl: book.volumeInfo.imageLinks.smallThumbnail,
    infoUrl: book.volumeInfo.infoLink,
    pubDate: book.volumeInfo.publishedDate
  }));
  return map;
};
