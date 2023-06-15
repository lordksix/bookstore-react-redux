import { v4 as uuidv4 } from 'uuid';
import PropTypes from 'prop-types';
import { removeBook } from 'redux/books/bookSlice';
import { useDispatch } from 'react-redux';
import styles from 'styles/Books/BookItem.module.css';

const BookItem = (props) => {
  const dispatch = useDispatch();

  const {
    category,
    title,
    author,
    finishedChap,
    totalChap,
    idElem,
  } = props;

  const handleRemoveBook = (id) => {
    dispatch(removeBook(id));
  };

  const bookProgress = `${Math.round((finishedChap / totalChap) * 100)}%`;
  const currentChap = `${finishedChap < totalChap ? finishedChap : 'Finished'} `;
  return (
    <div className={styles.bookItem}>
      <div className={styles.left}>
        <div className={styles.bookCaract}>
          <span className={styles.bookCategory}>{category}</span>
          <div className="bookInfo">
            <h3 className={styles.bookTitle}>{title}</h3>
            <span className={styles.bookAuthor}>{author}</span>
          </div>
        </div>
        <nav className={styles.bookInter}>
          <ul>
            <li key={uuidv4()}>
              <button type="button" onClick={() => handleRemoveBook(idElem)} className={styles.btnPlacehoder}>
                Comments
              </button>
            </li>
            <li key={uuidv4()} className={styles.separator}>|</li>
            <li key={uuidv4()}>
              <button type="button" onClick={() => handleRemoveBook(idElem)} className={styles.btnPlacehoder}>
                Remove
              </button>
            </li>
            <li key={uuidv4()} className={styles.separator}>|</li>
            <li key={uuidv4()}>
              <button type="button" onClick={() => handleRemoveBook(idElem)} className={styles.btnPlacehoder}>
                Edit
              </button>
            </li>
          </ul>
        </nav>
      </div>
      <div className={styles.middle}>
        <span className={styles.big}>{bookProgress}</span>
        <span>completed</span>
      </div>
      <div className={styles.right}>
        <p className={styles.currentHolder}>Current Chapter:</p>
        <p className={styles.currentname}>{currentChap}</p>
        <button type="button" className={styles.btnPlacehoder}>Update Progress</button>
      </div>
    </div>
  );
};

BookItem.propTypes = {
  category: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  author: PropTypes.string.isRequired,
  finishedChap: PropTypes.number.isRequired,
  totalChap: PropTypes.number.isRequired,
  idElem: PropTypes.string.isRequired,
};

export default BookItem;
