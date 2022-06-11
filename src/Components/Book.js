import React from 'react';
import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import { REMOVEBOOK } from '../redux/books/actions';

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
      <div className="d-flex spacing container">
        <p>{title}</p>
        <p>{author}</p>
        <p>{category}</p>
      </div>
      <button type="button" className="button" onClick={removeBook}>
        Remove
      </button>
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
