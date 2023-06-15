import styles from 'styles/Books/Bookshelf.module.css';
import { useDispatch, useSelector } from 'react-redux';
import { selectBooks, getBooks } from 'redux/books/bookSlice';
import { v4 as uuidv4 } from 'uuid';
import { useEffect } from 'react';
import BookItem from './BookItem';

const Bookshelf = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getBooks());
  }, [dispatch]);

  const { books, isLoading, error } = useSelector(selectBooks);
  const booksArr = books.map((book) => (
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

  const nobooks = (
    <h3 className="center">No Books Found</h3>
  );

  if (isLoading) return <h3 className="center">Loading...</h3>;
  if (error) {
    return (
      <h3 className="center">
        Error:
        {' '}
        {error}
      </h3>
    );
  }
  if (books.length < 1) return <>{nobooks}</>;
  return (
    <div className={styles.bookshelf}>
      {booksArr}
    </div>
  );
};

export default Bookshelf;
