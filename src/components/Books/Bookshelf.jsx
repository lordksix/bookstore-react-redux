import styles from 'styles/Books/Bookshelf.module.css';
import { useSelector } from 'react-redux';
import { selectBooks } from 'redux/books/bookSlice';
import { v4 as uuidv4 } from 'uuid';
import BookItem from './BookItem';

const Bookshelf = () => {
  const booksStore = useSelector(selectBooks);
  const books = booksStore.map((book) => (
    <BookItem
      key={uuidv4()}
      category={book.category}
      title={book.title}
      author={book.author}
      finishedChap={book.finishedChap}
      totalChap={book.totalChap}
      idElem={book.item_id}
    />
  ));
  return (
    <div className={styles.bookshelf}>
      {books}
    </div>
  );
};

export default Bookshelf;
