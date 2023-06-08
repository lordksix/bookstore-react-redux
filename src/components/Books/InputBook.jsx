import { useState } from 'react';
import useBookLocalStore from 'components/lib/store';
import styles from 'styles/InputBook.module.css';

const InputBook = () => {
  const addBookItem = useBookLocalStore((state) => state.addBookItem);
  const [title, setTitle] = useState('');
  const [category, setCategory] = useState('');
  const [message, setMessage] = useState('');

  const handleChangeTitle = (e) => {
    setTitle(e.target.value);
  };
  const handleChangeCategory = (e) => {
    setCategory(e.target.value);
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    if (title.trim() && category.trim()) {
      addBookItem(title, category);
      setTitle('');
      setCategory('');
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
          placeholder="Book Category"
          value={category}
          onChange={handleChangeCategory}
          className={styles.bookFormInput}
        />
        <button type="submit" className={styles.formBtn}>
          Add Book
        </button>
      </form>
      <span className={styles.formWarning}>{message}</span>
    </div>
  );
};

export default InputBook;
