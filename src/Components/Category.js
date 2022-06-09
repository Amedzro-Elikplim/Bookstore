import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { STATUS } from '../redux/books/actions';

function Category() {
  const dispatch = useDispatch();
  const data = useSelector((state) => state.category);

  const displayText = () => {
    dispatch(STATUS('Under construction'));
  };

  return (
    <div>
      <div>{data}</div>
      <button type="button" onClick={displayText}>Check status</button>
    </div>
  );
}

export default Category;
