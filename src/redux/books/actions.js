import BASEURL from '../../api.config';

export const ADD = (book) => ({ type: 'ADD_BOOK', payload: book });
export const REMOVE = (id) => ({ type: 'REMOVE_BOOK', payload: id });
export const STATUS = (text) => ({ type: 'CHECK_STATUS', payload: text });
export const DISPLAY_BOOKS = (books) => ({
  type: 'DISPLAY_BOOKS',
  payload: books,
});

export const FETCHBOOKS = () => async (dispatch) => {
  try {
    const response = await fetch(BASEURL);
    const books = await response.json();
    const info = Object.keys(books).map((key) => {
      const data = books[key][0];
      data.id = key;
      return data;
    });

    dispatch(DISPLAY_BOOKS(info));
  } catch (error) {
    console.log(error);
  }
};
