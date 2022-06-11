import React from 'react';
import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import { REMOVEBOOK } from '../redux/books/actions';
import '../styles/book.css';

function Book(props) {
  const dispatch = useDispatch();
  const {
    id, title, author, category,
  } = props;

  const removeBook = () => {
    dispatch(REMOVEBOOK(id));
  };

  return (
    <div className="book-container d-flex">
      <div>
        <div className="book-info">
          <p className="category">{category}</p>
          <p className="title">{title}</p>
          <p className="author">{author}</p>
        </div>
        <button type="button" className="button" onClick={removeBook}>
          Remove
        </button>
      </div>

      <div>
        second
      </div>

      <div>
        third
      </div>
    </div>
  );
}

Book.propTypes = {
  title: PropTypes.string.isRequired,
  author: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
  category: PropTypes.string.isRequired,
};

export default Book;
