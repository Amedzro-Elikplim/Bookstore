import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { STATUS } from '../redux/books/actions';
import '../styles/category.css';

function Category() {
  const dispatch = useDispatch();
  const data = useSelector((state) => state.category);

  const displayText = () => {
    dispatch(STATUS('Under construction'));
  };

  return (
    <div className="d-flex category-container">
      <div className="construction-text">{data}</div>
      <button type="button" className="category-button" onClick={displayText}>Check status</button>
    </div>
  );
}

export default Category;
