import { v4 as uuidv4 } from 'uuid';
import styles from 'styles/Categories/CatHeader.module.css';
import { useDispatch, useSelector } from 'react-redux';
import {
  selectCategories,
  selectCurrentCategories,
  selectCat,
  deselectCat,
} from 'redux/categories/categoriesSlice';

const CatHeader = () => {
  const categories = useSelector(selectCategories);
  const currentCat = useSelector(selectCurrentCategories);
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
  console.log(currentCat);
  const catHeaders = categories.map((cat) => (
    <li key={uuidv4()}>
      <button type="button" className={styles.noBtn} onClick={(e) => handleSelect(e)}>
        {cat}
      </button>
    </li>
  ));
  return (
    <div className={styles.catHeader}>
      <h2>Book Category</h2>
      <nav className="navbar">
        <ul>
          {catHeaders}
          {deselectOption}
        </ul>
      </nav>

    </div>
  );
};

export default CatHeader;
