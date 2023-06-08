import { useState } from 'react';
import useBookLocalStore from 'components/lib/store';

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
    <div className="bookInput">
      <h3>Add New Book</h3>
      <form onSubmit={handleSubmit} className="bookForm">
        <input
          type="text"
          placeholder="Book Title"
          value={title}
          onChange={handleChangeTitle}
          className="bookFormInput"
        />
        <input
          type="text"
          placeholder="Book Category"
          value={category}
          onChange={handleChangeCategory}
          className="bookFormInput"
        />
        <button type="submit" className="formBtn">
          Add Book
        </button>
      </form>
      <span className="formWarning">{message}</span>
    </div>
  );
};

export default InputBook;
