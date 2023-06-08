const InputBook = () => {
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
    if(title.trim() && category.trim()){
      setTitle('');
      setCategory('');
      setMessage('');
    } else {
      setMessage('Please input title and category');
    }
  };

  return (
    <>
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
    </form>
    <span className="formWarning">{message}</span>
    </>

  );
};

export default InputBook;
