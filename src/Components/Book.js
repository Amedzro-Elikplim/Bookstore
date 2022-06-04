import React from 'react';
import PropTypes from 'prop-types';

function Book(props) {
  const { title, author } = props;
  return (
    <div className="book-container">
      <div>
        <p>{title}</p>
        <p>{author}</p>
      </div>
      <button type="button">Remove</button>
    </div>
  );
}

Book.propTypes = {
  title: PropTypes.string.isRequired,
  author: PropTypes.string.isRequired,
};

export default Book;
