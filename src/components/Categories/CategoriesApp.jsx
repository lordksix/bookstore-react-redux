import { v4 as uuidv4 } from 'uuid';
import styles from 'styles/Categories/CategoriesApp.module.css';
import { useDispatch, useSelector } from 'react-redux';
import { selectFilteredBooks } from 'redux/books/bookSlice';
import {
  selectCategories, selectCat, deselectCat,
} from 'redux/categories/categoriesSlice';
import CategoryBody from './CategoryBody';

const CategoriesApp = () => {
  const categories = useSelector(selectCategories);
  const filteredBooks = useSelector(selectFilteredBooks);
  const dispatch = useDispatch();

  const handleSelect = (e) => {
    const id = e.target.textContent;
    dispatch(selectCat(id));
  };
  const handleDeselect = () => {
    dispatch(deselectCat());
  };
  const deselectOption = (
    <li key={uuidv4()}>
      <button type="button" className={styles.noBtn} onClick={() => handleDeselect()}>
        None
      </button>
    </li>
  );
  const catHeaders = categories.map((cat) => (
    <li key={uuidv4()}>
      <button type="button" className={styles.noBtn} onClick={(e) => handleSelect(e)}>
        {cat}
      </button>
    </li>
  ));

  return (
    <>
      <div className={styles.catHeader}>
        <h2>Book Category</h2>
        <nav className="navbar">
          <ul>
            {catHeaders}
            {deselectOption}
          </ul>
        </nav>
      </div>
      <CategoryBody filteredBooks={filteredBooks} />
    </>
  );
};

export default CategoriesApp;
