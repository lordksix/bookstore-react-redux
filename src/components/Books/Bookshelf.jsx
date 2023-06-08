import { v4 as uuidv4 } from 'uuid';
import BookItem from './BookItem';

const bookAr = [
  {
    category: 'Action',
    name: 'The Hunger Games',
    author: 'Suzanne Collins',
    finishedChap: 16,
    totalChap: 24,
    id: uuidv4(),
  },
  {
    category: 'Science Fiction',
    name: 'Dune',
    author: 'Frank Herbert',
    finishedChap: 2,
    totalChap: 25,
    id: uuidv4(),
  },
  {
    category: 'Economy',
    name: 'Capital in the Twenty-First Centry',
    author: 'Suzanne Collins',
    finishedChap: 0,
    totalChap: 24,
    id: uuidv4(),
  },
];

const Bookshelf = () => {
  const books = bookAr.map((book) => (
    <BookItem
      key={book.id}
      category={book.category}
      name={book.name}
      author={book.author}
      finishedChap={book.finishedChap}
      totalChap={book.totalChap}
    />
  ));

  return (
    <>
      {books}
    </>
  );
};

export default Bookshelf;
