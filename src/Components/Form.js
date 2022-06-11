import { v4 as uuidv4 } from 'uuid';
import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { ADD, SAVEBOOK } from '../redux/books/actions';
import '../styles/form.css';

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
    const { title, author, category } = state;

    if (title === '' || author === '' || category === '') {
      alert('Fill all fields');
      return;
    }

    const dataObj = {
      item_id: uuidv4(),
      title,
      author,
      category,
    };
    dispatch(ADD(dataObj));
    resetState();
    dispatch(SAVEBOOK());
  };

  return (
    <form onSubmit={handleSubmit} className="form d-flex">
      <input
        className="input"
        type="text"
        placeholder="Book title..."
        name="title"
        onChange={handleChange}
        value={state.title || ''}
      />
      <input
        className="input"
        type="text"
        placeholder="Author.."
        name="author"
        onChange={handleChange}
        value={state.author || ''}
      />
      <input
        className="category-input"
        type="text"
        placeholder="Category.."
        name="category"
        onChange={handleChange}
        value={state.category || ''}
      />
      <button type="submit" className="add-button">ADD BOOK</button>
    </form>
  );
}

export default Form;
