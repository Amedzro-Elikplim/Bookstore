import React, { useState } from 'react';

function Form() {
  const [state, setState] = useState({
    state: {
      title: '',
      author: '',
    },
  });
  const handleChange = (e) => {
    const { name, value } = e.target;
    setState({ ...state, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <form onSubmit={handleSubmit}>
      <input type="text" placeholder="Title" name="title" onChange={handleChange} value={state.title || ''} />
      <input type="text" placeholder="Author.." name="author" onChange={handleChange} value={state.author || ''} />
      <button type="submit">ADD</button>
    </form>
  );
}

export default Form;
