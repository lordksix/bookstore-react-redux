import styles from 'styles/Bookshelf.module.css';
import store from 'redux/store';
import BookItem from './BookItem';

const bookStatus = [
  {
    finishedChap: 16,
    totalChap: 24,
  },
  {
    finishedChap: 2,
    totalChap: 25,
  },
  {
    finishedChap: 0,
    totalChap: 24,
  },
];

const Bookshelf = () => {
  const booksStore = store.getState().books.books;
  const books = booksStore.map((book, i) => (
    <BookItem
      key={book.id}
      category={book.category}
      title={book.title}
      author={book.author}
      finishedChap={bookStatus[i].finishedChap}
      totalChap={bookStatus[i].totalChap}
    />
  ));

  return (
    <div className={styles.bookshelf}>
      {books}
    </div>
  );
};

export default Bookshelf;
