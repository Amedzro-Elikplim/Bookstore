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
      data.item_id = key;
      return data;
    });

    dispatch(DISPLAY_BOOKS(info));
  } catch (error) {
    console.log(error);
  }
};

export const SAVEBOOK = () => async (_dispatch, getState) => {
  try {
    const bookCount = getState().book.length - 1;
    const bookAdded = getState().book[bookCount];

    const response = await fetch(BASEURL, {
      method: 'POST',
      headers: {
        'Content-type': 'application/json',
      },
      body: JSON.stringify(bookAdded),
    });

    const result = await response.text();
    alert(result);
  } catch (error) {
    console.log(error);
  }
};
