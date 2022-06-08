import React from 'react';
import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import { REMOVE } from '../redux/books/actions';

function Book({ title, author, id }) {
  const dispatch = useDispatch();

  const removeBook = () => {
    dispatch(REMOVE(id));
  };

  return (
    <div className="book-container d-flex">
      <div className="d-flex spacing container">
        <p>{title}</p>
        <p>{author}</p>
      </div>
      <button type="button" className="button" onClick={removeBook}>Remove</button>
    </div>
  );
}

Book.propTypes = {
  title: PropTypes.string.isRequired,
  author: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
};

export default Book;
