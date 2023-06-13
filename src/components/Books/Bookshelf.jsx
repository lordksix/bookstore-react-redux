import styles from 'styles/Bookshelf.module.css';
import { useSelector } from 'react-redux';
import { selectBooks } from 'redux/books/bookSlice';
import BookItem from './BookItem';

const Bookshelf = () => {
  const booksStore = useSelector(selectBooks);
  const books = booksStore.map((book) => (
    <BookItem
      key={book.id}
      category={book.category}
      title={book.title}
      author={book.author}
      finishedChap={book.finishedChap}
      totalChap={book.totalChap}
    />
  ));
  return (
    <div className={styles.bookshelf}>
      {books}
    </div>
  );
};

export default Bookshelf;
