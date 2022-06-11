const initialState = [];

const bookReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'ADD_BOOK':
      return [...state, action.payload];

    case 'DISPLAY_BOOKS':
      return action.payload;

    default:
      return state;
  }
};

export default bookReducer;
