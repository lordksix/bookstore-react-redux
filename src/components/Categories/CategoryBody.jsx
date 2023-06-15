import PropTypes from 'prop-types';
import BookItem from 'components/Books/BookItem';
import styles from 'styles/Books/Bookshelf.module.css';
import { v4 as uuidv4 } from 'uuid';

const CategoryBody = (props) => {
  const { filteredBooks } = props;

  const books = filteredBooks.map((book) => (
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
  return (
    <div className={styles.bookshelf}>
      {books.length > 0 ? books : nobooks}
    </div>
  );
};

CategoryBody.propTypes = {
  filteredBooks: PropTypes.arrayOf(PropTypes.shape({
    category: PropTypes.string,
    title: PropTypes.string,
    author: PropTypes.string,
    finishedChap: PropTypes.number,
    totalChap: PropTypes.number,
    idElem: PropTypes.string,
  })).isRequired,
};

export default CategoryBody;
