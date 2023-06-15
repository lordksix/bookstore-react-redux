import { useState } from 'react';
import styles from 'styles/Books/InputBook.module.css';
import { useDispatch } from 'react-redux';
import { addBook } from 'redux/books/bookSlice';

const InputBook = () => {
  const dispatch = useDispatch();
  const [title, setTitle] = useState('');
  const [author, setAuthor] = useState('');
  const [message, setMessage] = useState('');

  const handleChangeTitle = (e) => {
    setTitle(e.target.value);
  };
  const handleChangeCategory = (e) => {
    setAuthor(e.target.value);
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    if (title.trim() && author.trim()) {
      dispatch(addBook({ title, author }));
      setTitle('');
      setAuthor('');
      setMessage('');
    } else {
      setMessage('Please input title and category');
    }
  };

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
          onChange={handleChangeCategory}
          className={styles.bookFormInput}
        />
        <button type="submit" aria-label="Add Book" className={styles.formBtn}>
          Add Book
        </button>
      </form>
      <span className={styles.formWarning}>{message}</span>
    </div>
  );
};

export default InputBook;
