import { configureStore } from '@reduxjs/toolkit';
import reducer from './books/books';

const store = configureStore({ reducer });

export default store;
