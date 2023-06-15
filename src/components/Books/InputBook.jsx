import { useState } from 'react';
import styles from 'styles/Books/InputBook.module.css';
import { useDispatch, useSelector } from 'react-redux';
import { v4 as uuidv4 } from 'uuid';
import { postBooks } from 'redux/books/bookSlice';
import { selectCategories } from 'redux/categories/categoriesSlice';

const InputBook = () => {
  const dispatch = useDispatch();
  const { categories } = useSelector(selectCategories);
  const [title, setTitle] = useState('');
  const [author, setAuthor] = useState('');
  const [message, setMessage] = useState('');
  const [category, setCategory] = useState('Fiction');

  const handleChangeTitle = (e) => {
    setTitle(e.target.value);
  };
  const handleChangeAuthor = (e) => {
    setAuthor(e.target.value);
  };
  const handleChangeCategory = (e) => {
    setCategory(e.target.value);
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    if (title.trim() && author.trim() && category.trim()) {
      const bookInfo = {
        item_id: uuidv4(),
        title,
        author,
        category,
      };
      dispatch(postBooks(bookInfo));
      setTitle('');
      setAuthor('');
      setCategory('Fiction');
      setMessage('');
    } else {
      setMessage('Please input title and category');
    }
  };
  const catOptions = categories.map((cat) => (
    <option key={uuidv4()} value={cat}>
      {cat}
    </option>
  ));

  return (
    <div className={styles.bookInput}>
      <h3>Add New Book</h3>
      <form onSubmit={handleSubmit} className={styles.bookForm}>
        <input
          type="text"
          placeholder="Book Title"
          value={title}
          onChange={handleChangeTitle}
          className={styles.bookFormInput}
        />
        <input
          type="text"
          placeholder="Book Author"
          value={author}
          onChange={handleChangeAuthor}
          className={styles.bookFormInput}
        />
        <label htmlFor="catForm">
          Category:
          <select id="catForm" value={category} onChange={handleChangeCategory} className={styles.bookFormInput}>
            {catOptions}
          </select>
        </label>

        <button type="submit" aria-label="Add Book" className={styles.formBtn}>
          Add Book
        </button>
      </form>
      <span className={styles.formWarning}>{message}</span>
    </div>
  );
};

export default InputBook;
