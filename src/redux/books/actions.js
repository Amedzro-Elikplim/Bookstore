export const ADD = (book) => ({ type: 'ADD_BOOK', payload: book });
export const REMOVE = (id) => ({ type: 'REMOVE_BOOK', payload: id });
export const STATUS = (text) => ({ type: 'CHECK_STATUS', payload: text });
