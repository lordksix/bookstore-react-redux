import { v4 as uuidv4 } from 'uuid';
import PropTypes from 'prop-types';

const BookItem = (props) => {
  const {
    category,
    name,
    author,
    finishedChap,
    totalChap,
  } = props;

  const bookProgress = `You have read ${(finishedChap / totalChap) * 100} %`;
  const currentChap = `${finishedChap < totalChap ? finishedChap : 'Finished'} `;
  return (
    <div className="bookItem">
      <div className="left section">
        <span className="bookCat">{category}</span>
        <span className="bookTitle">{name}</span>
        <span className="bookAuthor">{author}</span>
        <nav className="bookInter">
          <ul>
            <li key={uuidv4()}>Commets |</li>
            <li key={uuidv4()}>Remove |</li>
            <li key={uuidv4()}>Edit |</li>
          </ul>
        </nav>
      </div>
      <div className="middle section">
        <p>{bookProgress}</p>
      </div>
      <div className="right section">
        <p className="currentHolder">Current Chapter</p>
        <p className="currentname">{currentChap}</p>
        <div className="btnPlacehoder">Update Progress</div>
      </div>
    </div>
  );
};

BookItem.propTypes = {
  category: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  author: PropTypes.string.isRequired,
  finishedChap: PropTypes.number.isRequired,
  totalChap: PropTypes.number.isRequired,
};

export default BookItem;
