import { v4 as uuidv4 } from 'uuid';
import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { ADD, SAVEBOOK } from '../redux/books/actions';

function Form() {
  const dispatch = useDispatch();
  const initialState = {
    title: '',
    author: '',
    category: '',
  };

  const [state, setState] = useState(initialState);
  const handleChange = (e) => {
    const { name, value } = e.target;
    setState({ ...state, [name]: value });
  };

  const resetState = () => {
    setState({ ...initialState });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const dataObj = {
      item_id: uuidv4(),
      title: state.title,
      author: state.author,
      category: state.category,
    };
    dispatch(ADD(dataObj));
    resetState();
    dispatch(SAVEBOOK());
  };

  return (
    <form onSubmit={handleSubmit}>
      <input type="text" placeholder="Title" name="title" onChange={handleChange} value={state.title || ''} />
      <input type="text" placeholder="Author.." name="author" onChange={handleChange} value={state.author || ''} />
      <input type="text" placeholder="Category.." name="category" onChange={handleChange} value={state.category || ''} />
      <button type="submit">ADD</button>
    </form>
  );
}

export default Form;
